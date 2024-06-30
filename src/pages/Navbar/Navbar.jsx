import "./Navbar.css"

function NavBar() {
  return (
    <div className="navbar-container m-auto">
        <nav className="flex flex-col justify-between items-center py-4 sm:flex sm:flex-row px-2 ">
            <div className="text-2xl font-bold ">PUMPIT</div>
            <ul className="flex flex-col justify-center items-center my-2 sm:flex sm:flex-row sm:space-x-6 ">
            <li>
                <a href="#" className="text-md font-semibold">About Us</a>
            </li>
            <li>
                <a href="#" className="text-md font-semibold">The Working Process</a>
            </li>
            <li>
                <a href="#" className="text-md font-semibold">Portfolio</a>
            </li>
            <li>
                <a href="#" className="text-md font-semibold">Contacts</a>
            </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar