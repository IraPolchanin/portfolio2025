import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="row mb-5">
          <div className="col d-none d-lg-block">
            <img src="/images/yogurt.png" className="img-fluid" alt="yogurt app preview" />
          </div>
          <div className="col">
            <div className="project-description">
              <h2 className="mb-5">Yogurt Project</h2>
              <p className="mb-5 text-muted">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <Link to="/work" className="btn btn-branding-outline" title="Yogurt project">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;