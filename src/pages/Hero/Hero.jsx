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
      <Carousel>
        <Carousel.Item >
          <img className="image" src={H1} alt="Home" />
          <Carousel.Caption >
            <p className="text-xl font-bold text-yellow-300 sm:text-2xl sm:font-thin">Get Your Electricity Bill Covered</p>
            <div className="hidden sm:block">
              <p>Up TO Rs.10,000</p>
              <p>*50 Lucky Winners</p>
              <p>Simply reload or pay your Dialog Connection</p>
            </div>
            <button className="bg-white text-red-800 font-semibold rounded px-2 sm:text-5xl">PayNow</button>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img className="image" src={H2} alt="Home" />
          <Carousel.Caption className="">
            <p className="text-xl font-bold text-yellow-300">EXCLUSIVE</p>
            <p className="text-xl font-bold text-white">ONLINE OFFER</p>
            <div className="hidden">
              <p>Up TO Rs.10,000</p>
              <p>*50 Lucky Winners</p>
              <p>Simply reload or pay your Dialog Connection</p>
            </div>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={H3} alt="Home" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="image" src={H4} alt="Home" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Hero