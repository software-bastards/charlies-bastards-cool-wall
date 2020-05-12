import React from "react";
import { shallow } from "enzyme";
import SubZero from "../components/SubZero";
jest.mock("../helper/gettingTechIcon");

/**
 * Factory function to create a ShallowWrapper for the Cool component.
 * @function setup
 * @param {object} props - component props specific to this setup.

 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const wrapper = shallow(<SubZero {...props} />);

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
const subzero_technology = [
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
];
const tech_list = [
  {
    id: 1,
    name: "Express",
    svg: null,
  },
  {
    id: 2,
    name: "React",
    svg: null,
  },
  {
    id: 3,
    name: "Angular",
    svg: null,
  },
];

test("renders without error", () => {
  const wrapper = setup({ subzero_technology, tech_list });
  const subzeroComponent = findByTestAttr(wrapper, "component-subzero");
  expect(subzeroComponent.length).toBe(1);
});
test("renders correct number of technologies", () => {
  const gettingTechIcon = jest.fn();
  gettingTechIcon.mockReturnValueOnce("<svg></svg>");
  const wrapper = setup({ subzero_technology, tech_list });

  const technologySection = findByTestAttr(wrapper, "technology-section");
  expect(technologySection.length).toBe(subzero_technology.length);
});
test("renders cool votes progressbar", () => {
  const gettingTechIcon = jest.fn();
  gettingTechIcon.mockReturnValueOnce("<svg></svg>");
  const wrapper = setup({ subzero_technology, tech_list });

  const coolvotesProgressBar = findByTestAttr(wrapper, "cool-progressbar");
  expect(coolvotesProgressBar.length).toBe(subzero_technology.length);
});
test("renders uncool votes progressbar", () => {
  const gettingTechIcon = jest.fn();
  gettingTechIcon.mockReturnValueOnce("<svg></svg>");
  const wrapper = setup({ subzero_technology, tech_list });

  const uncoolvotesProgressBar = findByTestAttr(wrapper, "uncool-progressbar");
  expect(uncoolvotesProgressBar.length).toBe(subzero_technology.length);
});
test("renders subzero votes progressbar", () => {
  const gettingTechIcon = jest.fn();
  gettingTechIcon.mockReturnValueOnce("<svg></svg>");
  const wrapper = setup({ subzero_technology, tech_list });

  const subzerovotesProgressBar = findByTestAttr(
    wrapper,
    "subzero-progressbar"
  );
  expect(subzerovotesProgressBar.length).toBe(subzero_technology.length);
});
