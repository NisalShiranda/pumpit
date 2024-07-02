import "./Contact.css"
import ContactImage from "../../../public/contact.png"
import {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
    AOS.init({duration: 1500});
  return (
    <>
        <div className="contact-container pt-5 lg:py-[30px] lg:pb-[100px]">
            <div className="contact-color">
                <div className="c-red bg-rose-400 w-[50%] h-[200px] absolute z-[-2] left-[35%] mt-[450px] md:mt-[100px] md:w-[30%] md:left-[50%] lg:mt-[200px] blur-[100px]  "></div>
                <div className="c-red bg-orange-500 w-[50%] h-[200px] absolute z-[-2] left-[10%] mt-[450px] md:mt-[100px] md:w-[30%] md:left-[60%] blur-[100px] "></div>
            </div>
            <div className="flex justify-center items-center">
                <p className="font-bold text-xl md:text-4xl">Contact Us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 place-content-center pt-5">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col justify-center items-center  md:flex md:flex-row">
                        <input type="text" className="input-contact "  placeholder="first name"></input>
                        <input type="text" className="input-contact" placeholder="last name"></input>
                    </div>
                    <div className="">
                        <input type="email" className="input-contact" placeholder="email"></input>
                    </div>
                    <div className="flex flex-col justify-center items-center  md:flex md:flex-row">
                        <input type="text" className="input-contact "  placeholder="password"></input>
                        <input type="text" className="input-contact" placeholder="re-enter password"></input>
                    </div>
                    <div className="pt-10"><p className="px-5 py-2 font-bold bg-cyan-950 text-white rounded-lg">Submit</p></div>
                    
                </div>
                <div className="flex justify-center items-center" data-aos="zoom-in">
                    <img className="w-[60%]" src={ContactImage} alt="contact"></img>
                </div>
                
            </div>


        </div>
    </>
  )
}

export default Contact