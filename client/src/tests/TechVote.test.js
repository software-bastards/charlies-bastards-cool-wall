import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import TechVote from "../components/TechVote";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
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
  const appComponent = findByTestAttr(wrapper, "component-votelist");
  expect(appComponent.length).toBe(1);
});
test("should call componentDidMount once", () => {
  const componentDidMountSpy = spyOn(TechVote.prototype, "componentDidMount");
  const wrapper = setup();
  expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
});

describe("display the technologies to vote", () => {
  const tech_list = [
    {
      id: 1,
      name: "Laveral"
    },
    {
      id: 2,
      name: "React"
    },
    {
      id: 3,
      name: "Angular"
    }
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
