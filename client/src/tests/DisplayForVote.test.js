import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import DisplayForVote from "../components/DisplayForVote";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - component props specific to this setup.

 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const wrapper = shallow(<DisplayForVote {...props} />);

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
const technology = {
  id: 1,
  name: "Laveral",
};

test("renders without error", () => {
  const wrapper = setup({ technology });
  const displayForVoteComponent = findByTestAttr(
    wrapper,
    "component-displayforvote"
  );
  expect(displayForVoteComponent.length).toBe(1);
});
