import React from 'react';
import { Link } from 'react-router-dom';
import ContactBox from './ContactBox';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer>
      <ContactBox />
      <div className="d-flex justify-content-center mb-5">
        <a href="mailto:ira.polchanin@gmail.com" className="email-link">
          ira.polchanin@gmail.com
        </a>
      </div>
      <SocialLinks />
      <p className="text-center mt-5">
        This project is{' '}
        <a href="https://github.com/IraPolchanin/Portfolio-project" target="_blank" rel="noopener noreferrer">
          open-sourced ✌🏻
        </a>
      </p>
    </footer>
  );
}

export default Footer;