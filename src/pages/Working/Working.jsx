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
    <div className="working-color  relative z-0 pt-[px] ">
            <div className="w-yellow"></div>
            <div className="w-red"></div>
            <div className="w-purple"></div>
            <div className="w-blue"></div>
        </div>
    <div className="working-container pb-[200px] absolute z-1">
        
        <div className="">
            <p>How We are working?</p>
        </div>
        {/* <p className="font-bold text-xl">How We are working?</p>
        <div className=" mt-[50px] w-[200px] h-[200px] ml-10 bg-black" data-aos="fade-right"></div> */}
    </div>
    </>
  )
}

export default Working