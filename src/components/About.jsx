import React, { useEffect } from 'react';
import styled from 'styled-components';

const AboutPageStyled = styled.div`
  @media (max-width: 767px) {
    height: 1100px;
  }
`;

const About = () => {
  useEffect(() => {
    const canvas = document.getElementById('c');
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}".split("");
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }, () => 1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#1CD760';
      ctx.font = `${fontSize}px arial`;
      drops.forEach((drop, i) => {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drop * fontSize);
        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 35);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearInterval(interval);
    };
  }, []);

  return (
    <AboutPageStyled id="about" className="relative w-full h-screen">
      <canvas id="c" className="absolute top-0 left-0 w-full h-full -z-10"></canvas>
      <div className="relative flex flex-col justify-center items-center w-full h-full">
        <div className="py-16 rounded-md bg-[#1CD760] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#000000]">About</p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-2xl font-bold">
              <p>
                Hi, I'm Kyle Vann. I'm thrilled to have you here! Feel free to explore my work and learn more about what I do. If you have any questions or just want to connect, don't hesitate to reach out. Enjoy your visit!
              </p>
            </div>
            <div>
              <p>
                What started as a hobby has grown into a deep passion for coding over the past two years. I recently completed 1,000 hours in a six-month bootcamp with Boolean UK, where I honed my skills as a software developer. I’m especially passionate about frontend development, with a strong focus on React. I build responsive and scalable web applications and also enjoy simplifying complex topics as a technical writer. Explore my portfolio to see how I bring ideas to life with modern web technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AboutPageStyled>
  );
};

export default About;
