import React from 'react'
import logo from '../assets/images/logo.png'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label='Home'>
          <img src={logo} width={100} height={100} alt="logo"></img>
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
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
