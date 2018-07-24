import React from "react";
import Header from "./header/Header.js";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <iframe title="painting" src="https://dharmesh-painting.herokuapp.com" />
      </div>
    );
  }
}

export default App;
