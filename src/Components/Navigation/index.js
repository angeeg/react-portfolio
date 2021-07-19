import React from "react";


function Navigation(props) {
    // variable goes here

    // return statement 
    return (
            <nav>
                <ul className="flex-row">
                    <li className="mx-2" onClick={() => props.setPage(props.pages[0])}>
                        <p>About Me</p>
                    </li>
                    <li className="mx-2" onClick={() => props.setPage(props.pages[1])}>
                        <p>Portfolio</p>
                    </li>
                    <li className="mx-2" onClick={() => props.setPage(props.pages[2])}>
                        <p>Contact</p>
                    </li>
                    {/* <li className="mx-2" onClick={() => props.setPage(props.pages[0])}>
                        <a>Resume</a>
                    </li> */}
                </ul>
            </nav>
    )
};

export default Navigation; 