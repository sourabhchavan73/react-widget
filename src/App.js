import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header'


function App() {
    const items = [
        {
            title: 'What is react?',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, dolorem.'
        },
        {
            title: 'why we use react',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, dolorem.'
        },
        {
            title: 'other framework?',
            content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, dolorem.'
        },
    ];

    const dropdownOptions = [
        {
            label: 'The color Red',
            value: 'red'
        },
        {
            label: 'The color of greeen',
            value: 'green'
        },
        {
            label: 'the color of black',
            value: 'black'
        }
    ]

    const[selected, setSelected] = useState(dropdownOptions[0]);
    // const[selected, setSelected] = useState(options[0]);
    const [text, setText] = useState('')

    return (
        <div>
            {/* <Accordion items = {items} /> */}
            {/* <Search /> */}
            {/* <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={dropdownOptions} 
            /> */}
            <Header />
            <Route path="/">
                <Accordion items = {items} />
            </Route>

            <Route path="/search">
                <Search />
            </Route>

            <Route path="/dropdown">
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={dropdownOptions} 
            />
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>
            
            

        </div>
    )
}

export default App

