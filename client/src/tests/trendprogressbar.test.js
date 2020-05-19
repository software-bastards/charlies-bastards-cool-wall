import React from "react";
import { shallow } from "enzyme";
import TrendProgressBar from "../components/TrendProgressBar";


/**
 * Factory function to create a ShallowWrapper for the ProgressBar component.
 * @function setup
 * @param {object} props - component props specific to this setup.

 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const wrapper = shallow(<TrendProgressBar {...props} />);
  
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
    const trendProgressBarComponent = findByTestAttr(wrapper, "component-trendprogressbar");
    expect(trendProgressBarComponent.length).toBe(1);
  });

  
  