import React from 'react';

const projects = [
  {
    name: 'CSS Spotify Replica',
    description: 'My first CSS project, created during my time at Boolean UK.',
    image: 'https://storage.googleapis.com/pr-newsroom-wp/1/2024/01/Spotify_FTR_Header.png',
    demoLink: 'https://main--spotify-replica-kv.netlify.app/',
    codeLink: 'https://github.com/iscreamvann/html-spotify-challenge.git',
  },
  {
    name: 'Reel Moments',
    description: 'A fishing logbook app developed to help anglers track and enhance their fishing experiences.',
    image: 'https://static.vecteezy.com/system/resources/previews/002/834/461/non_2x/summer-fishing-background-free-vector.jpg',
    demoLink: '/',
    codeLink: '/',
  },
  {
    name: 'My Portfolio',
    description: 'A showcase of my skills and projects.',
    image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b547b5111139045.5ffc8a2ab537c.jpg',
    demoLink: 'https://main--kylevannportfolio.netlify.app/',
    codeLink: 'https://github.com/iscreamvann/my-portfolio.git',
  },
];

const Works = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#000000] bg-[#1CD760]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex flex-col items-center'>
          <p className='text-4xl font-bold border-b-4 text-[#000000] border-[#000000]'>
            Work
          </p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
              <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center'>
                <span className='text-lg font-bold text-black tracking-wider'>
                  {project.name}
                </span>
                <p className='text-center text-black'>{project.description}</p>
                <div className='pt-8 text-center'>
                  <a href={project.demoLink} target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>
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
