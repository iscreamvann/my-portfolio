/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const floatUp = keyframes`
  to {
    transform: translateY(-175vh);
  }
`;

const swayLeftToRight = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;

const swayRightToLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
`;

// Styled-components
const BubblesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #E3E3E3; /* Page background set to white */
  color: #000; /* Text color set to black for better contrast */
`;

const Bubble = styled.div`
  position: absolute;
  left: ${props => props.leftOffset};
  bottom: -75%;
  width: ${props => props.radius};
  height: ${props => props.radius};
  border-radius: 50%;
  background: rgba(28, 215, 96, 0.5); /* Green color with 50% opacity */
  animation: ${floatUp} ${props => props.floatDuration} ${props => props.floatDelay} ease-in infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(28, 215, 96, 0.5); /* Same green color with 50% opacity */
    border-radius: inherit;
    animation: ${props => props.swayType} ${props => props.swayDuration} ${props => props.swayDelay} ease-in-out alternate infinite;
  }
`;


const SkillsContainer = styled.div`
  min-height: 100vh; /* Ensures the Skills section takes at least the full viewport height */
  max-height: 100vh; /* Prevents the container from exceeding the viewport height */
  padding: 2rem;
  background: #E3E3E3; /* Background color */
  overflow-y: auto; /* Enable vertical scroll on smaller screens */
  
  @media (min-width: 768px) {
    overflow-y: hidden; /* Hide scroll on larger screens */
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh; /* Ensures the content takes at least the full height of the viewport */
  text-align: center;
  color: #000; /* Ensure text color is black for readability */
  
  @media (max-width: 767px) {
    padding: 1rem; /* Adjust padding for smaller screens */
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Automatically adjust columns */
  gap: 1rem;
  text-align: center;
  padding: 2rem 0;

  @media (max-width: 640px) {
    grid-template-columns: 1fr; /* Single column on small screens */
    padding: 1rem 0;
  }
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 0 5px rgba(4, 12, 22, 0.1);
  transition: transform 0.5s ease;
  max-width: 100%; /* Ensure it does not exceed container width */

  &:hover {
    transform: scale(1.05); /* Slightly scale on hover */
  }

  /* Ensure text and images fit within the container */
  p {
    font-size: 1.2rem; /* Adjust font size as needed */
    word-break: break-word;
    margin: 0.5rem 0;
  }

  img {
    max-width: 100%; /* Ensure image does not exceed the container */
    height: auto; /* Maintain aspect ratio */
  }
`;

// Generate bubbles
const generateBubbles = (count) => {
  const bubbles = [];
  const swayTypes = ['swayLeftToRight', 'swayRightToLeft'];
  for (let i = 0; i < count; i++) {
    const leftOffset = `${Math.floor(Math.random() * 100)}vw`;
    const radius = `${Math.floor(Math.random() * 10) + 1}vw`;
    const floatDuration = `${Math.floor(Math.random() * 6) + 6}s`;
    const swayDuration = `${Math.floor(Math.random() * 3) + 4}s`;
    const floatDelay = `${Math.floor(Math.random() * 5)}s`;
    const swayDelay = `${Math.floor(Math.random() * 5)}s`;
    const swayType = swayTypes[Math.floor(Math.random() * swayTypes.length)];

    bubbles.push(
      <Bubble
        key={i}
        leftOffset={leftOffset}
        radius={radius}
        floatDuration={floatDuration}
        swayDuration={swayDuration}
        floatDelay={floatDelay}
        swayDelay={swayDelay}
        swayType={swayType}
      />
    );
  }
  return bubbles;
};

function Skills() {
  const bubbles = generateBubbles(50);

  return (
    <BubblesContainer name="skills">
      {bubbles}
      <SkillsContainer>
      <Content SkillsContainer>
      <h1 className='text-4xl font-bold inline border-b-4 border-[#000000] mb-7'>Skills</h1>
      <p className='py-4 text-2xl'>
          I enjoy diving into and learning new things. Here's a list of technologies I've worked with
        </p>
        <SkillsGrid>
        <SkillItem>
  <div className="flex justify-center items-center">
    <p className="my-4 text-lg">REACT</p>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
      alt="React Icon"
      className="w-8 h-8 ml-5"
    />
  </div>
</SkillItem>

<SkillItem>
  <div className="flex justify-center items-center">
    <p className="my-4 text-lg">JAVASCRIPT</p>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
      alt="JavaScript Icon"
      className="w-8 h-8 ml-5"
    />
  </div>
</SkillItem>

<SkillItem>
  <div className="flex justify-center items-center">
    <p className="my-4 text-lg">HTML</p>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
      alt="HTML Icon"
      className="w-8 h-8 ml-5"
    />
  </div>
</SkillItem>

<SkillItem>
  <div className="flex justify-center items-center">
    <p className="my-4 text-lg">CSS</p>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
      alt="CSS Icon"
      className="w-8 h-8 ml-5"
    />
  </div>
</SkillItem>

<SkillItem>
  <div className="flex items-center justify-center">
    <p className="my-4 text-lg">GIT</p>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
      alt="Git Icon"
      className="w-8 h-8 ml-5"
    />
  </div>
</SkillItem>

<SkillItem>
  <div className="flex items-center justify-center">
    <p className="my-4 text-lg">NODE.JS</p>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
      alt="Node.js Icon"
      className="w-8 h-8 ml-5"
    />
  </div>
</SkillItem>

<SkillItem>
  <div className="flex items-center justify-center">
    <p className="my-4 text-lg">EXPRESS</p>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
      alt="Express Icon"
      className="w-8 h-8 ml-5"
    />
  </div>
</SkillItem>

<SkillItem>
  <div className="flex items-center justify-center">
    <p className="my-4 text-lg">TAILWIND</p>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
      alt="Tailwind CSS Icon"
      className="w-8 h-8 ml-5"
    />
  </div>
</SkillItem>

<SkillItem>
  <div className="flex items-center justify-center">
    <p className="my-4 text-lg">POSTMAN</p>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
      alt="Postman Icon"
      className="w-8 h-8 ml-5"
    />
  </div>
</SkillItem>

<SkillItem>
  <div className="flex items-center justify-center">
    <p className="my-4 text-lg">GITHUB</p>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
      alt="GitHub Icon"
      className="w-8 h-8 ml-5"
    />
  </div>
</SkillItem>

<SkillItem>
  <div className="flex items-center justify-center">
    <p className="my-4 text-lg">PRISMA</p>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg"
      alt="Prisma Icon"
      className="w-8 h-8 ml-5"
    />
  </div>
</SkillItem>

<SkillItem>
  <div className="flex items-center justify-center">
    <p className="my-4 text-lg">POSTGRESQL</p>
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
      alt="PostgreSQL Icon"
      className="w-8 h-8 ml-5"
    />
  </div>
</SkillItem>

        </SkillsGrid>
      </Content>
      </SkillsContainer>
    </BubblesContainer>
  );
}

export default Skills;
