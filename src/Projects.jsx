import React from 'react'
import Card1 from './Card.jsx'
import Card2 from './Card2.jsx'

const Projects = () => {
  return (
    <div name='Projects' className='w-full md:h-screen text-gray-300  bg-[#00132B] overflow-hidden '>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center items-center '>
      <div className='pb-8'>
        <p className=' text-4xl font-bold inline border-b-4 border-white '>Projects</p>
        <p className='py-6'> Come take a look at my most recent work</p>
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
          <Card2 />
        </div>


        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
          <Card1 />
        </div>


        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
          
        </div>


        <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        
        </div>
      </div>
    </div>
  </div>
  )
}

export default Projects
