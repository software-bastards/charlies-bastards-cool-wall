import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TrendOverview from "../components/TrendOverview";

const mockStore = configureStore();
const store = mockStore({

    subzero_votes:10, 
    cool_votes: 5, 
    uncool_votes: 3, 
    tech_list: {name: "Express"}
});

const props = {};

describe('component-trendoverview', () => {
    it('should render correctly with default props and redux store', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <TrendOverview {...props} />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});