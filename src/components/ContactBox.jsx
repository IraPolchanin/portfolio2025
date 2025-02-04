import React from 'react';
import { Link } from 'react-router-dom';

function ContactBox() {
  return (
    <div className="contact-box justify-content-between mb-5 d-none d-md-flex">
      <div>
        <h3>Work Inquiry</h3>
        <p className="text-muted">Let's work together and I'll help you by all my best</p>
      </div>
      <div>
        <Link to="/contact" className="btn btn-branding mt-3" title="Contact Iryna">
          Contact me
        </Link>
      </div>
    </div>
  );
}

export default ContactBox;