import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon  from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email';
import './style.css'

function Footer() {
    // variable goes here

    // return statement 
    return (
        <>
        <div className='footer'>
        <div className='icons'>
        <span className='email'>
        <a href="mailto:angeleenasyse@gmail.com" target="_blank"><EmailIcon fontSize="large"/></a>
        </span>
        <span className='github'>
        <a href="https://github.com/angeeg" target="_blank"><GitHubIcon fontSize="large"/></a>
        </span>
        <span className='linkedin'>
        <a href="https://www.linkedin.com/in/angeleena-syse-16a1b0200/" target="_blank"><LinkedInIcon fontSize="large"/></a>
        </span>
   
        </div>
        </div>
        </>
    )
};

export default Footer; 