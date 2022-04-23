import React from "react";
import Button from './Button';
import '../App.css'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-conatiner">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <div className="text-container">
                <h1>Your Adventure Awaits</h1>
                <p>What are you waiting for?</p>
                <div className="hero-btns">
                    <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
                    <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                        Watch Trailer <span><i className="fa-regular fa-circle-play"></i></span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;