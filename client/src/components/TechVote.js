import React, { Component } from "react";
<<<<<<< HEAD
import DisplayForVote from "./DisplayForVote";
import handleFetchServerData from "../helper/handleFetchServerData";
import "../stylesheets/global.scss";
import "../stylesheets/global.css";
import "../stylesheets/TechVote.scss";
import handlePostVoteData from "../helper/handlePostVoteData";
=======
import handleFetchServerData from "../helper/handleFetchServerData";
import handlePostVoteData from "../helper/handlePostVoteData";
import DisplayForVote from "./DisplayForVote";
import "../stylesheets/global.scss";
import "../stylesheets/global.css";
import "../stylesheets/TechVote.scss";
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a

class TechVote extends Component {
  state = {
    tech_list: [],
    vote_list: [],
<<<<<<< HEAD
    flash: ""
  };
  componentDidMount() {
    handleFetchServerData()
      .then(results =>
        this.setState({ tech_list: [...this.state.tech_list, ...results] })
      )
      .catch(err => console.error(err));
=======
    flash: "",
  };
  componentDidMount() {
    handleFetchServerData()
      .then((results) =>
        this.setState({ tech_list: [...this.state.tech_list, ...results] })
      )
      .catch((err) => console.error(err));
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
  }
  storeVote = (technology, vote_type) => {
    this.setState({
      vote_list: [
<<<<<<< HEAD
        ...this.state.vote_list.filter(vote => vote.tech_id !== technology.id),
        {
          tech_id: technology.id,
          vote_type: vote_type
        }
      ]
    });
  };
  handleVoteSubmit = e => {
    handlePostVoteData(this.state.vote_list)
      .then(response => {
        this.setState({ flash: response.data.message });
        console.log(this.state.flash);
      })
      .catch(err => this.setState({ flash: err.flash }));
  };
  render() {
    return (
      <div className="techvote--wrapper" data-test="component-techvote">
        <div className="techvote--displayforvote">
          {" "}
          {this.state.tech_list.map(tech => (
            <div key={tech.id}>
              <DisplayForVote
                technology={tech}
                storeVote={this.storeVote}
                data-test="displayvote-section"
=======
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
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
              />
            </div>
          ))}
        </div>
        <div className="techvote--submit">
          <button
            onClick={this.handleVoteSubmit}
<<<<<<< HEAD
            className="button--light_blue"
            data-test="submit-button"
          >
            Submit Votes
=======
            data-test="submit-button"
            className="button--light_blue"
          >
            Submit Vote
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
          </button>
        </div>
      </div>
    );
  }
}
<<<<<<< HEAD

=======
>>>>>>> b869d012f0a3ecb6c77a71fc723bbe7355173d2a
export default TechVote;
