import React from "react";
import { Answer } from "./Answer";

export class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };
    this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    let array = [...this.props.item.incorrect_answers];
    array.push(this.props.item.correct_answer);
    array.sort();

    return (
      <div className="listItem" key={this.props.item.question}>
        <p
          className="question"
          dangerouslySetInnerHTML={{ __html: this.props.item.question }}
        />

        {array.map((answer) => (
          <Answer
            value={answer}
            key={answer}
            item={this.props.item}
            answer={answer}
            name={this.props.item.question}
            isCorrect={answer === this.props.item.correct_answer}
            setScore={this.props.action}
            setChecked={this.handleChecked}
            isChecked={this.state.checked}
          />
        ))}
        <p className="showCorrect">
          {this.state.checked
            ? "CORRECT: " + this.props.item.correct_answer
            : ""}
        </p>
      </div>
    );
  }
}
