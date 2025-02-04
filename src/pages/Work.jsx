import React from 'react';

function Work() {
  const projects = [
    {
      image: '/images/yogurt.png',
      title: 'Yogurt project',
      tech: 'Built with HTML and CSS'
    },
    {
      image: '/images/weather.png',
      title: 'Weather project',
      tech: 'Built with HTML, CSS and JavaScript'
    },
    {
      image: '/images/dictionary.png',
      title: 'Dictionary project',
      tech: 'Built with HTML, CSS and React'
    },
    {
      image: '/images/translation.png',
      title: 'Translation project',
      tech: 'Built with HTML, CSS and JavaScript'
    }
  ];

  return (
    <div className="content-container container-fluid">
      <div className="content">
        <h1 className="mb-5">Take a look at what I've been working on!</h1>
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6 mb-5">
              <img 
                className="img-fluid mb-3 rounded" 
                src={project.image} 
                alt={`${project.title} picture`} 
              />
              <h3 className="text-center m-0">{project.title}</h3>
              <p className="text-center text-muted">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;