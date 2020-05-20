import React from "react";
import { shallow } from "enzyme";
import ChangePwd from "../components/ChangePwd";

/**
 * Factory function to create a ShallowWrapper for the ChangePwd component.
 * @function setup
 * @param {object} props - component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<ChangePwd {...props} />);
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
  const changePwdComponent = findByTestAttr(wrapper, "component-changepwd");
  expect(changePwdComponent.length).toBe(1);
});

describe("State controlled input fields", () => {
  let wrapper;
  const password = "";
  const confirmpassword = "";
  const flash = "";
  const successflash = "";

  beforeEach(() => {
    wrapper = setup(null, { password, confirmpassword, flash, successflash });
  });

  test("State updates with the value of input password box upon change", () => {
    const inputPassword = findByTestAttr(wrapper, "input-password");
    const mockEvent = { target: { value: "test" } };
    inputPassword.simulate("change", mockEvent);
    expect(wrapper.state("password")).toEqual("test");
  });

  test("State updates with the value of input confirmpassword box upon change", () => {
    const inputConfirmPassword = findByTestAttr(
      wrapper,
      "input-confirmpassword"
    );
    const mockEvent = { target: { value: "abc" } };
    inputConfirmPassword.simulate("change", mockEvent);
    expect(wrapper.state("confirmpassword")).toEqual("abc");
  });
});

test("Submit button calls the putt function that updates the database ", async () => {
  const wrapper = setup();
  const resolvePromise = () => Promise.resolve("success");
  wrapper.handlePostAdminPwdChange = jest.fn(resolvePromise);
  wrapper.instance().handleLoginSubmit({ preventDefault() {} });
  await wrapper.handlePostAdminPwdChange();
  expect(wrapper.handlePostAdminPwdChange).toHaveBeenCalledTimes(1);
});
