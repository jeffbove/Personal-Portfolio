import React from 'react'
import './pages.css'
import PongImg from '../img/sneakerCo.png'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


const project1Page = () => {
  return <>
  <div style={{marginTop:"0px", width:"100vw", height:"9vh", backgroundColor:"",}}>
          <Link exact to='/'>
            <button className=' hover:bg-[#3282c7]' style={{ borderRadius:"10px",marginTop:"10px",marginRight:"10px", width:"7em", backgroundColor:"white",color:"black", float:"right"}}>
                Return Home
            </button>
          </Link>
        </div>

        <div className='cointainer' style={{border:"15px ridge  rgb(139, 158, 95)"}}>
       
            <div style={{width:"100%", height:"35vh", display:"flex" , flexDirection:"column"}}>
              <img   style={{width:"70%", height:"25vh", objectFit:"fill", display:"flex", margin:"auto", marginTop:"4.5vh"}} src={PongImg} />
                    <div style={{width:"100%", height:"10vh",  marginTop:"6vh", display:"flex", justifyContent:"center"}}>
                      <a href="https://coruscating-puffpuff-97cec4.netlify.app/">
                          <button className='px-9 py-3 mx-2.5  flex items-center text-white font-extrabold group w-[120px] h-[35px] border-2 rounded-[5px] hover:bg-[#3282c7] hover:border-[#3282c7]'>
                            Open
                          </button>
                      </a>
                    
                      <a href='https://github.com/jeffbove/sneakerCo'>
                        <button className='px-9 py-3 mx-2.5  flex items-center text-white font-extrabold group w-[120px] h-[35px] border-2 rounded-[5px] hover:bg-[#3282c7] hover:border-[#3282c7]'>
                          Code
                        </button>
                      </a>
                  </div>
                  <div style={{width:"100%", height:"10vh",  marginTop:"5.5vh", display:"flex", justifyContent:"center"}}>
                  <p style={{color:"white", textAlign:"center", paddingLeft:"10px", paddingRight:"10px"}}> SneakerCo. <br/>
                  E-commerce site created using react.js for UI & UX. Connecting to Mongo db server for products, connecting you to suppliers for selected sneaker.
                  </p>
                    </div>
                   
            </div>
            

       </div>
      
        </>
}

export default project1Page
