/**
 * @method submitvote - Redux thunk that calculates the updated combined votes after new votes have been sumitted and dispatches action to store
 * @param {Array<tech_id: Number, vote_type: String>} vote_list
 * @returns dispatch to the store
 */

export function submitvote(vote_list) {
  return function (dispatch, getState) {
    const state = getState();
    let updatedCombinedVotes = state.votes.votes;

    vote_list.forEach((newVote) => {
      let vote_type = `${newVote.vote_type}_votes`;

      //Finding the technology for which the vote has been cast
      const technology = state.tech.list.filter(
        (tech) => tech.id === newVote.tech_id
      );

      //Finding the combinedVote for this technology
      //technology and updateTheVote is  an array with 1 object - need to fix that
      let vote = state.votes.votes.filter(
        (vote) => vote.tech_list.name === technology[0].name
      );

      // Find the vote_type and increment by 1
      let updatedVote = {};

      for (let key in vote[0]) {
        if (key === vote_type) {
          updatedVote[key] = vote[0][key] + 1;
        } else {
          updatedVote[key] = vote[0][key];
        }
      }

      //update the combinedvotes with the newly calculated votes
      updatedCombinedVotes = [
        ...updatedCombinedVotes.filter(
          (vote) => vote.tech_list.name !== technology[0].name
        ),
        updatedVote,
      ];
    });

    //update the store with the updated votes
    dispatch({
      type: "SUBMIT_COMBINEDVOTES",
      votes: updatedCombinedVotes,
    });
  };
}
