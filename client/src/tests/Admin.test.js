import React from "react";
import { shallow } from "enzyme";
import { Admin } from "../containers/Admin";

/**
 * Factory function to create a ShallowWrapper for the Admin component.
 * @function setup
 * @param {object} props - component props specific to this setup.
 * @param {object} state - initial state for setup.
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Admin {...props} />);
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
  const adminComponent = findByTestAttr(wrapper, "component-admin");
  expect(adminComponent.length).toBe(1);
});

describe("State controlled input fields", () => {
  let wrapper;
  const email = "";
  const password = "";
  const flash = "";

  beforeEach(() => {
    wrapper = setup(null, { email, password, flash });
  });

  test("State updates with the value of input email box upon change", () => {
    const inputEmail = findByTestAttr(wrapper, "input-email");
    const mockEvent = { target: { value: "abc@test.com" } };
    inputEmail.simulate("change", mockEvent);
    expect(wrapper.state("email")).toEqual("abc@test.com");
  });

  test("State updates with the value of input password box upon change", () => {
    const inputPassword = findByTestAttr(wrapper, "input-password");
    const mockEvent = { target: { value: "abc" } };
    inputPassword.simulate("change", mockEvent);
    expect(wrapper.state("password")).toEqual("abc");
  });
});

test("Submit button calls the post function that posts into the database ", async () => {
  const wrapper = setup();
  const resolvePromise = () => Promise.resolve("success");
  wrapper.handlePostAdminLogin = jest.fn(resolvePromise);
  wrapper.instance().handleLoginSubmit({ preventDefault() {} });
  await wrapper.handlePostAdminLogin();
  expect(wrapper.handlePostAdminLogin).toHaveBeenCalledTimes(1);
});

// import React from "react";
// import { shallow } from "enzyme";
// import Admin from "../containers/Admin";
// // Create the mock store
// import configureMockStore from "redux-mock-store";
// const mockStore = configureMockStore();

// describe("Admin", () => {
//   let wrapper, store;

//   beforeEach(() => {
//     const initialState = {
//       auth: {
//         token: false,
//       },
//     };
//     store = mockStore(initialState);
//     // Shallow render the container passing in the mock store
//     wrapper = shallow(<Admin store={store} />);
//   });

//   it("should show previously rolled value", () => {
//     // test that the state values were correctly passed as props
//     expect(wrapper.props().token).toBe(1);
//   });

//   it("should roll the dice again when button is clicked", () => {
//     // test that the component events dispatch the expected actions
//     wrapper.simulate("login");

//     const actions = store.loginSuccess();
//     expect(actions).toEqual([{ type: "CREATE_SESSION" }]);
//   });
// });
