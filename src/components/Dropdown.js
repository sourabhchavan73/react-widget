import React, { useState, useEffect, useRef } from 'react'

function Dropdown({ options, selected, onSelectedChange }) {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const deleteFromDom = (event) => {
            if(ref.current.contains(event.target)){
                return ;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', deleteFromDom )

        return () => {
            document.body.removeEventListener('click', deleteFromDom);
        }
    }, [])

    const dropdownOptions = options.map((option,index) => {
        if(option.value === selected.value){
            return null;
        }

        return(
            <div
                key={index} 
                className="item"
                onClick={ () => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })



    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label htmlFor="" className="label">Select a color</label>
                <div onClick={() => setOpen(!open)} className={`ui  selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${ open ? 'visible transition' : ''}`}>
                        {dropdownOptions}
                    </div>
                </div>
            </div>

            <div style={{color:selected.value}} >color is: {selected.value}</div>
            
        </div>
    )
}

export default Dropdown
