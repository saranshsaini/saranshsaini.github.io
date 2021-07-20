import React from "react";
import "../styles/Content.css";
import { useState } from "react";

import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects"
import Contact from "./Contact"
import Resume from "./Resume"

import { motion } from "framer-motion";

export default function Content() {
  const [clicked, setClicked] = useState("about");

  const trans = {
    scale: 1.2,
    textShadow: "0px 0px 4px gray",
    backgroundColor: "red",
  };
  const init = { rotate: 10, scale: 1.1 };

  function click(tab) {
    setClicked(tab);
  }

  return (
    <>
      <div className="content-holder">
        <div className="info-holder">
          {clicked === "exp" && <Experience />}
          {clicked === "about" && <About />}
          {clicked === "proj" && <Projects />}
          {clicked === "cont" && <Contact />}
          {clicked === "res" && <Resume />}
        </div>
        <div className="tabs">
          <motion.div
            className="about-bar bar"
            whileHover={trans}
            initial={init}
            onClick={() => click("about")}
          >
            <motion.h1>About Me</motion.h1>
          </motion.div>
          <motion.div
            className="experience-bar bar"
            whileHover={trans}
            initial={init}
            onClick={() => click("exp")}
          >
            <h1>Experience</h1>
          </motion.div>
          <motion.div
            className="projects-bar bar "
            whileHover={trans}
            initial={init}
            onClick={() => click("proj")}
          >
            <h1>Projects</h1>
          </motion.div>
          <motion.div
            className="resume-bar bar"
            whileHover={trans}
            initial={init}
            onClick={() => click("res")}
          >
            <h1>Resume</h1>
          </motion.div>
          <motion.div
            className="contact-bar bar"
            whileHover={trans}
            initial={init}
            onClick={() => click("cont")}
          >
            <h1>Contact Me</h1>
          </motion.div>
        </div>
      </div>
      
    </>
  );
}
