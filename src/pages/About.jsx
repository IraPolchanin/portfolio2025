import React from 'react';
import { Link } from 'react-router-dom';
import myPhoto from '../assets/photo_Polchaninova.jpeg';

function About() {
  return (
    <div className="content-container container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="content">
            <h1 className="mb-5">👋🏻 Hi! I am Iryna Polchaninova</h1>
            <h2 className="mb-5">Front-end developer based in 🇺🇦Ukraine</h2>
            <p>
              I’m a frontend developer with a twist—I’ve got a background in Economics and academia, which means I bring a mix of analytical thinking and technical skills to the table. Right now, I’m diving deep into HTML, CSS, Sass, JavaScript, React, and TypeScript, always pushing myself to grow in the ever-evolving world of web development.
            </p>
            <p>
              I love blending my passion for technology with my academic curiosity to create clean, functional, and impactful digital experiences. Every project is a chance to learn something new, and I’m always excited to take on the next challenge! 🚀 Let’s build something awesome together!
            </p>
            <Link to="/work" className="btn btn-branding" title="Iryna's work">
              See my projects
            </Link>
          </div>
        </div>
        <div className="col-lg-6 d-flex align-items-center">
          <img 
            className="img-fluid rounded w-75" 
            src={myPhoto} 
            alt="Iryna Polchaninova" 
          />
        </div>
      </div>
    </div>
  );
}

export default About;