import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert'

const options = [
    {
        label: 'africans',
        value: 'af'
    },
    {
        label: 'arabic',
        value: 'ar'
    },
    {
        label: 'hindi',
        value: 'hi'
    },
]

function Translate() {
    const [languages, setLanguages] = useState(options[0]);
    const [text, setText] = useState('')

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter text</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value) }                    
                        type="text"/>
                </div>
            </div>
            <Dropdown 
                selected={languages}
                onSelectedChange={setLanguages}
                options={options}
            />

            <hr/>
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={languages} />
        </div>

    )
}

export default Translate
