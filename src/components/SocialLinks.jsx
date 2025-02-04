import React from 'react';

function SocialLinks() {
  const socialLinks = [
    {
      icon: 'fa-brands fa-instagram',
      href: 'https://www.instagram.com/polchaninovairina/',
      title: 'Instagram Profile'
    },
    {
      icon: 'fa-brands fa-github',
      href: 'https://github.com/IraPolchanin',
      title: 'GitHub Profile'
    },
    {
      icon: 'fa-brands fa-facebook',
      href: 'https://www.facebook.com/iryna.polchaninova',
      title: 'Facebook Profile'
    }
  ];

  return (
    <div className="social-link d-flex justify-content-center">
      {socialLinks.map((link, index) => (
        <a 
          key={index} 
          href={link.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          title={link.title}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;