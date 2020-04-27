import React from "react";
import { shallow } from "enzyme";
import ProgressBar from "../components/ProgressBar";

/**
 * Factory function to create a ShallowWrapper for the ProgressBar component.
 * @function setup
 * @param {object} props - component props specific to this setup.

 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const wrapper = shallow(<ProgressBar {...props} />);

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
const name = "UnCool";

test("renders without error", () => {
  const wrapper = setup();
  const progressBarComponent = findByTestAttr(wrapper, "component-progressbar");
  expect(progressBarComponent.length).toBe(1);
});
test("renders the vote type name", () => {
  const wrapper = setup({ name });
  const progressBarComponent = findByTestAttr(wrapper, "component-progressbar");
  expect(progressBarComponent.text()).toContain("UnCool");
});
