/**
 * @method calculateProgressBarPercent - calculates the percentage of vote_type
 * @param {Array<subzero_votes: Number, cool_votes: Number, uncool_votes: Number, tech_list: {name: String}>, Number} - technology , vote_type
 * @returns {Number} - returns the percentage value
 */

const calculateProgressBarPercent = (technology, votetype) => {
  const total =
    technology.subzero_votes + technology.uncool_votes + technology.cool_votes;
  return parseInt((votetype * 100) / total);
};

export default calculateProgressBarPercent;
