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
        <nav className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <h1 className="text-blue-500 text-3xl font-bold">Ayoub</h1>

          {/* Navigation Links */}
          <div className="flex text-xl space-x-8">
            <a
              href="#home"
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#education"
              onClick={(e) => handleScroll(e, "education")}
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              Educations
            </a>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, "skills")}
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#experiences"
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              Experiences
            </a>
            <a
              href="#contact"
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>



      {/* Body */}
      <div className='flex items-center p-28 justify-center space-x-24'>
        <div className=''>
          <img src={logo} alt='logo' className='w-96 h-96 rounded-full'/>
        </div>
        
        <div>
          <h3 className='text-white text-3xl'>
            Hi, It's <span className='text-blue-500 font-bold'>Ayoub El Bouzidi</span>  <br/>
            I'm a <span className='text-blue-500 font-bold animate-pulse'>Full-Stack Developer</span> 
          </h3><br/>
          <p className='text-white'>
            Lorem rfkrofk rfkrofk rofjerofk fjrofjko woqqo vefr edfe<br/>
            Lorem rfkrofk rfkrofk rofjerofk fjrofjko woqqo frv<br/>
            Lorem rfkrofk rfkrofk rofjerofk fjrofjko woqqo
          </p><br/>
          
          {/* Render FontAwesome Icon directly */}
          <div className='text-4xl text-blue-500 space-x-6'>
            <a href='https://www.linkedin.com/in/ayoub-el-bouzidi-0897a9298/' className='icon-link'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://github.com/Ayoub-El-Bouzidi' className='icon-link'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href='' className='icon-link'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='' className='icon-link'>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
          <div className='flex space-x-4'>
            <button className='w-24 border-blue-500 border-solid border-2 rounded-lg h-8 btn text-blue-500 mt-5 hover:bg-blue-500 text-white'>
              Hire me
            </button>
            <button className='w-24 rounded-lg text-xl btn bg-blue-500 text-white mt-5 hover:bg-blue-600 flex items-center justify-center space-x-2'>
              <a href='/cv_de_stage.pdf' download="Ayoub_El_Bouzidi_CV.pdf" className="flex items-center space-x-2 text-white">
                <span>Cv</span> 
                <FontAwesomeIcon icon={faFileArrowDown} />
              </a>
              
            </button>
          </div>
            
        </div>
      </div>
      {/* Education */}
      <div id='education'>
        <Educations />
      </div>
      {/* Skills */}
      <div id='skills'>
        <Skills />
      </div>
      <div id='projects'>
        <Projects />
      </div>
    </div>
    
  );
}

export default App;
