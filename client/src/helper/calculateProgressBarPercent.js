const calculateProgressBarPercent = (technology, votetype) => {
  const total =
    technology.subzero_votes + technology.uncool_votes + technology.cool_votes;
  return (votetype * 100) / total;
};

export default calculateProgressBarPercent;
