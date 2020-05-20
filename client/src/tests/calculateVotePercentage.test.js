import { calculateVotePercentage } from "../helper/calculateVotePercentage";

test("function returns the total vote percentage of each type of vote (cool, uncool and subzero) when called with combined votes", () => {
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
  expect(calculateVotePercentage(mockcombined_votes)).toEqual({
    cool: 21,
    subzero: 53,
    uncool: 25,
  });
});
