export const calculateVotePercentage = (votes) => {
  let coolVotes = votes.reduce((total, obj) => {
    return parseInt(obj.cool_votes) + total;
  }, 0);

  let uncoolVotes = votes.reduce((total, obj) => {
    return parseInt(obj.uncool_votes) + total;
  }, 0);
  let subzeroVotes = votes.reduce((total, obj) => {
    return parseInt(obj.subzero_votes) + total;
  }, 0);
  let total = coolVotes + uncoolVotes + subzeroVotes;
  let votePercentage = {
    cool: ((coolVotes * 100) / total).toFixed(1),
    uncool: ((uncoolVotes * 100) / total).toFixed(1),
    subzero: ((subzeroVotes * 100) / total).toFixed(1),
  };

  return votePercentage;
};
