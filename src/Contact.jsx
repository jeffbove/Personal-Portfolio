import React from 'react'

const Contact = () => {
    return (
      <div name='Contact' className='w-full h-[120vh]  bg-[#00132B] flex justify-center items-center p-4 '>
          <form method='POST' action="https://getform.io/f/ffa77a60-917a-4f71-bb6c-74da4cd02087" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-white text-gray-300'>Contact</p>
                  <p className='text-gray-300 py-4'>// Submit the form below or send me an email - Jeffreybove3110@gmail.com</p>
              </div>
              
              <input className=' p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name' />
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
              <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
              <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
          </form>
      </div>
    )
  }
  
  export default Contact
