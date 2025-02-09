import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useRef , useState } from 'react';
import emailjs from "@emailjs/browser";
import { p } from 'framer-motion/client';




function Contact() {
  
    const form = useRef();
    const [sent , setSent] = useState(false);
    const sendEmail = (e)=>{
      e.preventDefault();
      emailjs.sendForm(
        "service_k0hrpq8",
        "template_8i4tr4t",
        form.current,
        "qRw24ZCDNaBnMAOJt"
      )
      .then(
        (result)=>{
          console.log("succes",result.text);
          setSent(true);
        },
        (error)=>{
          console.log("Error",error.text);
        }
      )
    }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-white text-center mb-4">CONTACT</h1>
        <p className="text-white text-center max-w-xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Whether it's a new project or enhancing an existing one, 
            I'm here to help you achieve your development goals with creativity and precision. 
            Don’t hesitate—reach out today, and let’s build something extraordinary together!
        </p>
        
        <div className='flex justify-around justify-center mt-8'>
            <div>
                <h1 className="text-4xl font-bold text-white mt-8">Contact Me</h1>
                <h3 className="text-2xl text-white mt-4"><span className='text-blue-500'><FontAwesomeIcon icon={faLocationDot} /></span> Tangier-Morocco</h3>
                <h3 className="text-2xl text-white mt-4"><span className='text-blue-500'><FontAwesomeIcon icon={faEnvelope} /></span> elbouzidi.ayoub28@gmail.com</h3>
                <h3 className="text-2xl text-white mt-4"><span className='text-blue-500'><FontAwesomeIcon icon={faPhone} /></span> +212 6 96 17 69 00</h3>
            </div>
            <div>
              {sent ? (
                <p className='text-green-500'>Message sent successfully!</p>
              ):(
                <form ref={form} onSubmit={sendEmail} class="max-w-sm mx-auto">
                <div class="mb-5">
                  <input type="text" id="name" name='user_name' className="caret-blue-500 lg:block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Full Name" required />
                </div>
                <div class="mb-5">
                  <input type="email" id="email" className="caret-blue-500 lg:block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" required />
                </div>
                <div class="mb-5">
                  <input type="text" id="subject" className="bg-gray-50 lg:block caret-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Subject" required />
                </div>
                <div class="mb-5">
                  <textarea id="message" name='message' rows="4" className="caret-blue-500 block lg:block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Message"></textarea>
                </div>
                <div class="flex items-start mb-5">
                </div>
                <button type="submit" class="text-white block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
              </form>
              )}
              
            </div>
        </div>
</div>

  )
}

export default Contact
