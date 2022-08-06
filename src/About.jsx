import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-[#00132B] text-gray-300 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-300'>About</p>
            </div>

            <div>
            </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hello, im jeffrey thanks for visiting my site. plese take a second to look around. </p>
                </div>
                <div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit eum ducimus eligendi
                     repellendus totam repudiandae odit sunt error omnis vel beatae fuga est necessitatibus non quo, nostrum delectus soluta!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
