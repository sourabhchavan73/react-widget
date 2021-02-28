import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Search() {
    const [query, setQuery] = useState('programming');
    const [results, setResult] = useState([ ]);

    const searchHandler = (e) => {
        setQuery(e.target.value)
    }

    useEffect(() => {
        const  resultHandler = async () => {
            const  { data }  = await axios.get('https://en.wikipedia.org/w/api.php', {
              params: {
                action: 'query',
                list: 'search',
                origin: '*',
                format: 'json',
                srsearch: query,
              },
            });

            setResult(data.query.search);
            // console.log(results)
            
        };
        
        if(query && !results.length){
            resultHandler();
        } else{
            const timeOutId = setTimeout(()=> { 
                if(query){
                    resultHandler();
                }
            }, 500)
    
            return () => {
                clearTimeout(timeOutId)
            };
        }
    },[query])



    return (
        <div>
            <form action="">
                <div className="ui form">
                    <div className="field">
                        <label>Search</label>
                        <input 
                            type="text"
                            value={query}
                            onChange={e => searchHandler(e)}
                        />
                    </div>
                </div>
            </form>

            { 
                results.map(result => (
                    <div key={result.pageid} className="ui cards item">
                        <div className="right floated content">
                            <a 
                                href={`https://en.wikipedia.org?curid=${result.pageid}`}
                                className="ui button"
                            >
                                Go
                            </a>
                        </div>
                        
                        <div className="card">
                            <div className="content">
                                <div className="header">{result.title}</div>
                                <div className="meta">{result.snippet}</div>
                                <div className="description">
                                Elliot Fu is a film-maker from New York.
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Search;
