import "./Hero.css"
import HeroImage from "../../../public/hero.png"

function Hero(){
  return (
    <>
      <div className="color-hero relative z-0 top-[80px] md:top-[100px] sm:top-[100px]">
        <div className="h-red"></div>
        <div className="h-yellow"></div>
        <div className="h-blue"></div>
      </div>

      <div className="hero-container">
        <div className="grid grid-cols-1 md:grod md:grid-cols-2">
          <div className="flex justify-center items-center md:order-2">
            <img className="relative z-1 w-[80%] " src={HeroImage}></img>
          </div>
          <div className="md:order-1 relative pt-4 mx-6">
            <p className="font-bold text-2xl">Progressive Unique</p>
            <p className="font-extrabold text-2xl pt-3 text-opacity-2 outline-1">Mobile Product IT</p>
          </div>
        </div>
      </div>
    
    
    
     
      
      
    </>
  );
}

export default Hero