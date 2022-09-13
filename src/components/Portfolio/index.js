import "./index.scss"
import { projects } from '../constants/constants'

import React, { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
// import { getDocs, collection } from 'firebase/firestore';
// import { db } from '../../firebase';

import img01 from '../../assets/images/projects/proj01.png'
import stepFow from '../../assets/images/step-forward-solid-svgrepo-com.svg'
import stepBac from '../../assets/images/step-backward-solid-svgrepo-com.svg'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  // const [activeItem, setActiveItem] = useState(0);

  // const carouselRef = useRef();

  setTimeout(() => {
    setLetterClass('text-animate-hover');
  }, 3000);

  // console.log(projects);

  const renderProjects = (projects) => {
    return (
      <div className="projects-container">
        <div className="wrapper"
          style={{
            transition: `all 1.5s ease`,
            transform: `translateX(${slideIndex * (-284 - 16)}px)`
          }}>
          {
            projects.map((project, idx) => {
              return (
                <div className="card-container" key={idx}>

                  <div className="image-box" >
                    <img
                      src={project.image}
                      className="projects-image"
                      alt={project.title} />
                  </div>

                  <div className="content">
                    <p className="title">{project.title}</p>
                    <h4 className="description">{project.description}</h4>
                    <h4 className="proj-t">{project.tags.join(" || ")}</h4>
                  </div>

                  <div className='buttons'>
                    <button
                      className="btn"
                      onClick={() => window.open(project.source[0])}
                    // onClick={() => alert('View Code')}
                    >Client</button>
                    <button
                      className="btn"
                      onClick={() => window.open(project.source[0])}
                    // onClick={() => alert('View Code')}
                    >Server</button>
                    <button
                      className="btn"
                      onClick={() => window.open(project.visit)}
                    >View App</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
  ///////////////////////////////////

  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    console.log(direction);
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : projects.length - 1 - 2)
    } else {
      setSlideIndex(slideIndex < projects.length - 1 - 2 ? slideIndex + 1 : 0)

    }
  }


  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={"Portfolio".split("")}
            idx={15}
          />
        </h1>
        <div className="proj_buttons_LR">
          <button className="left" direction="left" onClick={() => handleClick('left')}>
            <img src={stepBac} />
          </button>

          <div>{renderProjects(projects)}</div>


          <button className="right" direction="right" onClick={() => handleClick('right')}>

            <img src={stepFow} />
          </button>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default Portfolio;