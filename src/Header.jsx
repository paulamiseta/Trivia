import React from "react";

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <header className="appHeader">
        <div className="triviaLogo">
          <h1 className="T">T</h1>
          <h1 className="rivia">RIVIA</h1>
          <h1 className="questMark">?</h1>
        </div>
        <div className="score">
          SCORE:<p className="userScore">{this.props.score}%</p>
        </div>
      </header>
    );
  }
}
