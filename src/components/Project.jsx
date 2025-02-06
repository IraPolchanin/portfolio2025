import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-5">
      <div className="card h-100 shadow-sm">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-muted"
        >
          <img
            className="img-fluid mb-3 rounded"
            src={project.image}
            alt={`${project.title} picture`}
          />
          <h3 className="text-center m-0">{project.title}</h3>
          <p className="text-center text-muted">{project.tech}</p>
        </a>
      </div>
    </div>
  )
}

export default Project