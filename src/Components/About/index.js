import React from "react";
import { Avatar } from "@material-ui/core";
import "@fontsource/roboto";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';


function About() {
  // variable goes here
  const useStyles = makeStyles({
    bigAvatar: {
      margin: 10,
      width: 75,
      height: 75,
    },
  });

  const classes = useStyles();
  // return statement
  return (
    
      <div className='aboutme'>
        
          <h1>About Me</h1>
          <div className='avatar'>
          <Avatar className={classes.bigAvatar} alt="Angeleena Syse" src="../../images/avatar.jpg"/>
          </div>
        <p>
          Hello, I'm Angeleena and I am a junior full stack web developer. I am
          still getting my feet wet in the coding world, but it is something I
          have become very passionate about over the past six months as I
          completed a full-stack coding bootcamp at UC Berkeley. While it was
          fast-paced and quite challenging it was am amazing, rewarding
          experience. I have grown as a web developer exponentially since
          Janurary 2021 when I started the program.
        </p>

        <p>
          My portfolio is ever-changing as I continue to create new projects and
          work to improve past ones. While I don't have any hands on coding
          experience outside of the bootcamp, I have learned a great deal about
          the work environment in a coding atmosphere and how to work with a
          team to complete a well designed, functional application. Throughout
          the bootcamp we were required to complete 3 group projects, and while
          working remotely with little coding experience proved itself very
          challenging, it was a great learning experience and prepared me for
          the real coding world.
        </p>

        <p>
          My previous professions were in culinary arts as a line cook, and 
          then veterinary medicine as a
          veterinary technician for the past 6 years. While my hands on skills
          from my pervious careers don't relate much to skills needed in the
          coding environment, there are several qualities I've inherited that
          will help me excel in coding. I am a problem solver, a hard worker, 
          a fast learner, and I am very eager to learn. I excel in time management
          since I'm used to working on a schedule, and having to get things done 
          within a certain time frame. These are just a couple examples of my 
          qualities that will make me a great candidate to become your new 
          junior full-stack web developer.
        </p>
        </div>

     
   
  );
}

export default About;
