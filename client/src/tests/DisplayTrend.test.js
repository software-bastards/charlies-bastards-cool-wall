import React from "react";
import { shallow } from "enzyme";
import { DisplayTrend } from "../components/DisplayTrend";
import handleFetchCombinedVotes from "../helper/handleFetchCombinedVotes";
jest.mock("../helper/handleFetchCombinedVotes");

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

test("axios handler is called when the component mounts", async () => {
  const wrapper = setup();
  expect(handleFetchCombinedVotes).toHaveBeenCalled();
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
