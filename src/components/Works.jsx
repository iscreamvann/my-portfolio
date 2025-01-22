import React, { useState } from 'react';
import fishingLogbookFrontend from '../assets/fishingLogbookFrontend.jpeg';
import fishingLogbookBackend from '../assets/logbookBackend.jpeg';
import myPortfolio from '../assets/my-portfolio.png';
import toDoList from '../assets/to-do-list.png';
import spotifyReplica from '../assets/spotify-replica.jpeg';
import aboveTheFold from '../assets/aboveTheFold.png';



const projects = [
  {
    name: 'My Portfolio',
    description: 'A showcase of my skills and projects. A very fun and stylish design, that I am incredibly proud of.',
    image: myPortfolio,
    demoLink: 'https://main--kylevannportfolio.netlify.app/',
    codeLink: 'https://github.com/iscreamvann/my-portfolio.git',
  },
  {
    name: 'Above The Fold Challenge',
    description: 'A fully responsive React project built with styled-components, replicating an existing website for an interview challenge. It adapts seamlessly from desktop to mobile.',
    image: aboveTheFold,
    demoLink: 'https://above-the-fold-challenge.netlify.app/',
    codeLink: 'https://github.com/iscreamvann/above-the-fold-challenge',
  },
  {
    name: 'Responsive List Application',
    description: 'A responsive list web application built with React, allowing users to sort items by date and priority, with a seamless experience across desktop and mobile devices.',
    image: toDoList,
    demoLink: 'https://lotsoflists.netlify.app/',
    codeLink: 'https://github.com/iscreamvann/to-do-list',
  },
  {
    name: 'Fishing Logbook Frontend',
    description: 'A fishing logbook app developed to help anglers track and enhance their fishing experiences.',
    image: fishingLogbookFrontend,
    demoLink: '/',
    codeLink: 'https://github.com/iscreamvann/fishing-logbook-frontend',
  },
  {
    name: 'Fishing Logbook Backend',
    description: 'Unfortunately the App is not currently deployed, but do feel free to have a look at my code throughout my gitHub account and repositories.',
    image: fishingLogbookBackend,
    demoLink: '/',
    codeLink: 'https://github.com/iscreamvann/fishing-logbook-frontend',
  },
  {
    name: 'Spotify CSS Replica',
    description: 'My first CSS project, created during my time at Boolean UK.',
    image: spotifyReplica,
    demoLink: 'https://main--spotify-replica-kv.netlify.app/',
    codeLink: 'https://github.com/iscreamvann/html-spotify-challenge.git',
  },
];

const Works = () => {
  const [flipped, setFlipped] = useState(null);

  const handleCardClick = (index) => {
    setFlipped(flipped === index ? null : index);
  };

  const cardWrapperStyles = {
    position: 'relative',
    width: '100%',
    height: '250px',
    perspective: '1000px',
    flexShrink: 0,
    marginRight: '16px',
  };

  const cardStyles = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  const cardFlippedStyles = {
    ...cardStyles,
    transform: 'rotateY(180deg)',
  };

  const cardSideStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: '#fff', // Set background color to white
  };

  const cardFrontStyles = (imageUrl) => ({
    ...cardSideStyles,
    backgroundSize: 'contain', // or 'cover' depending on the desired effect
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${imageUrl})`,
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  });

  const cardBackStyles = {
    ...cardSideStyles,
    color: '#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'rotateY(180deg)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div name='work' className='w-full md:h-screen text-[#000000] bg-gradient-to-r from-[#1CD760] to-[#16a34a]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex flex-col items-center'>
          <p className='text-4xl font-bold border-b-4 text-[#000000] border-[#000000]'>Work</p>
          <p className='py-6 text-2xl'>Please click the cards below, to check out some of my most recent work.</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              style={cardWrapperStyles}
              onClick={() => handleCardClick(index)}
            >
              <div
                style={flipped === index ? cardFlippedStyles : cardStyles}
              >
                <div
                  style={cardFrontStyles(project.image)}
                  className='card-front'
                >
                  <div className='card-front-content' style={{ position: 'absolute', top: '20px', width: '100%', textAlign: 'center', color: '#000' }}>
                    <span className='text-lg font-bold tracking-wider'>{project.name}</span>
                  </div>
                </div>
                <div style={cardBackStyles} className='card-back'>
                  <div className='card-content'>
                    <p className='text-center'>{project.description}</p>
                    <div className='pt-8 text-center'>
                      <a href={project.demoLink} target='_blank' rel='noopener noreferrer'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                      </a>
                      <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
