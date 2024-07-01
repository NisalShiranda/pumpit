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

      <div className="hero-container pb-10">
        <div className="grid grid-cols-1 md:grod md:grid-cols-2">
          <div className="flex justify-center items-center md:order-2">
            <img className="relative z-1 w-[80%] " src={HeroImage}></img>
          </div>
          <div className="md:order-1 relative pt-4 mx-6 lg:flex lg:flex-col lg:justify-center lg:mx-6 xl:mx-0 lg:text-start">
            <p className="font-bold text-2xl sm:text-5xl lg:text-start xl:tracking-wide">Progressive Unique</p>
            <p className="text-hero font-extrabold text-2xl pt-3 sm:text-5xl lg:text-start xl:tracking-wide  ">Mobile Product IT</p>
            <p className="pt-2 text-sm font-light sm:text-2xl xl:tracking-wide">Mobile Application Development</p>
            <p className="mt-5 px-7 py-2 bg-sky-950 w-fit rounded-xl text-white font-bold sm:text-2xl">Contact</p>
          </div>
        </div>
      </div>
    
    
    
     
      
      
    </>
  );
}

export default Hero