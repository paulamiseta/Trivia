import React from "react";
import "./App.css";
import { List } from "./List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  render() {
    return (
      <div className="main">
        <List />
      </div>
    );
  }
}

export default App;
