import React from "react";
import { shallow } from "enzyme";
import DisplayTrend from "../components/DisplayTrend";
import handleFetchCombinedVotes from "../helper/handleFetchCombinedVotes";

const axios = require("axios");
jest.mock("axios");

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
  beforeEach(() => {
    axios.get.mockReset();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test("axios handler returns data and combined Votes state is updated", async () => {
    axios.get.mockResolvedValue({
      data: [
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
      ],
    });

    const wrapper = shallow(<DisplayTrend />);
    await handleFetchCombinedVotes();
    expect(wrapper.state("combined_votes")).toStrictEqual(mock_votes);
  });

  test("componentDidMount calls resolveVotes and state is updated", async () => {
    axios.get.mockResolvedValue({
      data: [
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
      ],
    });

    const wrapper = shallow(<DisplayTrend />);
    await handleFetchCombinedVotes();
    expect(wrapper.state("cool_technology")).toBeTruthy();
    expect(wrapper.state("uncool_technology")).toBeTruthy();
    expect(wrapper.state("subzero_technology")).toBeTruthy();
  });
});

test("renders cool component", () => {
  const wrapper = setup();
  const coolComponent = findByTestAttr(wrapper, "component-cool");
  expect(coolComponent.length).toBe(1);
});

test("renders uncool component", () => {
  const wrapper = setup();
  const uncoolComponent = findByTestAttr(wrapper, "component-uncool");
  expect(uncoolComponent.length).toBe(1);
});

test("renders subzero component", () => {
  const wrapper = setup();
  const subzeroComponent = findByTestAttr(wrapper, "component-subzero");
  expect(subzeroComponent.length).toBe(1);
});
