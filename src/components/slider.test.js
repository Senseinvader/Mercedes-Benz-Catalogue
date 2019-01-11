import React from 'react';
import {UnwrappedSlider, mapDispatchToProps, mapStateToProps} from './slider';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import {changeImage} from "../actions/sliderActions";
import CarModel from "../model/carModel";

configure({adapter: new Adapter()});

describe('Slider component', () => {

    //test mapStateToProps
    it('should show exterior as the initial value', () => {
        const initialState = {
            interPhoto: '',
            exterior: true,
            sliderReducer: {
                exterior: true
            },
            headerReducer: {
                modelConfiguration: new CarModel()
            },
        };
        expect(mapStateToProps(initialState).exterior).toBe(true);
    });
    //test mapDispatchToProps
    it('should change image when clicked', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).handleChangeImage();
        expect(dispatch.mock.calls[0][0]).toEqual({type: 'IMAGE_CHANGED'});
        expect(dispatch).toHaveBeenCalledWith(changeImage());
    });
    //test that component has one img node
    it('tests component has one div node', () => {
        const wrapper = shallow(<UnwrappedSlider outerPhoto={true} interPhoto={true}/>);
        expect(wrapper.find('div').exists()).toBe(true);
    });
        
    it('tests component has one img node', () => {
        const props = {
            interPhoto: 'interior.jpg',
            outerPhoto: 'exterior.jpg',
        };
        const wrapper = shallow(<Slider {...props}/>);
        expect(wrapper.find('img').exists()).toBe(true);
    });

    const props = {
        interPhoto: 'interior.jpg',
        outerPhoto: 'exterior.jpg',
        exterior: false,
        handleChangeImage: jest.fn(()=> console.log('mocked changeImage'))
    };
    it('src tag node renders src correctly', () => {
        const wrapper = shallow(<UnwrappedSlider {...props} outerPhoto={true} interPhoto={'interior.jpg'}/>);
        expect(wrapper.find('img').props().src).toBe('interior.jpg');
    });
    //comment switches depending on props exterior=false
    it('switches pictures depending on exterior prop', () => {
        const wrapper = shallow(<UnwrappedSlider {...props} outerPhoto={'exterior.jpg'} interPhoto={'interior.jpg'}/>);
        expect(wrapper.find('img').props().src).toBe('interior.jpg');
        wrapper.setProps({exterior: true});
        expect(wrapper.find('img').props().src).toBe('exterior.jpg');
    });

    //test switch in between images forward
    it('click on the picture calls the handleChangeImage', () => {
        const wrapper = shallow(<UnwrappedSlider {...props} outerPhoto={'exterior.jpg'} interPhoto={'interior.jpg'}/>);
        expect(wrapper.find('img').props().src).toBe('interior.jpg');
        wrapper.find('img').simulate('click');
        expect(props.handleChangeImage.mock.calls.length).toEqual(1);
    });

    //test match the snapshot
    it('matches the snapshot', () => {
        const wrapper = shallow(<UnwrappedSlider outerPhoto={true} interPhoto={true}/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
