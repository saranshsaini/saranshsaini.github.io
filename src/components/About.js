import React from "react";
import "../styles/Info.css";
import "../styles/About.css";

export default function About(props) {
  return (
    <div className="info about" >
      <h1>Stay a while</h1>
      <h2>I'm glad you're here</h2>
      <br />
      <p>I'm a student at UC Berkeley, studying CS and Applied Math.</p>
      <br />
      <p>There's a lot of new stuff that I've been getting up to...</p>
      <p>
        Why don't you check them out by clicking through the tabs on the right?
      </p>
      <br />
      <p>
        Or maybe you just want to get in touch. Yay! Check out the contact tab
        to make a new friend :)
      </p>
    </div>
  );
}
