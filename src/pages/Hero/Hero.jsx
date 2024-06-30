import "./Hero.css"
import HeroImage from "../../../public/hero.png"

function Hero(){
  return (
    <>
      <div className="hero-container">
        <div className="grid grid-cols-1 md:grid-cols-2 px-2">
          <div className="flex  items-center box1">
            <p className="md:text-4xl font-bold">Nisal Shiranda</p>
          </div>
          <div className="flex overflow-hidden  ">
          <div className="hero-color  ">
                <div className="h-red "></div>
                <div className="h-yellow"></div>
                <div className="h-blue"></div>
            </div>
            <div className="flex justify-center items-center  ">
              <img className="hero-image w-[50%] md:w-[75%]" src={HeroImage} alt="image"></img>
              
            </div>
            
          </div>
        </div>
      </div>
      
      
    </>
  );
}

export default Hero