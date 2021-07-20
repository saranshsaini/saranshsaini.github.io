import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "../resume.pdf";
import "../styles/Info.css";
import "../styles/Resume.css";
import { resumeLink } from "../data/miscdata";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume(props) {
  return (
    <div className="info resume">
      <h1>Resume</h1>
      <a href={resumeLink} target="_blank" rel="noopener noreferrer">
        <p>(link to resume)</p>
      </a>

      <Document file={resume}>
        <Page key={1} pageNumber={1} options={1} height={1000} />
      </Document>
    </div>
  );
}
