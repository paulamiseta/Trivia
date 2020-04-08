import React from "react";

export class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ checked: true });
    this.props.setChecked();
    if (this.props.isCorrect) {
      this.props.setScore();
    }
  }

  render() {
    const { answer, item } = this.props;

    return (
      <div
        className="inputDiv"
        style={{
          backgroundColor: this.state.checked
            ? this.props.isCorrect
              ? "#00bc8c"
              : "#ff00008c"
            : "initial",
        }}
      >
        <label className="answerLabel">
          <input
            disabled={this.props.isChecked}
            type="radio"
            id={answer}
            name={this.props.item.question}
            value={answer}
            item={item}
            onChange={this.handleChange}
          />
          <p
            className="answerText"
            dangerouslySetInnerHTML={{ __html: answer }}
          ></p>
        </label>
      </div>
    );
  }
}
