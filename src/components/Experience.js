import React from "react";
import "../styles/Experience.css";
import "../styles/Info.css";
import { nasa, capitalone, qq, neurobat, ieee } from "../data/ExperienceData";
//import { ieee } from "../data/ExperienceData";
//import { qq } from "../data/ExperienceData";
//import { dailycal } from "../data/ExperienceData";

export default function Experience(props) {
  return (
    <div className="info experience">
      <h1>Experiences</h1>

      <br />
      <ExpItem source={capitalone} />
      <ExpItem source={nasa} />
      <ExpItem source={neurobat} />
      <ExpItem source={qq} />
      <ExpItem source={ieee} />
    </div>
  );
}

function ExpItem(props) {
  const { source } = props;

  return (
    <div className="exp-holder">
      <h2 className="">
        <a href={source.link} target="_blank" rel="noopener noreferrer">
          {source.employer}
        </a>
      </h2>
      <h3>{source.title}</h3>
      <hr />
      <ul>
        {source.pTags.map((item) => (
          <p>{item}</p>
        ))}
      </ul>
    </div>
  );
}
