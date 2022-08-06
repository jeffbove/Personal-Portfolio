import React from 'react'
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
      <div name='Home' className=' text-[#8892b0] font-bold max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full bg-[#00132B]'>
        <p>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl text-[#ccd6f6]'>Jeffrey Bove ,</h1>
        <h2 className='text-4xl sm:text-6xl text-[#ccd6f6]'> and i am software engineer</h2>
        <p className='py-4 max-w-5 pt-2 text-sm'   >Best in the World 👌<span className='text-[#ccd6f6]'> Simple , Classic , Professional ,
           Awesome 🔥</span> You are absolutely right we don't need fancy and animated portfolio 🙏
           I love what i do and will continue to code ❤️😊.</p>

           
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
