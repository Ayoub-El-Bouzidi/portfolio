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
        <div className="p-4 pt-8 bg-gray-800">
    <h1 className="text-2xl text-white text-center mb-4">Skills</h1>
    <div className="flex flex-wrap justify-center gap-2">
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={html} alt="HTML Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={css} alt="CSS Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={js} alt="JavaScript Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={php} alt="PHP Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={Kotlin} alt="Kotlin Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={MySQl} alt="MySQL Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={git} alt="Git Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={github} alt="GitHub Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={jQuery} alt="jQuery Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={react} alt="React Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={laravel} alt="Laravel Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={tailwind} alt="Tailwind CSS Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={Bootstrap} alt="Bootstrap Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={vSC} alt="VS Code Image" />
        </div>
        <div className="max-w-xs bg-black rounded-md shadow-sm overflow-hidden">
            <img className="w-32 h-32 object-cover" src={aSC} alt="Another Skill Image" />
        </div>
    </div>
</div>

    
    )
}
export default Skills