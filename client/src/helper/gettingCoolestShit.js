export const gettingCoolestShit = (votes) => {
  let max = votes.reduce(function (prev, current) {
    return parseInt(prev.subzero_votes) > parseInt(current.subzero_votes)
      ? prev
      : current;
  });
  return max;
};
