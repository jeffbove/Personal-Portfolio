import React, { useState} from 'react'
import MovieImg from './Smaller321movies.png'
import "./app.css"
const Card = () => {
    const [flip, setFlip] = useState(false);

  return (
    <div
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
      <span className='title'>Movies321 (API)</span>
        <img src={MovieImg}/></div>
        
        <div className="back" >
        <div>
        <button className='btn'>Open</button>
        <button className='btn'>GitHub Link</button>
        <p>Movie API created using react  OMDB</p>
        </div>
      </div>
    </div>
    )
  }

export default Card
