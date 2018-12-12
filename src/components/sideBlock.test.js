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
        const wrapper = shallow(<SideBlock car='Mercedes'/>)
       expect(wrapper.instance().props.car).toBe('Mercedes');
    });
    it('a tag node renders div correctly, has the price div receives price and currency props', () => {
        const model = { price:'1200', currency: 'EUR' };
        console.log(model.price);
        const wrapper = shallow(<SideBlock car={'BMW'} {...model} />)
        expect(wrapper.find('div.price').props().car).toBe('BMW');
        expect(wrapper.find('.price h3').text()).toEqual('1200 EUR');
    });
});