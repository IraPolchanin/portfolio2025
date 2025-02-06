import React from 'react';
import movieWatchList from '../assets/movie_watchlist.png';
import quizzicalApp from '../assets/quizzical-app.png';
import budgetTracker from '../assets/budget-tracker.png';
import tenziesGame from '../assets/tenzies-game-app.png';
import lemon from '../assets/little-lemon.png'
import weather from '../assets/weather.png';
import dictionary from '../assets/dictionary.png';
import chefIA from '../assets/chefAI.png';
import Project from '../components/Project';

function Work() {
  const projects = [
    {
      image: chefIA,
      title: 'ChefAI Assistant',
      tech: 'Built with HTML, CSS, React, TypeScript and Mistral API',
      link: 'https://github.com/IraPolchanin/chef_AI'
    },
    {
      image: movieWatchList,
      title: 'Movie Watchlist App',
      tech: 'Built with HTML, CSS and JavaScript',
      link: 'https://irapolchanin.github.io/Movie-WishList/'
    },
    {
      image: quizzicalApp,
      title: 'Quizzical App',
      tech: 'Built with HTML, CASS and React',
      link: 'https://irapolchanin.github.io/Quizzical-App/'
    },
    {
      image: budgetTracker,
      title: 'Budget Tracker',
      tech: 'Built with HTML, React and Styled Components',
      link: 'https://irapolchanin.github.io/Budget-Tracker/'
    },
    {
      image: tenziesGame,
      title: 'Tenzies Game App',
      tech: 'Built with HTML, CSS and React',
      link: 'https://irapolchanin.github.io/Tenzies-Game-App/'
    },
    {
      image: lemon,
      title: 'Little Lemon Capstone',
      tech: 'Built with HTML, CASS and React',
      link: 'https://irapolchanin.github.io/capstone-app/'
    },
    {
      image: weather,
      title: 'Weather project',
      tech: 'Built with HTML, CSS and React',
      link: 'https://dainty-gingersnap-d0fc05.netlify.app/'
    },
    {
      image: dictionary,
      title: 'Dictionary project',
      tech: 'Built with HTML, CSS and React',
      link: 'https://delicate-meringue-8e6586.netlify.app/'
    }
  ];

  return (
    <div className="content-container container-fluid my-5">
      <div className="content">
        <h1 className="text-center mb-5">Take a look at what I've been working on!</h1>
        <div className="row g-4">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;