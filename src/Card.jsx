import React, { useState} from 'react'
import SNAKEimg from './img/SNAKE.png'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import "./app.css"
  const Card = () => {
    // const [flip, setFlip] = useState(false);

  return (

    <div
      // className={`card ${flip ? 'flip' : ''}`}
      // onClick={() => setFlip(!flip)}
      
    >
      <Link exact to='/P2'  className='card'>
      <div className="front">
      <span className='title'>'Snake' Game</span><br/>
      <span>*Desktop only*</span>
        <img src={SNAKEimg}/></div>
        
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
    </div>
    
  )
}

export default Card