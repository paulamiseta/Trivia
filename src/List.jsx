import React from "react";
import { ListItems } from "./ListItems";
import { Header } from "./Header.jsx";

export class List extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: {},
      score: 0,
    };
    this.handleScore = this.handleScore.bind(this);
  }

  handleScore() {
    this.setState((prevState) => ({
      score: prevState.score + 1,
    }));
  }

  render() {
    return (
      <ul className="questionList">
        <Header score={this.state.score * 10} />
        <ListItems score={this.handleScore} />
      </ul>
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}
}
