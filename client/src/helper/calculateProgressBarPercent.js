/**
 * @method calculateProgressBarPercent - calculates the percentage of vote_type
 * @param {subzero_votes: Number, cool_votes: Number, uncool_votes: Number, tech_list: {name: String}}  technology
 * @param {Number}  vote_type
 * @returns {Number} - returns the percentage value
 */

const calculateProgressBarPercent = (technology, votetype) => {
  const total =
    parseInt(technology.subzero_votes) +
    parseInt(technology.uncool_votes) +
    parseInt(technology.cool_votes);
  return ((votetype * 100) / total).toFixed(1);
};

export default calculateProgressBarPercent;
