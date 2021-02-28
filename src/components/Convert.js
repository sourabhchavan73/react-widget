import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Convert({language, text}) {
    const [translated, setTransleted] = useState('');
    const [debounceText, setDebounceText] = useState(text); 

    useEffect(() => {
        const timerId = setTimeout( ()=>{
            setDebounceText(text)
        }, 500)

        return ()=> {
            clearTimeout(timerId)
        }
 
    }, [text])

    useEffect(() => {
        const translatedText = async() => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, 
            {
                params: {
                    q: debounceText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                },
            });

            setTransleted(data.data.translations[0].translatedText);
            
        }

        translatedText();

    }, [language, debounceText])

    return (
        <h1>{translated}</h1>
    )
    
}

export default Convert
