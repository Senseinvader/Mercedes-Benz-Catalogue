import React from 'react';
import ConnectedSlider, {Slider} from './slider';
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

    const props = {
        arr: ['exterior.jpg', 'interior.jpg'],
        exterior: false,
        handleChangeImage: jest.fn(()=> console.log('mocked changeImage'))
    };
    it('src tag node renders src correctly', () => {
        const wrapper = shallow(<Slider {...props} />);
        expect(wrapper.find('img').props().src).toBe('interior.jpg');
    });
    //comment switches depending on props exterior=false
    it('switches pictures depending on exterior prop', () => {
        const wrapper = shallow(<Slider {...props}/>);
        expect(wrapper.find('img').props().src).toBe('interior.jpg');
        wrapper.setProps({exterior: true});
        expect(wrapper.find('img').props().src).toBe('exterior.jpg');
    });

    //test switch in between images forward
    it('click on the picture calls the handleChangeImage', () => {
        const wrapper = shallow(<Slider {...props}/>);
        expect(wrapper.find('img').props().src).toBe('interior.jpg');
        wrapper.find('img').simulate('click');
        expect(props.handleChangeImage.mock.calls.length).toEqual(1);
    });

    //test match the snapshot
    it('matches the snapshot', () => {
        const wrapper = shallow(<Slider />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
