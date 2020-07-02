/**
 * @method gettingCoolestShit - gives back the Object with the highest subzero_votes
 * @param {subzero_votes: Number, cool_votes: Number, uncool_votes: Number, tech_list: {name: String}>, Number}  combined_votes
 * @returns {Object} - returns one combined vote object
 */
import { resolveSubzeroVotes } from "../helper/resolveVotes";

const gettingCoolestShit = (combined_votes) => {
  let subzero = resolveSubzeroVotes(combined_votes);
  let max = subzero.reduce(function (prev, current) {
    return parseInt(prev.subzero_votes) > parseInt(current.subzero_votes)
      ? prev
      : current;
  });
  return max;
};
export default gettingCoolestShit;
