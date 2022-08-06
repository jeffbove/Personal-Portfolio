import React from 'react'
import GitHub from './github.png'
import JavaScript from './javascript.png'
import RReact from './react.png'
import Html from './html.png'
import Css from './css.png'
import Node from './node.png'
import Tailwind from './tailwind.png'

const Tools = () => {
  return (
    <div name='Tools' className=' bg-[#00132B]'>
        {/* container */}
      <div className=' justify-center items-center text-gray-300 max-w-[1000px] mx-auto p-4 mt-20 flex flex-col m-auto w-full h-full'>  
        <div>
          <p className=' text-4xl font-bold inline border-b-4 border-white '>My Tools</p>
        </div>
        <div>
        <p className='py-4'>These are the Tools that I use on a daily basis for the majority of my work.</p>
        </div>


      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-[white] hover:bg-opacity-20'>
            <img className='w-20 mx-auto' src={GitHub} alt='img'/>
            <p className='py-4'>GITHUB</p>
        </div>
        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:bg-[#FFD600] hover:bg-opacity-20'>
            <img className='w-20 mx-auto' src={JavaScript} alt='img'/>
            <p className='py-4'>JAVASCRIPT</p>
        </div>
        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500  hover:bg-[#F16529] hover:bg-opacity-20'>
            <img className='w-20 mx-auto' src={Html} alt='img'/>
            <p className='py-4'>HTML</p>
        </div>
        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-[#039BE5] hover:bg-opacity-20'>
            <img className='w-20 mx-auto' src={Css} alt='img'/>
            <p className='py-4'>CSS</p>
        </div>
        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-[#8CC84B] hover:bg-opacity-20'>
            <img className='w-20 mx-auto' src={Node} alt='img'/>
            <p className='py-4'>NODE.JS</p>
        </div>
        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-[#44A8B3] hover:bg-opacity-20'>
            <img className='w-20 mx-auto' src={Tailwind} alt='img'/>
            <p className='py-4'>TAILWIND</p>
        </div>
        <div className=' shadow-md shadow-[#040c16] hover:scale-110 duration-500 hover:bg-[#00D8FF] hover:bg-opacity-10'>
            <img className='w-20 mx-auto' src={RReact} alt='img'/>
            <p className='py-4'>React</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Tools
