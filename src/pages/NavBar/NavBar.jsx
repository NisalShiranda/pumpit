import "./NavBar.css"
import { FiAlignJustify } from "react-icons/fi";
import Dlogo from "../../../public/dlogo.png"
import { MdArrowDropDown } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

function NavBar() {
  return (
    <>
        <div className="navbar flex flex-col pt-2 pb-2  mx-[20px] sm:mx-[100px] md:pt-4 md:pb-4 md:flex md:flex-row md:place-content-center md:mx-[100px]">
            <div className="logo flex flex-row justify-center items-center">
                <div className="hidden  justify-center items-center pr-2 md:block"><FiAlignJustify /></div>
                <div className="flex justify-center items-center pl-2 "><img src={Dlogo} alt="dialog-logo" className="dialog-logo"></img></div>
            </div>
            <div className="links flex flex-col justify-center items-center  md:flex md:flex-row md:place-content-center">
                <p className="font-light md:mx-4 md:font-medium lg:mx-10">Mobile</p>
                <p className="font-light md:mx-4 md:font-medium lg:mx-10">Telivision</p>
                <p className="font-light md:mx-4 md:font-medium lg:mx-10">Shop</p>
                <p className="font-light md:mx-4 md:font-medium lg:mx-10">Support</p>
                <p className="font-light md:mx-4 md:font-medium lg:mx-10">Business</p>
            </div>
            <div className="logos hidden lg:flex lg:flex-row lg:justify-center lg:items-center lg:place-content-center xl:ml-[100px]">
                <div className="lg:mx-4 flex flex-row justify-center items-center ">
                    <p className="text-sm">English</p>
                    <MdArrowDropDown className="flex justify-center items-center" />
                </div>
                <div className="lg:mx-4 text-center font-medium text-md reload">Reload & Pay</div>
                <div className="flex flex-row justify-center items-center place-content-center ">
                    <IoCart className="cart mx-4 text-4xl" />
                    <FaSearch className="search text-4xl " />
                </div>
            </div>
        </div>
    </>
  )
}

export default NavBar