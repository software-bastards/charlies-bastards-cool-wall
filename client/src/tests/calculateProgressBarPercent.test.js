import calculateProgressBarPercent from "../helper/calculateProgressBarPercent";

test("function returns the total votes when called with combined votes", () => {
  const mocktechnology = {
    cool_votes: 10,
    uncool_votes: 5,
    subzero_votes: 5,
    tech_list: {
      name: "Express",
    },
  };

  expect(
    calculateProgressBarPercent(mocktechnology, mocktechnology.cool_votes)
  ).toEqual(50);
});
