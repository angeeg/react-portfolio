import React from 'react'
import './style.css'

function Resume() {
    return (
        <div className='resume'>
         
         
         <h1>Resume</h1>
         <h4><a href="https://docs.google.com/document/d/1vF9DBqJNGf7SYoT8DqRZXmqgmFtmIAF9c7kc2kQe-Gs/edit?usp=sharing" target="_blank" >View my resume here</a></h4>
        

        <h3>Front-End Proficiencies</h3>
        {/* <div className='frontlist'> */}
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
        {/* </div> */}
        <h3>Back-End Proficiencies</h3>
        {/* <div className='backlist'> */}
        <ul className='backlist'>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>REST</li>
            <li>GraphQL</li>
        </ul>
        {/* </div> */}
        </div>
    )
}

export default Resume
