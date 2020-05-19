// import React from "react";
// import { shallow } from "enzyme";
// import TrendOverview from "../components/TrendOverview";

// import { Provider } from 'react-redux';
// import renderer from 'react-test-renderer';
// import configureStore from 'redux-mock-store';
// /**
//  * Factory function to create a ShallowWrapper for the TrendOverview component.
//  * @function setup
//  * @param {object} props - component props specific to this setup.

//  * @returns {ShallowWrapper}
//  */
// const setup = (props = {}) => {
//   const wrapper = shallow(<TrendOverview {...props} />);

//   return wrapper;
// };

// /**
//  * Return ShallowWrapper containing node(s) with the given data-test value.
//  * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
//  * @param {string} val - Value of data-test for search.
//  * @returns {ShallowWrapper}
//  */

// const findByTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`);
// };


// test("renders without error", () => {
//   const wrapper = setup();
//   const trendOverviewComponent = findByTestAttr(wrapper, "component-trendoverivew");
//   expect(trendOverviewComponent.length).toBe(1);
// });