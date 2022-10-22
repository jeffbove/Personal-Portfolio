import React, { useState } from 'react'
import './Nav.css'
import Logo from '../img/JBlogo.png'
import { Link } from 'react-scroll'
import GitHub from '../img/github.png'
import Linkedin from '../img/LinkedinNew.png'
import Hamburger from './Hamburger'
import Hamburger2 from './Hamburger2'


const Navbar = () => {

const [nav, setNav] = useState(false)

let handleClick = () => setNav(!nav)

  return(
    <div className='fixed w-full h-[95px] flex justify-between items-center px-9 z-10 bg-[#00132B] text-gray-300'>
      <div style={{ marginLeft:"-30px"}} >
      <img src={Logo} alt='The Logo' style={{height:'115px',marginLeft: '0px', paddingTop: "10px" }}/>
      </div> 
{/* Menu */}
      
<ul className='hidden md:flex'>
          <li><Link activeClass="active" to="Home" smooth={true} duration={500} >
          Home
        </Link></li>
          <li><Link activeClass="active" to="About" smooth={true} duration={500} >
          About
        </Link></li>
          <li><Link activeClass="active" to="Tools" smooth={true} duration={500} >
          Tools
        </Link></li>
          <li><Link activeClass="active" to="Projects" smooth={true} duration={500} >
          Projects
        </Link></li>
          <li><Link activeClass="active" to="Contact" smooth={true} duration={500} >
          Contact
        </Link></li>
        </ul>
     

      


      
      {/* HamBurger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer '>
      {!nav ?  <Hamburger /> : <Hamburger2 />}
      </div>

      {/* Mobile Menu */}
      
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#00132B] flex flex-col justify-center items-center'}>
      
      
          <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="Home" smooth={true} duration={500} >
          Home
        </Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="About" smooth={true} duration={500} >
          About
        </Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="Tools" smooth={true} duration={500} >
          Tools
        </Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="Projects" smooth={true} duration={500} >
          Projects
        </Link></li>
          <li className='py-6 text-4xl'><Link onClick={handleClick} activeClass="active" to="Contact" smooth={true} duration={500} >
          Contact
        </Link></li>
        </ul>
      

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 '>
        <ul>
          <li className='w-[160px] h-[50px] m-3 flex justify-between items-center ml-[-90px] hover:ml-[-18px] duration-300 '>
            <a href='https://www.linkedin.com/in/jeffrey-bove-482672239/' className='flex justify-between items-center w-full text-[#3EEBE7] font-bold bg-[#01B9E6] p-1'>
            LinkedIn <img src={Linkedin} alt='Linked in' style={{width: '150px',height:'57px', paddingRight:'50px', transform: 'translateX(8px)'}} />
            </a>
          </li>
        </ul>
        
        <ul>
          <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-18px] duration-300 '>
            <a href='https://github.com/jeffbove' className='flex justify-between items-center w-full text-blue-300 font-bold bg-[#0A60F0] p-1'>
            Github <img src={GitHub} alt='Facebook' style={{width: '53px', transform: 'translateX(1px)'}} />
            </a>
          </li>
        </ul>

      </div>

    </div>

    
  )
}

export default Navbar
