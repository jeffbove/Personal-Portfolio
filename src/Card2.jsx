import React, { useState} from 'react'
import PongImg from './img/PONG2.png'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import "./app.css"

const Card2 = () => {
    // const [flip, setFlip] = useState(false);

  return (
    
    <
      // className={`card ${flip ? 'flip' : ''}`}
      // onClick={() => setFlip(!flip)}
     
    >
       <Link exact to='P1'  className='card'>
      <div className="front">
     
      <span className='title'>'Pong' Game</span><br/>
      <span>*Desktop only*</span>
        <img src={PongImg}/></div>
      
      {/* <div className="back" >
        <div>
          <a href='https://flourishing-speculoos-98e092.netlify.app/'>
          <button className='btn' >
          Open</button>
          </a>
       
          <a href='https://github.com/jeffbove/PONG'>
          <button className='btn' >
          GitHub link</button>
          </a>
        <p>A simple single-player Pong AI game</p>
        </div>
      </div> */}
      </Link>
    </>
    
  )
}

export default Card2