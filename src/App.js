import React from "react";
import Header from "./header/Header.js";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <iframe title="W3" src="https://www.w3schools.com" />
      </div>
    );
  }
}

export default App;
