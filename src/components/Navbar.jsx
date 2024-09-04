import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1CD760] text-[#FFFFFF] z-50'>
      <div>
        <h1 className='text-2xl font-semibold font-poppins'>KV</h1>
      </div>
      <ul className='hidden md:flex gap-x-8'>
        <li>
          <Link to='home' smooth={true} duration={500} className='font-poppins hover:text-gray-900'>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500} className='font-poppins hover:text-gray-900'>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500} className='font-poppins hover:text-gray-900'>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500} className='font-poppins hover:text-gray-900'>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500} className='font-poppins hover:text-gray-900'>
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleClick} className='md:hidden z-10 flex items-center justify-center w-10 h-10 bg-[#1CD760] rounded-full'>
        {!nav ? <FaBars size={30} className='text-white' /> : <FaTimes size={30} className='text-white' />}
      </div>
      <ul
        className={`fixed top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center ${
          nav ? 'block' : 'hidden'
        }`}
      >
        <li className='py-6 text-4xl font-poppins'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500} className='text-white'>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl font-poppins'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500} className='text-white'>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl font-poppins'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500} className='text-white'>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl font-poppins'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500} className='text-white'>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl font-poppins'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500} className='text-white'>
            Contact
          </Link>
        </li>
      </ul>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
  <ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
      <a
        className='flex justify-between items-center w-full text-[#1CD760] font-poppins'
        href='https://www.linkedin.com/in/kyle-vann-84b673324/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Linkedin <FaLinkedin size={30} className='text-[#1CD760]' />
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
      <a
        className='flex justify-between items-center w-full text-[#1CD760] font-poppins'
        href='https://github.com/iscreamvann'
        target='_blank'
        rel='noopener noreferrer'
      >
        Github <FaGithub size={30} className='text-[#1CD760]' />
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
      <a
        className='flex justify-between items-center w-full text-[#1CD760] font-poppins'
        href='mailto:kyle.vann1996@icloud.com'
      >
        Email <HiOutlineMail size={30} className='text-[#1CD760]' />
      </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]'>
      <a
        className='flex justify-between items-center w-full text-[#1CD760] font-poppins'
        href='/KyleVannResume.pdf'
        target='_blank'
        rel='noopener noreferrer'
      >
        Resume <BsFillPersonLinesFill size={30} className='text-[#1CD760]' />
      </a>
    </li>
  </ul>
</div>
</div>
  );
};

export default Navbar;
