import "./Portfolio.css"
import Phone from "../../../public/phone.png"
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Portfolio() {
  AOS.init({duration: 1500});
  return (
    <div className="portfolio-container md:pt-0  lg:py-[100px]" id="portfolio">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="flex justify-center items-center" data-aos="fade-right"><img className="w-[100%]" src={Phone} alt="Phone"></img></div>
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-xl md:text-4xl ">Portfolio</p>
            <p className="text-center md:pr-9 md: pt-[50px]">You can't ignore that mobile devices are a key element of any business's success in the modern world. That's why every project we work on must bring real benefits and improve the user experience. Our products are used by hundreds of thousands of people and help automate various business processes. Automate your business to keep up with the times!</p>
            <p className="mt-5 px-5 py-2 bg-sky-950 rounded-xl text-white">View All</p>
          </div>
        </div>
    </div>
  )
}

export default Portfolio