import React from "react";
import "../stylesheets/TotalSubmissions.scss";

class TotalSubmissions extends React.Component {
  state = {
    counter: 0,
    stepTime: 0,
  };

  componentDidMount() {
    if (this.props.submission_count[0].total_submissions < 100) {
      this.setState({
        stepTime: Math.abs(
          Math.floor(4000 / this.props.submission_count[0].total_submissions)
        ),
      });
    } else {
      this.setState({
        stepTime: Math.abs(
          Math.floor(6000 / this.props.submission_count[0].total_submissions)
        ),
      });
    }
    if (this.state.counter < this.props.submission_count[0].total_submissions) {
      setTimeout(this.counter1, this.state.stepTime);
    }
  }

  counter1 = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    if (this.state.counter < this.props.submission_count[0].total_submissions) {
      setTimeout(this.counter2, this.state.stepTime);
    }
  };
  counter2 = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
    if (this.state.counter < this.props.submission_count[0].total_submissions) {
      setTimeout(this.counter1, this.state.stepTime);
    }
  };

  render() {
    return (
      <div
        data-test="component-totalsubmissions"
        className="totalsubmissions--wrapper"
      >
        <h1 className="totalsubmissions--h1">{this.state.counter}</h1>
      </div>
    );
  }
}
export default TotalSubmissions;
