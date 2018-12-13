import React from 'react';
import Slider from './slider';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('Slider component', () => {

    //test that component has one img node
    it('tests component has one img node', () => {
        const wrapper = shallow(<Slider />);
        expect(wrapper.find('img').exists()).toBe(true);
    });

    it('src tag node renders src correctly', () => {
        const imageArray = {arr: ['https://cdn2.thecatapi.com/images/1m3.jpg', 'https://cdn2.thecatapi.com/images/3m3.jpg']};
        const wrapper1 = shallow(<Slider {...imageArray} />);
        expect(wrapper1.find('img').props().src).toBe('https://cdn2.thecatapi.com/images/1m3.jpg');
    });
    //comment switches depending on props exterior=true/false
    //test switch in between images forward and back
    //test match the snapshot
})