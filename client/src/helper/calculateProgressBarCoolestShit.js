/**
 * @method calculateProgressBarCoolestShit - calculates the percentage of vote_type of the CoolestShit Component
 * @param {subzero_votes: Number, cool_votes: Number, uncool_votes: Number, tech_list: {name: String}>, Number}  coolestshit_technology
 * @returns {Number} - returns the percentage value
 */

export const calculateProgressBarCoolestShitSubzero = (
  coolestshit_technology
) => {
  const total =
    coolestshit_technology.subzero_votes +
    coolestshit_technology.uncool_votes +
    coolestshit_technology.cool_votes;
  return parseInt((coolestshit_technology.subzero_votes * 100) / total);
};

export const calculateProgressBarCoolestShitCool = (coolestshit_technology) => {
  const total =
    coolestshit_technology.subzero_votes +
    coolestshit_technology.uncool_votes +
    coolestshit_technology.cool_votes;
  return parseInt((coolestshit_technology.cool_votes * 100) / total);
};

export const calculateProgressBarCoolestShitUncool = (
  coolestshit_technology
) => {
  const total =
    coolestshit_technology.subzero_votes +
    coolestshit_technology.uncool_votes +
    coolestshit_technology.cool_votes;
  return parseInt((coolestshit_technology.uncool_votes * 100) / total);
};
