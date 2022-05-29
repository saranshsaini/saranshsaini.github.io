import React from "react";
import { email, linkedin, github } from "../data/miscdata";
import "../styles/Contact.css";

export default function Contact(props) {
  return (
    <div className="info contact">
      <h1>Contact</h1>
      <hr />
      <h2>Want to get in touch?</h2>
      <h3>Great!</h3>
      <br />
      <p>Why dont you...</p>
      <ul>
        <li>
          <a
            href={
              "mailto:" + email.email + "?" + email.subject + "&" + email.body
            }
            target="_blank"
            rel="noreferrer"
          >
            Email Me
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn
          </a>
        </li>
        <li>
          <a href={github} target="_blank" rel="noreferrer">
            Check out my GitHub profile
          </a>
        </li>
      </ul>
    </div>
  );
}
