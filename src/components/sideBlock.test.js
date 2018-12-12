import React from 'react';
import {configure, shallow} from 'enzyme';
import SideBlock from'./sideBlock';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Side Block', () => {
    const wrapper = shallow(<SideBlock />);

    it('has 6 subblocks', () => {
       expect(wrapper.find('.data-container').children().length).toEqual(6);
    });
    it('Side block component receives props', () => {
        const wrapper = shallow(<SideBlock model='Mercedes'/>)
       expect(wrapper.instance().props.model).toBe('Mercedes');
    });
    it('a tag node renders div correctly', () => {
        const wrapper = shallow(<SideBlock model={'BMW'}/>)
       expect(wrapper.find('div.price').props().model).toBe('BMW');
    });
});