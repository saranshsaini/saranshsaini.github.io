import React from "react";
import "../styles/Info.css";
import "../styles/Projects.css";
import data from "../data/ProjectsData";

export default function Projects(props) {
  return (
    <div className="info projects">
      <h1>Projects</h1>
      <br />
      {data.map((item) => (
        <ProjItem source={item} />
      ))}
    </div>
  );
}

function ProjItem(props) {
  const { source } = props;

  return (
    <div className="proj-holder">
      <h2 className="">
        <a href={source.link} target="_blank" rel="noopener noreferrer">
          {source.title}
        </a>
      </h2>
      <h3>
        <span className="bigger">Technologies Used:</span>{" "}
        <span className="smaller">{source.tech}</span>
      </h3>
      <hr />
      <ul>
        {source.pTags.map((item) => (
          <p className="ptag">{item}</p>
        ))}
      </ul>
    </div>
  );
}
