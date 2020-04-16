import React from "react";
import { shallow } from "enzyme";

import DisplayTrend from "../components/DisplayTrend";

/**
 * Factory function to create a ShallowWrapper for the DisplayTrend component.
 * @function setup
 * @param {object} props - component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<DisplayTrend {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
test("renders without error", () => {
  const wrapper = setup();
  const displaytrendComponent = findByTestAttr(
    wrapper,
    "component-displaytrend"
  );
  expect(displaytrendComponent.length).toBe(1);
});
test("should call componentDidMount once", () => {
  const componentDidMountSpy = spyOn(
    DisplayTrend.prototype,
    "componentDidMount"
  );
  const wrapper = setup();
  expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
});

// describe("function that resolves the votes into cool, uncool and subzero category", () => {
//   const combined_votes = [
//     {
//       cool_votes: "12",
//       uncool_votes: "1",
//       subzero_votes: "4",
//       tech_list: {
//         name: "Express",
//       },
//     },
//     {
//       cool_votes: "2",
//       uncool_votes: "7",
//       subzero_votes: "5",
//       tech_list: {
//         name: "JQuery",
//       },
//     },
//     {
//       cool_votes: "2",
//       uncool_votes: "3",
//       subzero_votes: "6",
//       tech_list: {
//         name: "React",
//       },
//     },
//   ];
//   let wrapper;
//   let cool_technologies;
//   let uncool_technologies;
//   let subzero_technologies;
//   beforeEach = () => {
//     cool_technologies = "";
//     uncool_technologies = "";
//     subzero_technologies = "";
//   };

// test("function that is called to resolve the votes, calls setState", () => {
//   wrapper = setup(null, {
//     combined_votes,
//     cool_technologies,
//     uncool_technologies,
//     subzero_technologies,
//   });
//   jest.useFakeTimers();
//   setTimeout(() => {
//     // expect(wrapper.update().state("cool_technologies").length).toBe(1);
//     wrapper.update();
//     console.log(wrapper.state("cool_technologies"));
//   }, 1500);
//   jest.runAllTimers();
// });
//});
