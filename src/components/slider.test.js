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

    const imageArray = {arr: ['exterior.jpg', 'interior.jpg']};
    const displaySetting = {exterior: false};
    it('src tag node renders src correctly', () => {
        const wrapper = shallow(<Slider {...imageArray} />);
        expect(wrapper.find('img').props().src).toBe('interior.jpg');
    });
    //comment switches depending on props exterior=false
    it('switches pictures depending on exterior prop', () => {
        const wrapper = shallow(<Slider {...imageArray} display={displaySetting}/>);
        expect(wrapper.find('img').props().src).toBe('interior.jpg');
        wrapper.setProps({exterior: true});
        expect(wrapper.find('img').props().src).toBe('exterior.jpg');
    });

    //test switch in between images forward and back

    //test match the snapshot
});
