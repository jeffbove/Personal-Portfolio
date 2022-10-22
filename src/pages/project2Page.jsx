import React from 'react'
import SnakeImg from '../img/SNAKE.png'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


const project2Page = () => {
  return <>
  <div style={{marginTop:"0px", width:"100vw", height:"9vh", backgroundColor:"",}}>
          <Link exact to='/'>
            <button className=' hover:bg-[#3282c7]' style={{ borderRadius:"10px",marginTop:"10px",marginRight:"10px", width:"7em", backgroundColor:"white",color:"black", float:"right"}}>
                Return Home
            </button>
          </Link>
        </div>
        <div style={{width:"100%", height:"10vh",  marginTop:"4vh", display:"flex", justifyContent:"center"}}>
                  <p style={{color:"white", textAlign:"center", paddingLeft:"25px", paddingRight:"25px"}}>use keyboard arrows to controll snake leading it to food. Do not hit walls or game over.</p>
                    </div>
        <div style={{width:"360px", height:"60vh", backgroundColor:"black", display:"flex", margin:"auto",alignContent:"center", marginTop:"6vh", boxShadow:"5px 4px 6px black",border:"15px ridge rgb(144, 94, 121)"}}>

       
            <div style={{width:"100%", height:"30vh", display:"flex" , margin:"auto" ,marginTop:"4.5vh", flexDirection:"column"}}>
              <img   style={{width:"70%", height:"25vh", objectFit:"fill", display:"flex", margin:"auto", marginTop:"10px"}} src={SnakeImg} />
                    <div style={{width:"100%", height:"10vh",  marginTop:"4vh", display:"flex", justifyContent:"center"}}>
                      <a href='https://visionary-semifreddo-16434e.netlify.app/'>
                          <button className='px-9 py-3 mx-2.5  flex items-center text-white font-extrabold group w-[120px] h-[35px] border-2 rounded-[5px] hover:bg-[#3282c7] hover:border-[#3282c7]'>
                            Open
                          </button>
                      </a>
                    
                      <a href='https://github.com/jeffbove/snake-game'>
                          <button className='px-9 py-3 mx-2.5  flex items-center text-white font-extrabold group w-[120px] h-[35px] border-2 rounded-[5px] hover:bg-[#3282c7] hover:border-[#3282c7]'>
                            Code
                          </button>
                      </a>
                      
                  </div>
                  <div style={{width:"100%", height:"10vh",  marginTop:"4vh", display:"flex", justifyContent:"center"}}>
                  <p style={{color:"white", textAlign:"center", paddingLeft:"10px", paddingRight:"10px"}}>'Snake' Game Remake <br/> *NOT DESIGNED FOR MOBILE* </p>
                    </div>
                   
            </div>
            

       </div>
      
        </>
}

export default project2Page
