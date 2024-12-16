import React from "react";
import html from './assets/icons/html.png'
import css from './assets/icons/css.png'
import js from './assets/icons/js.png'
import php from './assets/icons/php.png'
import MySQl from './assets/icons/MySQL.png'
import Kotlin from './assets/icons/Kotlin.png'
import git from './assets/icons/git.png'
import github from './assets/icons/github.png'
import jQuery from './assets/icons/jQuery.png'
import react from './assets/icons/react.png'
import laravel from './assets/icons/laravel.png'
import tailwind from './assets/icons/tailwind.png'
import Bootstrap from './assets/icons/Bootstrap.png'
import vSC from './assets/icons/vSC.png'
import aSC from './assets/icons/aSC.png'

const Skills = ()=>{
    return(
        <div className="p-6 pt-12 bg-gray">
            <h1 className="text-3xl text-white text-center mb-6">Skills</h1>
            <div className="flex flex-wrap justify-center gap-4">
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-full h-48 object-cover text-center justify-center items-center flex" src={html} alt="html Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-full h-48 object-cover" src={css} alt="Card Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-full h-48 object-cover" src={js} alt="Card Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-full h-48 object-cover" src={php} alt="Card Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-full h-48 object-cover" src={Kotlin} alt="Card Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-48 h-48 object-cover" src={MySQl} alt="Card Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-48 h-48 object-cover" src={git} alt="Card Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-48 h-48 object-cover" src={github} alt="Card Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-48 h-48 object-cover" src={jQuery} alt="Card Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-48 h-48 object-cover" src={react} alt="Card Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-48 h-48 object-cover" src={laravel} alt="Card Image" />
                </div>
                <div className="w-48 bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-36 h-36 align-center object-cover" src={tailwind} alt="Card Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-48 h-48 align-center object-cover" src={Bootstrap} alt="Card Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-48 h-48 align-center object-cover" src={vSC} alt="Card Image" />
                </div>
                <div className="max-w-sm bg-black rounded-lg shadow-md overflow-hidden">
                    <img className="w-48 h-48 align-center object-cover" src={aSC} alt="Card Image" />
                </div>

            </div>
        </div>
    
    )
}
export default Skills