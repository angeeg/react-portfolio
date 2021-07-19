import React from "react";
import workDay from '../../images/workdayscheduluer.png'

function Portfolio() {
    // variable goes here
    const data = [
        {
            image: workDay,
            name: "Project Name",
            URL: "link",
            github: "link"
        }
    ]
    // return statement 
    return (
        <div>
        <h1>Portfolio</h1>
        {data.map(project => (
            <h1>{project.name}</h1>
        ))}
        </div>
    )
};

export default Portfolio; 