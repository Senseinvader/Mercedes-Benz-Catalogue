import React from 'react';
import {configure, shallow} from 'enzyme';
import {SideBlock} from'./sideBlock';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import CarModel from '../model/carModel';
import {carModel} from "../actions/body-jsons";

configure({adapter: new Adapter()});

describe('Side Block', () => {

    it('has 6 subblocks', () => {
        const wrapper = shallow(<SideBlock configurationLoaded = {true} modelConfiguration={new CarModel()}/>)
        expect(wrapper.find('.char').children().length).toEqual(9);
    });
    it('Side block component receives props', () => {
        const wrapper = shallow(<SideBlock car='Mercedes'/>)
        expect(wrapper.instance().props.car).toBe('Mercedes');
    });
    it('has the price div receives price and currency props', () => {
        const modelConfiguration = { price:'1200', currency: 'EUR', topSpeed: '250', topSpeedUnit: 'km/h' };

        const wrapper = shallow(<SideBlock configurationLoaded = {true} modelConfiguration={modelConfiguration} />);
        expect(wrapper.find('.price p').text()).toEqual('Price: 1200 EUR');
        expect(wrapper.find('.speed p').text()).toEqual('Top speed: 250 km/h');
    });
    it('matches the snapshot', () => {
        const wrapper = shallow(<SideBlock configurationLoaded = {true} modelConfiguration={new CarModel()}/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});