// import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Hero.css"
import H1 from "../../../public/h1.jpg"
import H2 from "../../../public/h2.jpg"
import H3 from "../../../public/h3.jpg"
import H4 from "../../../public/h4.jpg"





const Hero = () => {
  return (
    <>
      <div className="w-[300px] h-[300px] bg-[#000000] absolute top-[30%] left-[50%] translate-x-[-50%] blur-[150px]" ></div>
        <div className="box bg-white/20 w-[200px] p-[20px] relative top-[100px] left-[50%] translate-x-[-50%]   text-black] backdrop-blur-[100px] rounded border-1">
          <p className="font-bold text-lg text-center">Nisal Shiranda Ranasinghe</p>
        </div>
      
      
    </>
  );
}

export default Hero