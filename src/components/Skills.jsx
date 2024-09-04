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
  background: #FFFFFF; /* Page background set to white */
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


const Content = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  text-align: center;
  color: #000; /* Ensure text color is black for readability */
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(4, 1fr);
  }
  text-align: center;
  padding: 2rem 0;
`;

const SkillItem = styled.div`
  box-shadow: 0 0 5px rgba(4, 12, 22, 0.1);
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.1);
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
      <Content>
        <h1 className='text-4xl font-bold inline border-b-4 border-[#000000] mb-7'>Skills</h1>
        <p className='py-4 text-2xl'>
          I enjoy diving into and learning new things. Here's a list of technologies I've worked with
        </p>
        <SkillsGrid>
          <SkillItem>
            <p className='my-4'>REACT</p>
          </SkillItem>
          <SkillItem>
            <p className='my-4'>JAVASCRIPT</p>
          </SkillItem>
          <SkillItem>
            <p className='my-4'>HTML</p>
          </SkillItem>
          <SkillItem>
            <p className='my-4'>CSS</p>
          </SkillItem>
          <SkillItem>
            <p className='my-4'>GIT</p>
          </SkillItem>
          <SkillItem>
            <p className='my-4'>NODE.JS</p>
          </SkillItem>
          <SkillItem>
            <p className='my-4'>EXPRESS</p>
          </SkillItem>
          <SkillItem>
            <p className='my-4'>TYPESCRIPT</p>
          </SkillItem>
          <SkillItem>
            <p className='my-4'>TDD</p>
          </SkillItem>
          <SkillItem>
            <p className='my-4'>OOP</p>
          </SkillItem>
          <SkillItem>
            <p className='my-4'>STYLED COMPONENTS</p>
          </SkillItem>
          <SkillItem>
            <p className='my-4'>POSTGRESQL</p>
          </SkillItem>
        </SkillsGrid>
      </Content>
    </BubblesContainer>
  );
}

export default Skills;
