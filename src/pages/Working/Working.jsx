import "./Working.css"
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Working() {
    useEffect(() => {
        AOS.init({duration: 1500});
    })
  return (
    <>
    <div className="working-container  pb-[600px] ">
        <div className="">
        <p className="mx-6 font-bold text-lg md:text-xl lg:text-2xl lg:mx-0">How We are Working</p>
        </div>
        
        <div className="flex justify-center items-center   ">
            <div className="box1 absolute z-10  grid grid-cols-1 gap-4  md:grid md:grid-cols-3 mt-[550px] sm:mt-[400px] md:mt-[250px] sm:mx-6 lg:mx-[100px] " data-aos="fade-left" >
                <div className="flex flex-col  bg-white/30 px-[40px] py-5 rounded-2xl">
                    <p className="font-bold ">1. Data collection</p>
                    <p className="font-light pt-5">We collect requirements for the project. We set goals and objectives</p>
                </div>
                <div className="flex flex-col  bg-white/30 px-[40px] py-5 rounded-2xl">
                    <p className="font-bold ">1. Data collection</p>
                    <p className="font-light pt-5">We collect requirements for the project. We set goals and objectives</p>
                </div>
                <div className="flex flex-col  bg-white/30 px-[40px] py-5 rounded-2xl">
                    <p className="font-bold ">1. Data collection</p>
                    <p className="font-light pt-5">We collect requirements for the project. We set goals and objectives</p>
                </div>
                
                
            </div>
            <div className="box1 absolute z-10  grid grid-cols-1 gap-4  hidden md:block md:grid md:grid-cols-2  md:mt-[650px] lg:mt-[550px] sm:mx-6 lg:mx-[100px] " data-aos="fade-left" >
                <div className="flex flex-col  bg-white/30 px-[40px] py-5 rounded-2xl">
                    <p className="font-bold ">1. Nisal Shiranda</p>
                    <p className="font-light pt-5">We collect requirements for the project. We set goals and objectives</p>
                </div>
                <div className="flex flex-col  bg-white/30 px-[40px] py-5 rounded-2xl">
                    <p className="font-bold ">1. Data collection</p>
                    <p className="font-light pt-5">We collect requirements for the project. We set goals and objectives</p>
                </div>
                
                
            </div>

            <div className="box1 absolute z-10  grid grid-cols-1 gap-4  hidden lg:block lg:grid md:grid-cols-3   lg:mt-[850px] sm:mx-6 lg:mx-[100px] " data-aos="fade-left" >
                <div className="flex flex-col  bg-white/30 px-[40px] py-5 rounded-2xl">
                    <p className="font-bold ">1. Nisal Shiranda</p>
                    <p className="font-light pt-5">We collect requirements for the project. We set goals and objectives</p>
                </div>
                <div className="flex flex-col  bg-white/30 px-[40px] py-5 rounded-2xl">
                    <p className="font-bold ">1. Data collection</p>
                    <p className="font-light pt-5">We collect requirements for the project. We set goals and objectives</p>
                </div>
                <div className="flex flex-col  bg-white/30 px-[40px] py-5 rounded-2xl">
                    <p className="font-bold ">1. Data collection</p>
                    <p className="font-light pt-5">We collect requirements for the project. We set goals and objectives</p>
                </div>
                
                
            </div>
            <div className="box1 absolute z-10  grid grid-cols-1 gap-4  hidden lg:block lg:grid lg:grid-cols-2  lg:mt-[1150px] sm:mx-6 lg:mx-[100px] " data-aos="fade-left" >
                <div className="flex flex-col  bg-white/30 px-[40px] py-5 rounded-2xl">
                    <p className="font-bold ">1. Nisal Shiranda</p>
                    <p className="font-light pt-5">We collect requirements for the project. We set goals and objectives</p>
                </div>
                <div className="flex flex-col  bg-white/30 px-[40px] py-5 rounded-2xl">
                    <p className="font-bold ">1. Data collection</p>
                    <p className="font-light pt-5">We collect requirements for the project. We set goals and objectives</p>
                </div>
               
                
            </div>

            

            

            
            
        </div>

        
      

        <div className="working-color  relative z-0 pt-[px] mt-[50px] md:mt-[80px] ">
                <div className="w-yellow"></div>
                <div className="w-red"></div>
                <div className="w-purple"></div>
                <div className="w-blue"></div>
        </div>
        
        
        {/* <p className="font-bold text-xl">How We are working?</p>
        <div className=" mt-[50px] w-[200px] h-[200px] ml-10 bg-black" data-aos="fade-right"></div> */}
    </div>
    
    </>
  )
}

export default Working