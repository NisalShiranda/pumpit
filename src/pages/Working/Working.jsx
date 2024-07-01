import "./Working.css"
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Working() {
    useEffect(() => {
        AOS.init({duration: 1000});
    })
  return (
    <>
    <div className="working-container  pb-[200px] ">
        <div className="">
        <p className="mx-6 font-bold text-lg lg:mx-0">How We are Working</p>
        </div>
        
        <div className="flex justify-center items-center  ">
            <div className="box1 absolute z-10  grid grid-cols-1 gap-4  sm:grid sm:grid-cols-3 mt-[250px]" >
                <div className="flex justify-center items-center  bg-white px-[80px] py-5">
                    <p className="text-center ">Nisal Shiranda</p>
                </div>
                <div className="flex justify-center items-center  bg-white px-[80px] py-5">
                    <p className="text-center ">Nisal Shiranda</p>
                </div>
                <div className="flex justify-center items-center  bg-white px-[80px] py-5">
                    <p className="text-center ">Nisal Shiranda</p>
                </div>
                
                
            </div>
            
        </div>

        <div className="flex justify-center items-center  ">
            <div className="box1 absolute z-10  grid grid-cols-1 gap-4  sm:grid sm:grid-cols-2 mt-[450px]" >
                <div className="flex justify-center items-center  bg-white px-[80px] py-5">
                    <p className="text-center ">Nisal Shiranda</p>
                </div>
                <div className="flex justify-center items-center  bg-white px-[80px] py-5">
                    <p className="text-center ">Nisal Shiranda</p>
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