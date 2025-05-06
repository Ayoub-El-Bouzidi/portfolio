import React from "react";
import { motion } from "framer-motion";

const Skills = ()=>{
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
    
    return(
        <div className="p-4 pt-8 bg-gray-800">
            <motion.h1 initial="hidden" whileInView="visible" variants={fadeIn} className="text-4xl font-bold text-white text-center mb-4">Experiences</motion.h1>
            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} className="flex flex-wrap justify-center gap-6">

            </motion.div>
        </div>

    
    )
}
export default Skills