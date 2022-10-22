import React from 'react'
import PongImg from '../img/PONG2.png'
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
        <div style={{width:"100%", height:"10vh",  marginTop:"4vh", display:"flex", justifyContent:"center"}}>
                  <p style={{color:"white", textAlign:"center", paddingLeft:"10px", paddingRight:"10px"}}>use mouse to controll paddle.  </p>
                    </div>

        <div style={{width:"360px", height:"60vh", backgroundColor:"black", display:"flex", margin:"auto",alignContent:"center", marginTop:"6vh", boxShadow:"5px 4px 6px black",border:"15px ridge rgb(111, 151, 161)"}}>
       
            <div style={{width:"100%", height:"30vh", display:"flex" , margin:"auto" , flexDirection:"column"}}>
              <img   style={{width:"70%", height:"25vh", objectFit:"fill", display:"flex", margin:"auto", marginTop:"-2vh"}} src={PongImg} />
                    <div style={{width:"100%", height:"10vh",  marginTop:"4vh", display:"flex", justifyContent:"center"}}>
                      <a href='https://flourishing-speculoos-98e092.netlify.app/'>
                          <button className='px-9 py-3 mx-2.5  flex items-center text-white font-extrabold group w-[120px] h-[35px] border-2 rounded-[5px] hover:bg-[#3282c7] hover:border-[#3282c7]'>
                              Open
                          </button>
                      </a>
                    
                      <a href="https://github.com/jeffbove/PONG">
                          <button className='px-9 py-3 mx-2.5  flex items-center text-white font-extrabold group w-[120px] h-[35px] border-2 rounded-[5px] hover:bg-[#3282c7] hover:border-[#3282c7]'>
                              Code
                          </button>
                      </a>
                  </div>
                  <div style={{width:"100%", height:"10vh",  marginTop:"4vh", display:"flex", justifyContent:"center"}}>
                  <p style={{color:"white", textAlign:"center", paddingLeft:"10px", paddingRight:"10px"}}>A simple single-player Pong AI game <br/> *NOT DESIGNED FOR MOBILE* </p>
                    </div>
                   
            </div>
            

       </div>
      
        </>
}

export default project1Page
