import React, { Component } from "react";
import handleFetchTechnologyList from "../helper/handleFetchTechnologyList";
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

  componentDidMount = async () => {
    try {
      const results = await handleFetchTechnologyList();
      this.setState({ tech_list: [...this.state.tech_list, ...results] });
    } catch (err) {
      console.error(err);
    }
  };

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

  handleVoteSubmit = () => {
    handlePostVoteData(this.state.vote_list)
      .then((response) => {
        this.setState({ flash: response.data.message });
      })
      .catch((err) => this.setState({ flash: err.flash }));
  };

  render() {
    return (
      <div data-test="component-techvote" className="techvote--wrapper">
        {this.state.flash ? <p>{this.state.flash}</p> : null}
        <div className="techvote--displayforvote_outer">
          <div className="techvote--shadow_top"></div>
          <div className="techvote--displayforvote_inner">
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

          <div className="techvote--shadow_bottom"></div>
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
