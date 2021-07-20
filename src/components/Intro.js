import React from "react"
import { motion } from "framer-motion";
import '../styles/Intro.css';


export default function Intro(){
    return(
        <section class="intro" id="intro">
        <h2>Hey, it's</h2>
        <h1>Saransh</h1>

        <div class="bar-holder">
          <motion.div
            className="bar1"
            animate={{ x: 235 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeatType: "reverse",
              repeat: 1,
            }}
          />
          <motion.div
            className="bar2"
            animate={{ x: 180 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeatType: "reverse",
              repeat: 2,
            }}
          />
          <motion.div
            className="bar3"
            animate={{ x: 120 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeatType: "reverse",
              repeat: 3,
            }}
          />
        </div>

       
      </section>
    )
}