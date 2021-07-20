import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../styles/Info.css";

export default function Info(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  function oc(color) {
    //document.body.style.background = "linear-gradient(to right, #141e30, #243b55)";
    document.body.className = "B";
  }
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="info">
      <h1>stuff</h1>
    </div>
  );
}

function Content(props) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>{props.num}</h1>
    </motion.div>
  );
}
