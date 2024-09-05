import React from 'react';

// Array of project objects
const projects = [
  {
    name: 'CSS Spotify Replica',
    description: 'My first CSS Project, within my time at Boolean UK.',
    image: 'https://storage.googleapis.com/pr-newsroom-wp/1/2024/01/Spotify_FTR_Header.png',
    demoLink: 'https://main--spotify-replica-kv.netlify.app/',
    codeLink: 'https://github.com/iscreamvann/html-spotify-challenge.git',
  },
  {
    name: 'Reel Moments',
    description: 'Reel Moments is a fishing logbook app I developed to help anglers track and enhance their fishing experiences.',
    image: 'https://static.vecteezy.com/system/resources/previews/002/834/461/non_2x/summer-fishing-background-free-vector.jpg',
    demoLink: '/',
    codeLink: '/',
  },
  {
    name: 'My Portfolio',
    description: 'The perfect way to showcase my skills.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b547b5111139045.5ffc8a2ab537c.jpg',
    demoLink: 'https://main--kylevannportfolio.netlify.app/',
    codeLink: 'https://github.com/iscreamvann/my-portfolio.git',
  },
  // Add more projects here
];

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#000000] bg-[#1CD760]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-[#000000] border-[#000000]'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Map over the projects array to create grid items */}
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              {/* Hover Effects */}
              <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                <span className='text-lg font-bold text-black tracking-wider'>
                  {project.name}
                </span>
                <p className='text-center text-black '>{project.description}</p>
                <div className='pt-8 text-center'>
                  <a href={project.demoLink}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href={project.codeLink}>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
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
