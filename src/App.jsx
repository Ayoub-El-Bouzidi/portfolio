import logo from './assets/logo.jpg';
import Skills from './Skills';
import Educations from './Education';
import Projects from './Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
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
  return (
    <div className="App">
  <header className="App-header fixed w-full z-10 bg-gray-500">
    <nav className="flex items-center justify-between px-4 py-4 sm:px-6 md:px-8">
      {/* Logo */}
      <h1 className="text-blue-500 text-2xl md:text-3xl font-bold">Ayoub</h1>

      {/* Navigation Links */}
      <div className="flex flex-col sm:flex-row text-sm sm:text-lg space-y-2 sm:space-y-0 sm:space-x-6">
        <a href="#home" className="text-white hover:text-blue-500 transition-colors duration-300">Home</a>
        <a href="#education" onClick={(e) => handleScroll(e, "education")} className="text-white hover:text-blue-500 transition-colors duration-300">Educations</a>
        <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="text-white hover:text-blue-500 transition-colors duration-300">Skills</a>
        <a href="#projects" onClick={(e) => handleScroll(e, "projects")} className="text-white hover:text-blue-500 transition-colors duration-300">Projects</a>
        <a href="#experiences" className="text-white hover:text-blue-500 transition-colors duration-300">Experiences</a>
        <a href="#contact" className="text-white hover:text-blue-500 transition-colors duration-300">Contact</a>
      </div>
    </nav>
  </header>

  {/* Body */}
  <div className="flex flex-col lg:flex-row items-center p-8 lg:p-28 justify-center space-y-12 lg:space-y-0 lg:space-x-24">
    <div>
      <img src={logo} alt="logo" className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full" />
    </div>
    <div className="text-center lg:text-left">
      <h3 className="text-white text-2xl sm:text-3xl">
        Hi, It's <span className="text-blue-500 font-bold">Ayoub El Bouzidi</span> <br />
        I'm a <span className="text-blue-500 font-bold animate-pulse">Full-Stack Developer</span>
      </h3>
      <p className="text-white mt-4 text-sm md:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
        Suspendisse varius enim in eros elementum tristique.<br />
        Nulla facilisi. Duis aliquet.
      </p>
      {/* Social Icons */}
      <div className="flex justify-center lg:justify-start space-x-4 text-blue-500 text-3xl mt-6">
        <a href="https://www.linkedin.com/in/ayoub-el-bouzidi-0897a9298/"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://github.com/Ayoub-El-Bouzidi"><FontAwesomeIcon icon={faGithub} /></a>
        <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
        <a href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
      </div>
      {/* Buttons */}
      <div className="flex justify-center lg:justify-start space-x-4 mt-6">
        <button className="w-24 border-blue-500 border-solid border-2 rounded-lg h-8 btn text-blue-500 hover:bg-blue-500 hover:text-white">
          Hire me
        </button>
        <button className="w-24 rounded-lg btn bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center">
          <a href="/cv_de_stage.pdf" download="Ayoub_El_Bouzidi_CV.pdf" className="flex items-center space-x-2 text-white">
            <span>Cv</span>
            <FontAwesomeIcon icon={faFileArrowDown} />
          </a>
        </button>
      </div>
    </div>
  </div>

  {/* Sections */}
  <div id="education" className="p-4 sm:p-8">
    <Educations />
  </div>
  <div id="skills" className="p-4 sm:p-8">
    <Skills />
  </div>
  <div id="projects" className="p-4 sm:p-8">
    <Projects />
  </div>
  <div id="contact" className="p-4 sm:p-8">
    <Contact />
  </div>
</div>

    
  );
}

export default App;
