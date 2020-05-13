import calculateTotalVotes from "../helper/calculateTotalVotes";

test("function returns the total votes when called with combined votes", () => {
  const mockcombined_votes = [
    {
      cool_votes: 2,
      uncool_votes: 1,
      subzero_votes: 4,
      tech_list: {
        name: "Express",
      },
    },
    {
      cool_votes: 2,
      uncool_votes: 3,
      subzero_votes: 5,
      tech_list: {
        name: "JQuery",
      },
    },
    {
      cool_votes: 2,
      uncool_votes: 3,
      subzero_votes: 6,
      tech_list: {
        name: "React",
      },
    },
  ];
  expect(calculateTotalVotes(mockcombined_votes)).toEqual(28);
});
