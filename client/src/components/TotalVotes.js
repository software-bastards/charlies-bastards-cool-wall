import React from "react";
import "../stylesheets/TotalVotes.scss";

class TotalVotes extends React.Component {
  state = {
    counter: 0,
    stepTime: 0,
  };

  componentDidMount() {
    if (this.props.total_votes < 500) {
      this.setState({
        stepTime: Math.abs(Math.floor(3000 / this.props.total_votes)),
      });
    } else {
      this.setState({
        stepTime: Math.abs(Math.floor(5000 / this.props.total_votes)),
      });
    }
    if (this.state.counter < this.props.total_votes) {
      setTimeout(this.counter1, this.state.stepTime);
    }
  }

  counter1 = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    if (this.state.counter < this.props.total_votes) {
      setTimeout(this.counter1, this.state.stepTime);
    }
  };

  render() {
    return (
      <div className="totalvotes--wrapper">
        <h1 className="totalvotes--h1">{this.state.counter}</h1>
      </div>
    );
  }
}
export default TotalVotes;