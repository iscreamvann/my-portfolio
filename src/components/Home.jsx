import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#E3E3E3] relative pt-[80px]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-8 md:px-16">
        <div className="flex flex-col justify-center h-full items-center text-center md:pr-12">
          <h2 className="text-4xl sm:text-7xl font-bold text-gray-900">
            Hey,{" "}
            <span>
              <Typewriter
                words={["I'm Kyle", "I'm A Full-Stack Engineer."]}
                cursor
                cursorStyle="|"
                typeSpeed={180}
                deleteSpeed={80}
                delaySpeed={1500}
                loop={1}
              />
            </span>
          </h2>
          <p className="text-gray-700 py-4 max-w-md">
            With two years of hands-on coding experience, this portfolio highlights my journey through the tech world. Based in the UK, I specialize in crafting web applications using technologies such as React, JavaScript, CSS, Tailwind, and HTML. Explore a diverse range of projects that showcase my dedication to innovation and problem-solving.
          </p>
          <div className="relative z-10 flex flex-col space-y-4">
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-black w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-[#1CD760] to-[#90D7AA] cursor-pointer"
            >
              About Me
              <span className="transition-transform duration-300 transform group-hover:rotate-90 ml-3">
                <HiArrowNarrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 flex justify-end pr-4">
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl w-1/2 md:w-1/3 shadow-none hidden md:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
