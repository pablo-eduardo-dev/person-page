import React from "react";
import "./AboutProject.css";

import render from '../assets/render.gif'

const AboutProject = () => {
  return (
    <main>
      <section className="container">
        <div className="content">
          <p>Just a demo site made with React + Vite</p>
          <a href="https://www.pixiv.net/en/users/16274829/artworks?p=2" target="_blank" rel="noopener noreferrer"><img src={render} alt="anime-gif" /></a>
          
        </div>
      </section>
    </main>
  );
};

export default AboutProject;
