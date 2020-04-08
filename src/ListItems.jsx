import React from "react";
import { ListItem } from "./ListItem.jsx";

export class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: {},
      isLoading: true,
    };
  }

  render() {
    return (
      <div className="container">
        <div>
          {this.state.isLoading ? (
            <div className="loaderWrapper">
              <div className="loader"></div>
            </div>
          ) : (
            ""
          )}
        </div>
        {Object.values(this.state.questions).map((item) => {
          return (
            <ListItem
              action={this.props.score}
              name={item.question}
              item={item}
              key={item.question}
            />
          );
        })}
        {!this.state.isLoading ? (
          <div className="playAgain">
            <button
              className="refBtn"
              onClick={() => window.location.reload(false)}
            >
              PLAY AGAIN!
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }

  componentDidMount() {
    if (!this.state.isLoading) {
      this.setState({ isLoading: true });
    }
    fetch("https://opentdb.com/api.php?amount=10&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ questions: data.results, isLoading: false });
      });
  }

  componentWillUnmount() {}
}
