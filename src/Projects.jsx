import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import foodProject1 from "./assets/projects/foodProject1.png"
import foodProject2 from "./assets/projects/foodProject2.png"
import foodProject3 from "./assets/projects/foodProject3.png"
import foodProject4 from "./assets/projects/foodProject4.png"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";




const Projects = () => {
    //array images
    const images = [foodProject1 , foodProject2 , foodProject3, foodProject4];
    //use state to track images
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    //handlers fo navigation
    const handleNextImage = ()=>{
        setCurrentImageIndex((prevIndex)=>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );      
    }
    const handlePreviousImage = ()=>{
        setCurrentImageIndex((prevIndex)=>
            prevIndex === 0 ? images.length - 1 : prevIndex -1
        )
    }
    return(
        <div className="p-6 pt-12 bg-black">
            <h1 className="text-4xl font-bold text-white text-center mb-4">PROJECTS</h1>
            <div className="flex flex-wrap justify-center gap-4">
                <div className="max-w-sm bg-gray-700 rounded-lg shadow-md overflow-hidden">
                    <div className="m-3">
                    <div className="flex justify-center items-center">
                        <button onClick={handlePreviousImage} className="absolute text-blue-500 mr-80" aria-label="Previous Image">
                            <FontAwesomeIcon className="size-7" icon={faArrowLeft} />
                        </button>
                        <img
                            className="w-full h-62 object-cover"
                            src={images[currentImageIndex]}
                            alt={`Image ${currentImageIndex + 1} of the project`} loading="lazy"
                        />
                        <button onClick={handleNextImage} className="absolute text-blue-500 ml-80" aria-label="Next Image">
                            <FontAwesomeIcon className="size-7" icon={faArrowRight} />
                        </button>
                    </div>

                        
                        <hr />
                        <h1 className="text-blue-500 text-2xl font-mono mt-3">Food Delivery</h1>
                        <h2 className="text-blue-700 mt-3">2024</h2>
                        <p className="text-white mt-3">A food delivery app is web-based platform that allows users to order food from a variety of restaurants or eateries and have it delivered to their desired location. These apps streamline the food ordering and delivery process by connecting customers with local restaurants and delivery personnel.</p>
                        
                        <a href="" className="icon-link text-white">
                            <button type="button" className="btn mt-3 w-24 p-1 bg-blue-600 rounded-lg hover:bg-gray-500 border-blue-500 border-2">
                                <FontAwesomeIcon icon={faGithub} />
                            </button>
                        </a> 
                    </div>
                </div>


                <div className="max-w-sm bg-gray-700 rounded-lg shadow-md overflow-hidden">
                    <div className="m-3">
                    <div className="flex justify-center items-center">
                        <button className="absolute text-blue-500 mr-80" aria-label="Previous Image">
                            <FontAwesomeIcon className="size-7" icon={faArrowLeft} />
                        </button>
                        <img
                            className="w-full h-62 object-cover"
                            src={foodProject1}
                            alt="" loading="lazy"
                        />
                        <button className="absolute text-blue-500 ml-80" aria-label="Next Image">
                            <FontAwesomeIcon className="size-7" icon={faArrowRight} />
                        </button>
                    </div>

                        
                        <hr />
                        <h1 className="text-blue-500 text-2xl font-mono mt-3">Food Delivery</h1>
                        <h2 className="text-blue-700 mt-3">2024</h2>
                        <p className="text-white mt-3">A food delivery app is web-based platform that allows users to order food from a variety of restaurants or eateries and have it delivered to their desired location. These apps streamline the food ordering and delivery process by connecting customers with local restaurants and delivery personnel.</p>
                        
                        <a href="" className="icon-link text-white">
                            <button type="button" className="btn mt-3 w-24 p-1 bg-blue-600 rounded-lg hover:bg-gray-500 border-blue-500 border-2">
                                <FontAwesomeIcon icon={faGithub} />
                            </button>
                        </a> 
                    </div>
                </div>
                <div className="max-w-sm bg-gray-700 rounded-lg shadow-md overflow-hidden">
                    <div className="m-3">
                    <div className="flex justify-center items-center">
                        <button className="absolute text-blue-500 mr-80" aria-label="Previous Image">
                            <FontAwesomeIcon className="size-7" icon={faArrowLeft} />
                        </button>
                        <img
                            className="w-full h-62 object-cover"
                            src={foodProject1}
                            alt="" loading="lazy"
                        />
                        <button className="absolut text-blue-500 ml-80" aria-label="Next Image">
                            <FontAwesomeIcon className="size-7" icon={faArrowRight} />
                        </button>
                    </div>

                        
                        <hr />
                        <h1 className="text-blue-500 text-2xl font-mono mt-3">Food Delivery</h1>
                        <h2 className="text-blue-700 mt-3">2024</h2>
                        <p className="text-white mt-3">A food delivery app is web-based platform that allows users to order food from a variety of restaurants or eateries and have it delivered to their desired location. These apps streamline the food ordering and delivery process by connecting customers with local restaurants and delivery personnel.</p>
                        
                        <a href="" className="icon-link text-white">
                            <button type="button" className="btn mt-3 w-24 p-1 bg-blue-600 rounded-lg hover:bg-gray-500 border-blue-500 border-2">
                                <FontAwesomeIcon className="h-5 " icon={faGithub} />
                            </button>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects