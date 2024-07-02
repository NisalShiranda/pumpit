
import './App.css'
import Hero from './pages/Hero/Hero'
import Navbar from "./pages/Navbar/Navbar.jsx"
import Application from "./pages/Application/Application"
import Working from "./pages/Working/Working"
import Portfolio from "./pages/Portfolio/Portfolio"
import Contact from "./pages/Contact/Contact"
import Footer from "./pages/Footer/Footer"
import BacktoTopButton from "./components/BackToTopButton"


function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Application />
      <Working />
      <Portfolio />
      <Contact />
      <Footer />
      <BacktoTopButton />

    </>
  )
}

export default App
