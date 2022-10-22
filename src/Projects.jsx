import React from 'react'
import Card1 from './Card.jsx'
import Card2 from './Card2.jsx'
import Card3 from './Card3.jsx'
import Card4 from './Card4.jsx'

const Projects = () => {
  return (
    <div name='Projects' className='w-full h-[165vh] text-gray-300  bg-[#00132B] overflow-hidden '>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center items-center '>
      <div className='pb-8'>
        <p className=' text-4xl font-bold inline border-b-4 border-white '>Projects</p>
        <p className='py-6'> Come take a look at my most recent work</p>
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-8 text-center py-8'>
        <div className=' group container rounded-md flex justify-center items-center mx-auto  content-div'>
          <Card1 />
        </div>


        <div className=' group container rounded-md flex justify-center items-center mx-auto content-div'>
          <Card2 />
        </div>


         <div className=' group container rounded-md flex justify-center items-center mx-auto content-div'> 
          <Card3 />
        </div>


        <div className=' group container rounded-md flex justify-center items-center mx-auto content-div'>
        <Card4 />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Projects
