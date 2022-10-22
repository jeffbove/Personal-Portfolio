import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-[159vh] bg-[#00132B] text-gray-300 '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-white-300'>About</p>
            </div>

            <div>
            </div>
            </div>
            <div className='max-w-[1000px] text-lg w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p> Thanks for viewing! I hope this will help you get to know a little more about my skills. </p>
                    
                </div>
                
               
                <div>
                <p> Strong understanding of Dom manipulation and implementing quality UI & UX with responsive designs, Well practiced in Object-Orentated-Programming, React Hooks, Use of Turnary Opprators, ES6 functions, Async/ Await. Aswell as for version controll Git and Github is used for all projects.
                        </p>
                 <br/>  
                  <p>Involved in producing and implementing REST APIS using Node.JS & Express servers made by myself, and the usage of public apis aswell.  
                        </p>
                 <br/>  
                  <p>Participated in major front-end clean up where the refactoring of react components, re-organization of files, and all around revamping of site for quality user experience were nessary.
                        </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
