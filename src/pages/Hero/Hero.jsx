import "./Hero.css"
import User from "../../../public/user.png"

import React from 'react'

function Hero() {
  return (
    <>
      <div className="container grid  grid-cols-1 gap-4  md:grid-cols-3 mt-10">
      
        <div className="card">
          <p className="text-center pt-2 text-xl font-semibold">Nisal Shiranda</p>
          <img className="img mt-5"src={User} alt="Avatar" />
          <div className="card-body ">
            <h2>Name</h2>
            <a href="#"target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        </div>
        
        <div className="card">
          <img src={User} alt="Avatar" />
          <div className="card-body">
            <h2>Name</h2>
            <a href="#"target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        </div>
        <div className="card">
          <img src={User} alt="Avatar" />
          <div className="card-body">
            <h2>Name</h2>
            <a href="#"target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Hero