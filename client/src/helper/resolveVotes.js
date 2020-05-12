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
