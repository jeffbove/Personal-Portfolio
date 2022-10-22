import Img from '../img/NodeDatabaseServer.png'
import './pages.css'
import React from 'react'

import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';


const project4Page = () => {
  return <>
  <div style={{marginTop:"0px", width:"100vw", height:"9vh", backgroundColor:"",}}>
          <Link exact to='/'>
            <button className=' hover:bg-[#3282c7]' style={{ borderRadius:"10px",marginTop:"10px",marginRight:"10px", width:"7em", backgroundColor:"white",color:"black", float:"right"}}>
                Return Home
            </button>
          </Link>
        </div>

        <div className='cointainer'>
       
            <div style={{ width:"100%", height:"35vh", display:"flex" , flexDirection:"column"}}>
              <img style={{width:"70%", height:"25vh", objectFit:"fill", display:"flex", margin:"auto", marginTop:"10px"}} src={Img} />
                    <div style={{width:"100%", height:"10vh",  marginTop:"4vh", display:"flex", justifyContent:"center"}}>
                      <a href='https://sneakercodb.herokuapp.com/'>
                        <button className='px-9 py-3 mx-2.5  flex items-center text-white font-extrabold group w-[120px] h-[35px] border-2 rounded-[5px] hover:bg-[#3282c7] hover:border-[#3282c7]'>
                            Open
                        </button>
                      </a>
                   
                      <a href="https://github.com/jeffbove/sneakerCo-database-server">
                          <button className='px-9 py-3 mx-2.5  flex items-center text-white font-extrabold group w-[120px] h-[35px] border-2 rounded-[5px] hover:bg-[#3282c7] hover:border-[#3282c7]'>
                            Code
                          </button>
                      </a>
                  </div>
                  <div style={{width:"100%", height:"10vh",  marginTop:"4vh", display:"flex", justifyContent:"center"}}>
                  <p style={{color:"white", textAlign:"center", paddingLeft:"10px", paddingRight:"10px"}}> NodeJs + Express + MongoDB Server used in 'sneakerCo.' <br/>
                  <ui style={{listStyle:"none"}}>
                    <li>'/mens' = mens shoes</li>
                    <li>'./womens' = womens shoes</li>
                    <li>'./kids' = kids shoes</li>
                    <li>ect...</li>
                  </ui>
                  
                  </p>
                    </div>
                   
            </div>
            

       </div>
      
        </>
}

export default project4Page
