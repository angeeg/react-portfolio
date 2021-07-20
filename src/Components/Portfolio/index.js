import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import './style.css'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
    imageList: {
      width: 650,
      height: 800,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

function Portfolio() {
    // variable goes here
    const classes = useStyles();

    const data = [
        
        {
            image: '/images/reciperoster.png',
            name: "Recipe Roster (Team Project)",
            URL: "https://recipe-roster.herokuapp.com/",
            github: "https://github.com/campbefs/recipe-roster.git",
            language: "MERN Stack"
        },
        {
            image: '/images/moviequiz.png',
            name: "Moive Quiz (Team Project)",
            URL: "https://outcast-movie-quiz.herokuapp.com/",
            github: "https://github.com/DevinPask/Outcast-Project.git",
            language: "Express.js/Sequelize/ORM/MVC"
        },
        {
            image: '/images/readmegen.gif',
            name: "README Generator",
            URL: "https://github.com/angeeg/readme-generator.git",
            github: "https://github.com/angeeg/readme-generator.git",
            language: "Node.js CLI"
        },
        {
            image: '/images/ecombackend.gif',
            name: "E-Commerce Back End",
            URL: "https://github.com/angeeg/ecom-backend.git",
            github: "https://github.com/angeeg/ecom-backend.git",
            language: "Express.js/Sequelize/ORM"
        },
        {
            image: '/images/recipesearch.png',
            name: "Simple Recipes (Team Project)",
            URL: "https://mirsaperez.github.io/edamame/",
            github: "https://github.com/mirsaperez/edamame.git",
            language: "HTML/CSS/JavaScript"
        },
        // {
        //     image: '/images/workdayscheduler.png',
        //     name: "Work Day Scheduler",
        //     URL: "https://angeeg.github.io/workdayschedule/",
        //     github: "https://github.com/angeeg/workdayschedule.git",
        //     language: "Third Party APIs"
        // },
        {
            image: '/images/runbuddy.gif',
            name: "Run Buddy",
            URL: "https://angeeg.github.io/run-buddy/",
            github: "https://github.com/angeeg/run-buddy.git",
            language: "CSS/JavaScript"
        }
    ]
    // return statement 
    return (
        <div className='portfolio'>
         <h3>Portfolio</h3>   
        <ImageList className={classes.imageList}>
          <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
           
          </ImageListItem>
          {data.map((project) => (
            <ImageListItem key={project.img}>
              <img src={project.image} alt={project.name} />
              <ImageListItemBar
                title={project.name}
                subtitle={<span>{project.language}</span>}
                actionIcon={
                  <IconButton href={project.URL} aria-label={`info about ${project.name}`} className={classes.icon}>
                    <GitHubIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>


        // <div className='portfolio'>
        // <h1>Portfolio</h1>
        // {data.map(project => (
        //     <h1>{project.name}</h1>
        // ))}
        // </div>
    )
};

export default Portfolio; 