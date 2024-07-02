import "./Navbar.css"
import { BrowserRouter } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link';


function NavBar() {
  return (
    <BrowserRouter>
    <div className="navbar-container m-auto">
        <nav className="flex flex-col justify-between items-center py-4 sm:flex sm:flex-row px-2 ">
            <div className="text-2xl font-bold ">PUMPIT</div>
            <ul className="flex flex-col justify-center items-center my-2 sm:flex sm:flex-row sm:space-x-6 ">
            <li>
                 <Link className="text-md font-semibold" to="#home" smooth>About Us</Link>
                
            </li>
            <li>
                <Link className="text-md font-semibold" to="#working" smooth>The Working Process</Link>
               
            </li>
            <li>
            
                <Link className="text-md font-semibold" to="#portfolio" smooth>Portfolio</Link>
                
            </li>
            <li>
                <Link className="text-md font-semibold" to="#contact" smooth>Contacts</Link>
                
            </li>
            </ul>
        </nav>
    </div>
    </BrowserRouter>
  )
}

export default NavBar