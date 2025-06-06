import logo from './assets/logo.jpg';
import { useState } from 'react';
import Skills from './Skills';
import Educations from './Education';
import Projects from './Projects';
import Experiences from './Experiences';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { ThemeContext } from "../context/ThemeContext";

import './App.css';
import Contact from './Contact';
function App() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 50; // Adjust based on your header height
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  const [isMenuOpen , setIsMenuOpen] = useState(false);
  const toggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen);
  }
  
  return (
    <div className="App lg:w-full w-min">
  <header className="App-header fixed w-full z-10 bg-current">
    <div className='flex items-center justify-between lg:hidden p-5'>
      <h1 className="text-blue-500 text-4xl md:text-3xl font-bold">Ayoub <span>El Bouzidi</span></h1>
      <span className='text-white p-6 menu' onClick={toggleMenu}>
        <FontAwesomeIcon className='w-12 h-12' icon={isMenuOpen ? faXmark:faBars} />
      </span>
    </div>
  
    <nav className={`flex top-0 left-0 h-full flex-col items-center lg:justify-between lg:block lg:flex lg:flex-row lg:space-y-0 p-4 bg-black text-white space-y-8 transition-transform duration-300  ${isMenuOpen ? 'block' : 'hidden'}`}>
      {/* Logo */}
      <h1 className="text-blue-500 text-4xl md:text-3xl font-bold">Ayoub <span>El Bouzidi</span></h1>

      {/* Navigation Links */}
      <div className="flex flex-col sm:flex-row text-sm sm:text-lg space-y-9 sm:space-y-0 sm:space-x-6">
        <a href="#home" className="text-white hover:text-blue-500 transition-colors duration-300 text-3xl lg:text-xl">Home</a>
        <a href="#education" onClick={(e) => handleScroll(e, "education")} className="text-white text-3xl hover:text-blue-500 transition-colors duration-300 lg:text-xl">Educations</a>
        <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="text-white hover:text-blue-500 text-3xl transition-colors duration-300 lg:text-xl">Skills</a>
        <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="text-white hover:text-blue-500 text-3xl transition-colors duration-300 lg:text-xl">Projects</a>
        <a href="#experiences" onClick={(e) => handleScroll(e, "experience")} className="text-white hover:text-blue-500 transition-colors duration-300 text-3xl lg:text-xl">Experiences</a>
        <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-white hover:text-blue-500 text-3xl transition-colors duration-300 lg:text-xl">Contact</a>
      </div>
    </nav>
  </header>

  {/* Body */}
  <div id='home' className="flex flex-col lg:flex-row pt-44 lg:justify-center items-center justify-center min-h-screen p-8 lg:p-28 space-y-12 lg:space-y-0 lg:space-x-24">
  <div>
    <img
      src={logo}
      alt="logo"
      className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full"
    />
  </div>
  <div className="text-center lg:text-left">
    <h3 className="text-white text-4xl sm:text-3xl">
      Hi, It's <span className="text-blue-500 font-bold">Ayoub El Bouzidi</span> <br />
      I'm a <span className="text-blue-500 font-bold animate-pulse">Full-Stack Developer</span>
    </h3>
    <p className="text-white mt-4 text-2xl md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
      Suspendisse varius enim in eros elementum tristique.<br />
      Nulla facilisi. Duis aliquet.
    </p>
    {/* Social Icons */}
    <div className="flex justify-center lg:justify-start space-x-4 text-blue-500 text-5xl mt-6">
      <a href="https://www.linkedin.com/in/ayoub-el-bouzidi-0897a9298/" target="_blank" rel="noopener noreferrer" className='hover:scale-110 hover:shadow-lg hover:shadow-blue-700'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/Ayoub-El-Bouzidi" target="_blank" rel="noopener noreferrer" className='hover:scale-110 hover:shadow-lg hover:shadow-blue-700'>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://wa.me/212696176900" target="_blank" rel="noopener noreferrer" className='hover:scale-110 hover:shadow-lg hover:shadow-blue-700' >
        <FontAwesomeIcon icon={faWhatsapp}  />
      </a>
    </div>
    {/* Buttons */}
    <div className="flex justify-center lg:justify-start space-x-4 mt-6">
      <button className="w-28 text-xl border-blue-500 border-solid border-2 rounded-lg h-8 btn text-blue-500 hover:bg-blue-500 hover:text-white">
        Hire me
      </button>
      <button className="w-28 text-xl rounded-lg btn bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center">
        <a href="/cv.pdf" download="Ayoub_El_Bouzidi_CV.pdf" className="flex items-center space-x-2 text-white">
          <span>CV</span>
          <FontAwesomeIcon icon={faFileArrowDown} />
        </a>
      </button>
    </div>
    
  </div>
</div>

  {/* Sections */}
  <div id="education" className="p-4 sm:p-8 mt-20">
    <Educations />
  </div>
  <div id="skills" className="p-4 sm:p-8">
    <Skills />
  </div>
  <div id="projects" className="p-4 sm:p-8">
    <Projects />
  </div>
  <div id="experience" className="p-4 sm:p-8">
    <Experiences />
  </div>
  <div id="contact" className="p-4 sm:p-8">
    <Contact />
  </div>
</div>

    
  );
}

export default App;
