import logo from './assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header flex justify-between p-4 items-center">
        <h1 className='text-blue-500 text-3xl font-bold'>Ayoub</h1>
        <nav className='flex space-x-6 text-2xl '>
          <a href='#' className='text-white hover:text-blue-500'>Home</a>
          <a href='#' className='text-white hover:text-blue-500'>Services</a>
          <a href='#' className='text-white hover:text-blue-500'>Skills</a>
          <a href='#' className='text-white hover:text-blue-500'>Educations</a>
          <a href='#' className='text-white hover:text-blue-500'>Experiences</a>
          <a href='#' className='text-white hover:text-blue-500'>Contact</a>
        </nav>
      </header>

      {/* Body */}
      <div className='flex items-center p-14 justify-center space-x-24'>
        <img src={logo} alt='logo' className='w-96 h-96 rounded-full'/>
        <div>
          <h3 className='text-white text-3xl'>
            Hi, It's <span className='text-blue-500 font-bold'>Ayoub El Bouzidi</span>  <br/>
            I'm a <span className='text-blue-500 font-bold'>Full-Stack Developer</span> 
          </h3><br/>
          <p className='text-white'>
            Lorem rfkrofk rfkrofk rofjerofk fjrofjko woqqo vefr edfe<br/>
            Lorem rfkrofk rfkrofk rofjerofk fjrofjko woqqo frv<br/>
            Lorem rfkrofk rfkrofk rofjerofk fjrofjko woqqo
          </p><br/>
          
          {/* Render FontAwesome Icon directly */}
          <div className='text-4xl text-blue-500 space-x-6'>
            <a href='https://www.linkedin.com/in/ayoub-el-bouzidi-0897a9298/'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href='https://github.com/Ayoub-El-Bouzidi'><FontAwesomeIcon icon={faGithub} /></a>
            <a href=''><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
            <button className='w-24 border-blue-500 border-solid border-2 rounded-lg h-8 btn text-blue-500 mt-5 hover:bg-blue-500'>
              Hire me
            </button>
        </div>
      </div>
    </div>
  );
}

export default App;
