import React from "react";
import { shallow } from "enzyme";
import { DashBoard } from "../containers/Dashboard";
//import handlePostAdminLogin from "../helper/handlePostAdminLogin"

/**
 * Factory function to create a ShallowWrapper for the Admin component.
 * @function setup
 * @param {object} props - component props specific to this setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<DashBoard {...props} />);

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
  const wrapper = setup({ token: true });
  const dashboardComponent = findByTestAttr(wrapper, "component-dashboard");
  expect(dashboardComponent.length).toBe(1);
});
