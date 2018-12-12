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
    });

    it('contains SideBlock component', () => {
        expect(wrapper.find('SideBlock').exists()).toBe(true);
    });
    it('contains Description component', () => {
       expect(wrapper.find('Description').exists()).toBe(true);
    });
});