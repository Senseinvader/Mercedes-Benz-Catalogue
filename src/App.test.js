import React from 'react';
import App from './App';
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });


describe('App component', () => {
    const wrapper = shallow(<App/>);

    it('has one div', () => {
        expect(wrapper.find('.App').exists()).toBe(true);
    });

    it('contains Header component', () => {
        expect(wrapper.find('Header').exists()).toBe(true);
    })
});