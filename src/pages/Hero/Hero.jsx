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
          <Carousel.Caption className=" mb-10">
            <p>Nisal Shiranda</p>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img className="image" src={H2} alt="Home" />
          <Carousel.Caption >
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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