import React from "react";
import { shallow } from "enzyme";
import UnCool from "../components/UnCool";
jest.mock("../helper/gettingTechIcon");

/**
 * Factory function to create a ShallowWrapper for the Uncool component.
 * @function setup
 * @param {object} props - component props specific to this setup.

 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const wrapper = shallow(<UnCool {...props} />);

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
const uncool_technology = [
  {
    cool_votes: 2,
    subzero_votes: 10,
    tech_list: { name: "Express" },
    uncool_votes: 5,
  },
  {
    cool_votes: 10,
    subzero_votes: 5,
    tech_list: { name: "React" },
    uncool_votes: 6,
  },
];
const tech_list = [
  {
    id: 1,
    name: "Laveral",
  },
  {
    id: 2,
    name: "React",
  },
  {
    id: 3,
    name: "Angular",
  },
];

test("renders without error", () => {
  const wrapper = setup({ uncool_technology, tech_list });
  const gettingTechIcon = jest.fn();
  const unCoolComponent = findByTestAttr(wrapper, "component-uncool");
  expect(unCoolComponent.length).toBe(1);
});
test("renders correct number of technologies", () => {
  const wrapper = setup({ uncool_technology, tech_list });
  const gettingTechIcon = jest.fn();
  const technologySection = findByTestAttr(wrapper, "technology-section");
  expect(technologySection.length).toBe(uncool_technology.length);
});
test("renders uncool votes progressbar", () => {
  const wrapper = setup({ uncool_technology, tech_list });
  const gettingTechIcon = jest.fn();
  const uncoolvotesProgressBar = findByTestAttr(wrapper, "uncool-progressbar");
  expect(uncoolvotesProgressBar.length).toBe(uncool_technology.length);
});
test("renders cool votes progressbar", () => {
  const wrapper = setup({ uncool_technology, tech_list });
  const gettingTechIcon = jest.fn();
  const coolvotesProgressBar = findByTestAttr(wrapper, "cool-progressbar");
  expect(coolvotesProgressBar.length).toBe(uncool_technology.length);
});
test("renders subzero votes progressbar", () => {
  const wrapper = setup({ uncool_technology, tech_list });
  const gettingTechIcon = jest.fn();
  const subzerovotesProgressBar = findByTestAttr(
    wrapper,
    "subzero-progressbar"
  );
  expect(subzerovotesProgressBar.length).toBe(uncool_technology.length);
});
