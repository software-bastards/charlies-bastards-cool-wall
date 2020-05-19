import React from "react";
import "../stylesheets/TotalVotes.scss";

class TotalVotes extends React.Component {
  state = {
    counter: 0,
  };
  componentDidMount() {
    if (this.state.counter < this.props.total_votes) {
      setTimeout(this.counter1, 10);
    }
  }

  counter1 = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    if (this.state.counter < this.props.total_votes) {
      setTimeout(this.counter2, 10);
    }
  };
  counter2 = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    if (this.state.counter < this.props.total_votes) {
      setTimeout(this.counter1, 10);
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