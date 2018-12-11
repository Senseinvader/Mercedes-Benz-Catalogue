import React from 'react';
import Header from './header';
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });


describe('Header component', () => {
    const wrapper = shallow(<Header/>);

    it('has one div', () => {
        expect(wrapper.find('.header-container').exists()).toBe(true);
    });

    it('has logo-container div', () => {
        expect(wrapper.find('.logo-container').exists()).toBe(true);
    });

    it('has two select inputs', () => {
        expect(wrapper.find('select').length).toEqual(2);
    });
});