import React from "react";
import { shallow } from "enzyme";

import CoolWall from "../components/CoolWall";

/**
 * Factory function to create a ShallowWrapper for the CoolWall component.
 * @function setup
 * @param {object} props - component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<CoolWall {...props} />);
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
  const coolwallComponent = findByTestAttr(wrapper, "component-coolwall");
  expect(coolwallComponent.length).toBe(1);
});

test("renders technology voting component", () => {
  const wrapper = setup();
  const techvoteComponent = findByTestAttr(wrapper, "techvote-component");
  expect(techvoteComponent.length).toBe(1);
});

test("renders displaytrend component", () => {
  const wrapper = setup();
  const displaytrendComponent = findByTestAttr(
    wrapper,
    "displaytrend-component"
  );
  expect(displaytrendComponent.length).toBe(1);
});
