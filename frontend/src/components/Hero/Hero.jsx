import React from 'react'
import './Hero.css'
import hero from '../../assets/images/hero.png'


const Hero = ({setShowLogin}) => {
    return (
        <div className="hero">
            <h1>FastLane</h1>
            <span>
                LAST MILE DELIVERY SYSTEM
            </span>

            <button onClick={()=>setShowLogin(true)} className='startBtn'>Get Started</button>
        </div>
    )
}

export default Hero