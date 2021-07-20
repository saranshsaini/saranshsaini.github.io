import React from 'react'
import Intro from "./components/Intro"
import Content from "./components/Content"
import "./styles/App.css"

function App() {
  return (
    <React.Fragment>
      <Intro />
      <Content />
    </React.Fragment>
  );
}

export default App;
