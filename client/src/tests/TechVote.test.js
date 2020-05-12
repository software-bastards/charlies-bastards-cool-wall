import React from "react";
import { shallow } from "enzyme";
import TechVote from "../components/TechVote";
import handleFetchTechnologyList from "../helper/handleFetchTechnologyList";

const axios = require("axios");
jest.mock("axios");

/**
 * Factory function to create a ShallowWrapper for the TechVote component.
 * @function setup
 * @param {object} props - component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<TechVote {...props} />);
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
  const techvoteComponent = findByTestAttr(wrapper, "component-techvote");
  expect(techvoteComponent.length).toBe(1);
});

describe("componentDidMount calls the axios handler and sets state", () => {
  beforeEach(() => {
    axios.get.mockReset();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  test("axios handler returns data and state is updated", async () => {
    expect.assertions(1);
    const tech_list = [
      { borderForSelectedVote: "none", id: 1, name: "Laveral" },
      { borderForSelectedVote: "none", id: 2, name: "React" },
    ];
    axios.get.mockResolvedValue({
      data: [
        { borderForSelectedVote: "none", id: 1, name: "Laveral" },
        { borderForSelectedVote: "none", id: 2, name: "React" },
      ],
    });

    const wrapper = shallow(<TechVote />);
    await handleFetchTechnologyList();
    expect(wrapper.state("tech_list")).toStrictEqual(tech_list);
  });
});

describe("display the technologies to vote", () => {
  const tech_list = [
    { borderForSelectedVote: "none", id: 1, name: "Laveral" },
    { borderForSelectedVote: "none", id: 2, name: "React" },
    { borderForSelectedVote: "none", id: 3, name: "Angular" },
  ];

  test("render correct number of technology", () => {
    const wrapper = setup(null, { tech_list });
    const displayvoteComponent = findByTestAttr(wrapper, "displayvote-section");
    expect(displayvoteComponent.length).toBe(tech_list.length);
  });

  test("renders a submit button", () => {
    const wrapper = setup();
    const submitButton = findByTestAttr(wrapper, "submit-button");
    expect(submitButton.length).toBe(1);
  });
});

describe("storeVote function sets correct state for vote_list", () => {
  jest.dontMock("object-assign");
  let wrapper;
  let vote_list = [];
  const tech_list = [
    { borderForSelectedVote: "none", id: 1, name: "React" },
    { borderForSelectedVote: "none", id: 2, name: "Laveral" },
  ];
  const technology = { borderForSelectedVote: "none", id: 1, name: "React" };
  const mockvote_type = "cool";
  const vote = [{ tech_id: technology.id, vote_type: mockvote_type }];

  test("choosing a vote for a technology for the first time", () => {
    wrapper = setup(null, { tech_list, vote_list });
    wrapper.instance().storeVote(technology, mockvote_type);
    wrapper.update();

    expect(wrapper.state("vote_list")).toEqual(vote);
  });

  test("Changing the vote type for the same technology", () => {
    const changeVote = [{ tech_id: technology.id, vote_type: "uncool" }];
    wrapper = setup(null, { tech_list, vote_list });
    wrapper.instance().storeVote(technology, "uncool");
    wrapper.update();
    expect(wrapper.state("vote_list")).toEqual(changeVote);
  });

  test("casting vote for another technology", () => {
    wrapper = setup(null, { tech_list, vote_list });
    wrapper.instance().storeVote(technology, mockvote_type);
    wrapper.update();
    const anotherTechnology = {
      borderForSelectedVote: "none",
      id: 2,
      name: "Laveral",
    };
    const anotherMockvote_type = "subzero";
    const anotherVote = [
      ...vote,
      { tech_id: anotherTechnology.id, vote_type: anotherMockvote_type },
    ];
    wrapper.instance().storeVote(anotherTechnology, anotherMockvote_type);
    wrapper.update();
    expect(wrapper.state("vote_list")).toEqual(anotherVote);
  });
});

test("submit button calls the post function that posts into the database", async () => {
  const wrapper = setup();
  const resolvePromise = () => Promise.resolve("success");
  wrapper.handlePostVoteData = jest.fn(resolvePromise);
  wrapper.instance().handleVoteSubmit();
  await wrapper.handlePostVoteData();
  expect(wrapper.handlePostVoteData).toHaveBeenCalledTimes(1);
});
