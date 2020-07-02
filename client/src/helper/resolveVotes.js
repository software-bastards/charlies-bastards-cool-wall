/**
 * @method resolveCoolVotes - gives back the array with technologies having maximum cool votes
 * @param {subzero_votes: Number, cool_votes: Number, uncool_votes: Number, tech_list: {name: String}>, Number}  combined_votes
 * @returns {Object} - returns an array of technologies with highest cool votes
 */

export const resolveCoolVotes = (combined_votes) => {
  let cool_technology = [];
  combined_votes.forEach((vote) => {
    vote.cool_votes = parseInt(vote.cool_votes);
    vote.uncool_votes = parseInt(vote.uncool_votes);
    vote.subzero_votes = parseInt(vote.subzero_votes);
    if (
      vote.cool_votes >= vote.uncool_votes &&
      vote.cool_votes > vote.subzero_votes
    ) {
      cool_technology = [...cool_technology, vote];
    }
  });

  return cool_technology;
};

/**
 * @method resolveUnCoolVotes - gives back the array with technologies having maximum uncool votes
 * @param {subzero_votes: Number, cool_votes: Number, uncool_votes: Number, tech_list: {name: String}>, Number}  combined_votes
 * @returns {Object} - returns an array of technologies with highest uncool votes
 */
export const resolveUnCoolVotes = (combined_votes) => {
  let uncool_technology = [];
  combined_votes.forEach((vote) => {
    vote.cool_votes = parseInt(vote.cool_votes);
    vote.uncool_votes = parseInt(vote.uncool_votes);
    vote.subzero_votes = parseInt(vote.subzero_votes);
    if (
      vote.uncool_votes > vote.cool_votes &&
      vote.uncool_votes > vote.subzero_votes
    ) {
      uncool_technology = [...uncool_technology, vote];
    }
  });

  return uncool_technology;
};

/**
 * @method resolveSubZeroVotes - gives back the array with technologies having maximum subzero votes
 * @param {subzero_votes: Number, cool_votes: Number, uncool_votes: Number, tech_list: {name: String}>, Number}  combined_votes
 * @returns {Object} - returns an array of technologies with highest subzero votes
 */
export const resolveSubzeroVotes = (combined_votes) => {
  let subzero_technology = [];
  combined_votes.forEach((vote) => {
    vote.cool_votes = parseInt(vote.cool_votes);
    vote.uncool_votes = parseInt(vote.uncool_votes);
    vote.subzero_votes = parseInt(vote.subzero_votes);
    if (
      vote.subzero_votes >= vote.uncool_votes &&
      vote.subzero_votes >= vote.cool_votes
    ) {
      subzero_technology = [...subzero_technology, vote];
    }
  });

  return subzero_technology;
};
