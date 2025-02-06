import React from 'react';
import { Link } from 'react-router-dom';
import quizzicalApp from '../assets/quizzical-app.png';

function Home() {
  return (
    <>
      <div className="hero ">
        <p>👋🏻 Hallo, I am</p>
        <h1>Iryna Polchaninova</h1>
        <h2 className="mb-5">Front-end developer based in 🇺🇦Ukraine</h2>
        <div>
          <Link to="/contact" className="btn btn-branding" title="Contact Iryna">Contact me</Link>
        </div>
      </div>
      <p className="text-center m-5">Featured Project which my best projects be choice to show</p>
      <div className="container-fluid">
        <div className="row mb-3 align-items-center justify-content-center g-3">
          <div className="col-lg-5 d-none d-lg-block text-center">
            <img
              src={quizzicalApp}
              className="img-fluid w-75 rounded-3 mx-auto d-block"
              alt="Quizzical-App preview"
            />
          </div>
          <div className="col-lg-5">
            <div className="project-description">
              <h2 className="mb-3">Quizzical App</h2>
              <p className="mb-3 text-muted">Quizzical is a customizable trivia game that allows users to test their knowledge in various categories. The app provides multiple-choice and true/false questions with adjustable difficulty levels.</p>
              
              <Link to="/work" className="btn btn-branding-outline" title="Quizzical-App">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;