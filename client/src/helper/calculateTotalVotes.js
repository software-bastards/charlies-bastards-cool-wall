/**
 * @method calculateTotalVotes - calculates total votes
 * @param {subzero_votes: Number, cool_votes: Number, uncool_votes: Number, tech_list: {name: String}>, Number}  combined_votes
 * @returns {Number} - returns the total votes
 */

const calculateTotalVotes = (combined_votes) => {
  let total = combined_votes.reduce(function (acc, item) {
    return acc + item.subzero_votes + item.cool_votes + item.uncool_votes;
  }, 0);
  return total;
};

export default calculateTotalVotes;
