import React from "react";
import "../styles/Info.css";
import "../styles/About.css";

export default function About(props) {
  return (
    <div className="info about" >
      <h1>I'm glad you're here</h1>
      <h2>A little about me...</h2>
      <br />
      <p>I'm a student at UC Berkeley studying Computer Science.</p>
      <br />
      <p>
        I've been exploring different fields within software engineering. You can learn about my past experiences using the tabs on the right.
      </p>
      <br />
      <p>
        Get in touch through the contacts tab!
      </p>
    </div>
  );
}
