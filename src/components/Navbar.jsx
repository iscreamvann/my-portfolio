import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#1CD760] to-[#16a34a] text-[#000000] shadow-md z-50">
      <h1 className="text-2xl font-semibold font-poppins">KV</h1>
      <ul className="hidden md:flex gap-x-8">
        {['home', 'about', 'skills', 'work'].map((section) => (
          <li key={section}>
            <Link
              to={section}
              smooth={true}
              duration={500}
              className="font-poppins hover:text-white"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={handleClick}
        className="md:hidden z-10 flex items-center justify-center w-10 h-10 bg-transparent rounded-full  outline-none"
      >
        {!nav ? (
          <FaBars size={30} className="text-black" />
        ) : (
          <FaTimes size={30} className="text-white" />
        )}
      </div>
      <ul
        className={`fixed top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center ${nav ? 'block' : 'hidden'}`}
      >
        {['home', 'about', 'skills', 'work', 'contact'].map((section) => (
          <li key={section} className="py-6 text-4xl font-poppins">
            <Link
              onClick={handleClick}
              to={section}
              smooth={true}
              duration={500}
              className="text-white"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {[
            { href: 'https://www.linkedin.com/in/kyle-vann-84b673324/', icon: <FaLinkedin size={30} />, label: 'Linkedin' },
            { href: 'https://github.com/iscreamvann', icon: <FaGithub size={30} />, label: 'Github' },
            { href: 'mailto:kyle.vann1996@icloud.com', icon: <HiOutlineMail size={30} />, label: 'Email' },
            { href: '/KyleVannResume.pdf', icon: <BsFillPersonLinesFill size={30} />, label: 'Resume' },
          ].map(({ href, icon, label }) => (
            <li
              key={label}
              className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]"
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-[#1CD760] font-poppins"
                target="_blank"
                rel="noopener noreferrer"
              >
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
