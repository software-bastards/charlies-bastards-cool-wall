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
    cool: Math.floor((coolVotes * 100) / total),
    uncool: Math.floor((uncoolVotes * 100) / total),
    subzero: Math.floor((subzeroVotes * 100) / total),
  };

  return votePercentage;
};
