import React from "react";
import { shallow } from "enzyme";
import { DisplayTrend } from "../components/DisplayTrend";
import handleFetchCombinedVotes from "../helper/handleFetchCombinedVotes";

// const axios = require("axios");
// jest.mock("axios");

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

describe("componentDidMount calls the axios handler and sets state ", () => {
  // beforeEach(() => {
  //   axios.get.mockReset();
  // });

  // afterEach(() => {
  //   jest.clearAllTimers();
  // });
  const mock_votes = [
    {
      cool_votes: 4,
      subzero_votes: 7,
      tech_list: { name: "Express" },
      uncool_votes: 6,
    },
    {
      cool_votes: 7,
      subzero_votes: 5,
      tech_list: { name: "React" },
      uncool_votes: 1,
    },
    {
      cool_votes: 5,
      subzero_votes: 5,
      tech_list: { name: "JQuery" },
      uncool_votes: 6,
    },
  ];

  test("axios handler returns data and combined Votes state is updated", async () => {
    // axios.get.mockResolvedValue({
    //   data: [
    //     {
    //       cool_votes: 4,
    //       subzero_votes: 7,
    //       tech_list: { name: "Express" },
    //       uncool_votes: 6,
    //     },
    //     {
    //       cool_votes: 7,
    //       subzero_votes: 5,
    //       tech_list: { name: "React" },
    //       uncool_votes: 1,
    //     },
    //     {
    //       cool_votes: 5,
    //       subzero_votes: 5,
    //       tech_list: { name: "JQuery" },
    //       uncool_votes: 6,
    //     },
    //   ],
    // });
    // const combined_votes = [];
    // jest.spyOn(DisplayTrend.prototype, "componentDidMount");
    // const wrapper = setup();
    // //expect(wrapper.props("combined_votes")).toStrictEqual(mock_votes);
    // expect(handleFetchCombinedVotes).toHaveBeenCalledTimes(1);
  });
});
describe("Does not render the 3 components cool, uncool and subzero when props is empty", () => {
  test("renders cool component", () => {
    const wrapper = setup();
    const coolComponent = findByTestAttr(wrapper, "component-cool");
    expect(coolComponent.length).toBe(0);
  });

  test("renders uncool component", () => {
    const wrapper = setup();
    const uncoolComponent = findByTestAttr(wrapper, "component-uncool");
    expect(uncoolComponent.length).toBe(0);
  });

  test("renders subzero component", () => {
    const wrapper = setup();
    const subzeroComponent = findByTestAttr(wrapper, "component-subzero");
    expect(subzeroComponent.length).toBe(0);
  });
});

describe("Renders the 3 components cool, uncool and subzero when props are sent", () => {
  const combined_votes = [
    {
      cool_votes: 4,
      subzero_votes: 7,
      tech_list: { name: "Express" },
      uncool_votes: 6,
    },
    {
      cool_votes: 7,
      subzero_votes: 5,
      tech_list: { name: "React" },
      uncool_votes: 1,
    },
    {
      cool_votes: 5,
      subzero_votes: 5,
      tech_list: { name: "JQuery" },
      uncool_votes: 6,
    },
  ];
  test("renders cool component", () => {
    const wrapper = setup({ combined_votes }, null);
    const coolComponent = findByTestAttr(wrapper, "component-cool");
    expect(coolComponent.length).toBe(1);
  });

  test("renders uncool component", () => {
    const wrapper = setup({ combined_votes }, null);
    const uncoolComponent = findByTestAttr(wrapper, "component-uncool");
    expect(uncoolComponent.length).toBe(1);
  });

  test("renders subzero component", () => {
    const wrapper = setup({ combined_votes }, null);
    const subzeroComponent = findByTestAttr(wrapper, "component-subzero");
    expect(subzeroComponent.length).toBe(1);
  });
});
