import React from 'react'
import MyPicture from './img/Me.JPG'
import { Link } from 'react-scroll'


function Home() {

  const ArrowRight = () => {
    return (
      <div className=''>
        <span class="material-symbols-outlined">east</span>
      </div>
    )
  }
  return (
    <div className=' w-full h-screen bg-[#00132B]'>

      {/* container */}
      <div name='Home' className=' text-[#8892b0] font-bold max-w-[1000px] md:h-[100vh] h-[124vh] mx-auto px-8 flex flex-col justify-center  bg-[#00132B]'>
        
         
          
        
        <h2>Hi, my name is</h2>
        <h1 className='text-4xl sm:text-7xl text-[#ccd6f6]'>Jeffrey Bove.</h1>
        
         
       
        <div className='py-4 max-w-5 pt-2'>
        <img className=' float-left mx-3  rounded-2xl w-[130px] h-21' src={MyPicture}></img>
          I am currently freelance Front-End Developer. Adept in all stages of web development, Primarily using the MERN stack ( MongoDB , Express , React.JS , Node.Js ) ,
          with the ability to use my tools in a professional development environment.
          <br/>
          Ability to critically think and coordinate Best practices , Architecture & User experience to my team and clearly listen to client about all Specifics and minor details requested in product
          & producing quality build.
          <br/>
          Experience with troubleshooting procedures and adept at finding the core of an issue relatively quickly.
         <br/> Well knowledged in web design patterns, best file & code organization practices in a professional codebase.
         
        </div>

           
           <Link  activeClass="active" to="Projects" smooth={true} duration={500} >
           <button className=' text-white group w-[180px] h-[50px] border-2
             px-6 py-3 my-2 flex items-center hover:bg-[#3282c7] hover:border-[#3282c7]'>View work 
            <span className='pl-[25px] group-hover:rotate-[360deg] duration-1000' > <ArrowRight/> </span></button>
        </Link>
           
           
            
      </div>
    </div>
  )
}

export default Home
