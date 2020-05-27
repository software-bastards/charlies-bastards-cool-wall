import React, { Component } from "react";
import handleFetchTechnologyList from "../helper/handleFetchTechnologyList";
import handlePostVoteData from "../helper/handlePostVoteData";
import DisplayForVote from "./DisplayForVote";
import { connect } from "react-redux";
import "../stylesheets/global.scss";
import "../stylesheets/TechVote.scss";
import closeIcon from "../images/closeIcon.svg";
import { submitvote } from "../actions/submitvote";

export class TechVote extends Component {
  state = {
    tech_list: [],
    vote_list: [],
    flash: "",
    submit_empty_votelist: false,
  };

  componentDidMount = async () => {
    try {
      const results = await handleFetchTechnologyList();
      const newTechList = results.map((item) => {
        return { ...item, borderForSelectedVote: "none" };
      });
      this.setState({ tech_list: [...this.state.tech_list, ...newTechList] });
      this.props.dispatch({
        type: "FETCH_TECHLIST",
        list: newTechList,
      });
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
      submit_empty_votelist: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.vote_list !== this.state.vote_list) {
      this.state.vote_list.forEach((vote) => {
        let techIndex = this.state.tech_list.findIndex(
          (tech) => tech.id === vote.tech_id
        );
        let newState = Object.assign({}, this.state);
        newState.tech_list[techIndex].borderForSelectedVote = vote.vote_type;
        this.setState(newState);
      });
    }

    if (prevState.flash !== this.state.flash) {
      let newState = Object.assign({}, this.state);
      newState.tech_list.map((item) => {
        item.borderForSelectedVote = "none";
      });
      this.setState(newState);
    }
  }

  handleVoteSubmit = () => {
    if (this.state.vote_list.length === 0) {
      this.setState({ submit_empty_votelist: true });
    } else
      handlePostVoteData(this.state.vote_list)
        .then((response) => {
          this.setState({ flash: response.data.message });
          this.props.dispatch(submitvote(this.state.vote_list));
        })
        .catch((err) => this.setState({ flash: err.flash }));
  };

  handleClosePopUp = () => {
    this.setState({
      flash: "",
      vote_list: [],
    });
  };

  handleCloseEmptySubmit = () => {
    this.setState({
      submit_empty_votelist: false,
    });
  };

  render() {
    return (
      <div data-test="component-techvote" className="techvote--wrapper">
        <div className="techvote--displayforvote">
          <div className="techvote--displayforvote_shadow"></div>
          {!this.state.submit_empty_votelist ? (
            !this.state.flash ? (
              this.state.tech_list.map((tech) => (
                <div key={tech.id}>
                  <DisplayForVote
                    data-test="displayvote-section"
                    technology={tech}
                    storeVote={this.storeVote}
                  />
                </div>
              ))
            ) : (
              <div
                className="techvote--popup_wrap"
                onClick={this.handleClosePopUp}
              >
                <p>{this.state.flash}</p>
                <img className="close--button" src={closeIcon} alt="Close" />
              </div>
            )
          ) : (
            <div
              className="techvote--popup_wrap"
              onClick={this.handleCloseEmptySubmit}
            >
              <p>Please cast a vote!</p>
              <img
                className="close--button"
                src={closeIcon}
                alt="Close"
                onClick={this.handleCloseEmptySubmit}
              />
            </div>
          )}
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
const mapStateToProps = (state) => {
  return {
    tech_list: state.tech.list,
    
  };
};

export default connect(mapStateToProps)(TechVote);
