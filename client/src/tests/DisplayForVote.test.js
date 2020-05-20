import React from "react";
import { shallow } from "enzyme";
import DisplayForVote from "../components/DisplayForVote";

/**
 * Factory function to create a ShallowWrapper for the DisplayForVote component.
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
describe("Clicking on the vote calls the function to store the vote", () => {
  test("onClick on the cool image icon calls the parent function to store the vote", () => {
    const storeVote = jest.fn();
    const wrapper = setup({ technology, storeVote });
    const coolButton = findByTestAttr(wrapper, "cool-icon");
    coolButton.simulate("click", { preventDefault() {} });
    expect(storeVote).toHaveBeenCalledWith(technology, "cool");
  });
  test("onClick on the uncool image icon calls the parent function to store the vote", () => {
    const storeVote = jest.fn();
    const wrapper = setup({ technology, storeVote });
    const uncoolButton = findByTestAttr(wrapper, "uncool-icon");
    uncoolButton.simulate("click", { preventDefault() {} });
    expect(storeVote).toHaveBeenCalledWith(technology, "uncool");
  });
  test("onClick on the subzero image icon calls the parent function to store the vote", () => {
    const storeVote = jest.fn();
    const wrapper = setup({ technology, storeVote });
    const subzeroButton = findByTestAttr(wrapper, "subzero-icon");
    subzeroButton.simulate("click", { preventDefault() {} });
    expect(storeVote).toHaveBeenCalledWith(technology, "subzero");
  });
});
