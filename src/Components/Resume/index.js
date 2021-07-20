import React from 'react'
import './style.css'

function Resume() {
    return (
        <div className='resume'>
         
         <div className='download'>
         <h2>Resume</h2>
         <h4>Download <a href="https://drive.google.com/file/d/1dunKK7XaWyxPO19rnzgfq8_sR_-L3o_V/view?usp=sharing">my resume</a>.</h4>
         </div>

        <h3>Front-End Proficiencies</h3>
        <div className='frontlist'>
        <ul className='frontlist'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Semantic-UI</li>
            <li>Material-UI</li>
        </ul>
        </div>
        <h3>Back-End Proficiencies</h3>
        <div className='backlist'>
        <ul className='backlist'>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>REST</li>
            <li>GraphQL</li>
        </ul>
        </div>
        </div>
    )
}

export default Resume
