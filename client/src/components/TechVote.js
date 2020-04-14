import React, { Component } from "react";
import handleFetchServerData from "../helper/handleFetchServerData";
import handlePostVoteData from "../helper/handlePostVoteData";
import DisplayForVote from "./DisplayForVote";
import "../stylesheets/global.scss";
import "../stylesheets/global.css";
import "../stylesheets/TechVote.scss";

class TechVote extends Component {
  state = {
    tech_list: [],
    vote_list: [],
    flash: "",
  };
  componentDidMount() {
    handleFetchServerData()
      .then((results) =>
        this.setState({ tech_list: [...this.state.tech_list, ...results] })
      )
      .catch((err) => console.error(err));
  }
  storeVote = (technology, vote_type) => {
    this.setState({
      vote_list: [
        ...this.state.vote_list.filter(
          (vote) => vote.tech_id !== technology.id
        ),
        {
          tech_id: technology.id,
          vote_type: vote_type,
        },
      ],
    });
  };
  handleVoteSubmit = (e) => {
    handlePostVoteData(this.state.vote_list)
      .then((response) => {
        this.setState({ flash: response.data.message });
        console.log(this.state.flash);
      })
      .catch((err) => this.setState({ flash: err.flash }));
  };
  render() {
    return (
      <div data-test="component-techvote" className="techvote--wrapper">
        <div className="techvote--displayforvote">
          {this.state.tech_list.map((tech) => (
            <div key={tech.id}>
              <DisplayForVote
                data-test="displayvote-section"
                technology={tech}
                storeVote={this.storeVote}
              />
            </div>
          ))}
        </div>
        <div className="techvote--submit">
          <button
            onClick={this.handleVoteSubmit}
            data-test="submit-button"
            className="button--light_blue"
          >
            Submit Vote
          </button>
        </div>
      </div>
    );
  }
}
export default TechVote;