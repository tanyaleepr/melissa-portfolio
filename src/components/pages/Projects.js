import React from 'react';
import flexbox from '../../assets/images/flexbox.PNG'
import horiseon from '../../assets/images/horiseon.PNG'
import portfolio from '../../assets/images/portfolio.PNG'
import runbuddy from '../../assets/images/run-buddy.PNG'

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <section id="my-work" class="My-work">
    <div class="title"><h2>My Work</h2></div>
    <div class = "projects-grid-wrapper">
        <div class="projects-grid">
            <a href="./assets/images/horiseon.PNG" target="_blank" class="project horiseon">
              <img src={horiseon}></img>
                <div class="project-name">
                    <h3>Horiseon</h3>
                    <p>HTML/CSS</p>
                </div>
            </a>
            <a href="https://github.com/lukegranered/video-devs/tree/main" target="_blank" class="video-dev">
            <img src={runbuddy}></img>
                <div class="project-name">
                    <h3>video-dev</h3>
                    <p>HTML/CSS</p>
                    
                </div>
            </a>
            <a href="https://github.com/DonL44/newage-datingblog" target="_blank" class="project1">
            <img src={portfolio}></img>
                <div class="project-name">
                    <h3>Run Buddy 2</h3>
                    <p>HTML/CSS</p>
                </div>
            </a>
            <a href="https://spencerhulse.github.io/newJobs-you/landingpage.html" target="_blank" class="group project">
            <img src={flexbox}></img>
                <div class="project-name">
                    <h3>New Jobs (you)</h3>
                    <p>HTML/CSS</p>
                </div>
            </a>
    </div>
    </div>
    </section>
  

    </div>
  );
}
