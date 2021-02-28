import React, { useState } from 'react'

function Accordion({ items }) {

    const[selectedIndex, setSelectedIndex] = useState( );
    const[count, setCount] = useState(0)

    
    const titleClickHandler = ( index) =>{
        // console.log("title clicked", index);
        setSelectedIndex(index);
    }

    const countHandler = () =>{
        let newCount = count + 1;
        setCount(newCount)
    }

    const accordionContent = items.map((item, index) => {
        const active = index === selectedIndex ? 'active' : ''

        return (
            <React.Fragment key={item.title}>
                <div 
                    className={`title ${active}`}
                    onClick={() => titleClickHandler(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>

                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment> 
        )
    })

    return (
        <div>
            <div className="ui styled accordion">
                {accordionContent}
            </div>
        
            <h1>{selectedIndex === undefined ? null : `Title selected: ${selectedIndex}`}</h1>

        </div>
    )
}

export default Accordion 
