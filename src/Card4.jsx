import React, { useState} from 'react'
import ServerImg from './img/NodeDatabaseServer.png'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import "./app.css"
const Card4 = () => {
    const [flip, setFlip] = useState(false);

  return (
    <div
      // className={`card ${flip ? 'flip' : ''}`}
      // onClick={() => setFlip(!flip)}
    >
       <Link exact to='P4'  className='card'>
      <div className="front">
      <span className='title'>'SneakerCo' Database Server</span>
        <img src={ServerImg}/>
        </div>
        </Link>
      {/* <div className="back" >
        <div>
        <a href='https://github.com/jeffbove/sneakerCo-database-server'>
          <button className='btn'>Github Link</button>
          </a>
        <p>Node.JS Database using custom mongoDB Atlas, Express for making Server functional. All of the products from "sneakerCo" UI come from this DB server.</p>
        
        </div>
      </div> */}
    </div>
    
  )
}

export default Card4