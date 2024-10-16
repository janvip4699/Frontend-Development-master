import React from 'react'
import logo from '../assets/images/logo.png'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-1 fixed w-full top-0 left-0 z-[999] backdrop-blur-lg' >
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label='Home'>
          <img src={logo} width={70} height={70} alt="logo"></img>
        </a>
      </div>
      <div className='flex justify-center items-center gap-10 text-md '>
        <Link to="home" spy={true} smooth={true} className='cursor-pointer'>Home</Link>
        <Link to="projects" spy={true} smooth={true} className='cursor-pointer'>Projects</Link>
        <Link to="experience" spy={true} smooth={true} className='cursor-pointer'>Experience</Link>
        <Link to="contact" spy={true} smooth={true} className='cursor-pointer'>Contact</Link>
      </div>
      <div className='mx-8 my-2 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/janvi-parmar-37090b199/"
            target='_blank'
            aria-label='LinkedIn'>    
            <FaLinkedin />
        </a>
        <a href="https://github.com/janvip4699/Frontend-Development-master"
            target='_blank'
            aria-label='Github'>    
            <FaGithub />
        </a>
        <a href="https://www.instagram.com/"
            target='_blank'
            aria-label='Instagram'>    
            <FaInstagram />
        </a>
        <a href="https://www.twitter.com/"
            target='_blank'
            aria-label='Twitter'>    
            <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
