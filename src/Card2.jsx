import React, { useState} from 'react'
import PongImg from './Pong.png'
import "./app.css"
const Card = () => {
    const [flip, setFlip] = useState(false);

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
      <span className='title'>Pong Game</span>
        <img src={PongImg}/></div>
        
      <div className="back" >
        <div>
        <button className='btn'>Open</button>
        <button className='btn'>GitHub Link</button>
        <p>A simple single-player Pong AI game</p>
        </div>
      </div>
    </div>
  )
}

export default Card