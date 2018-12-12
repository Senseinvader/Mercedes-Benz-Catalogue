import React from 'react';
import {shallow, configure} from 'enzyme';
import DescriptionComponent from './descriptionComponent';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('Description component', () => {

    const wrapper = shallow(<DescriptionComponent />);

    it('has one div', () => {
        expect(wrapper.find('div').length).toBe(1);
    });
    //renders description conditionally
    it('renders exter description when exterior flag is true', () => {
        const displaySetting = {exterior: true};
        const description = {interiorDesc: 'interior', exteriorDesc: 'exterior'};
        const wrapper = shallow(<DescriptionComponent {...displaySetting} {...description} />)
        expect(wrapper.find('div h3').text()).toBe('exterior');
    });
    it('renders inter description when exterior flag is false', () => {
        const displaySetting = {exterior: false};
        const description = {interiorDesc: 'interior', exteriorDesc: 'exterior'};
        const wrapper = shallow(<DescriptionComponent {...displaySetting} {...description} />)
        expect(wrapper.find('div h3').text()).toBe('interior');
    });
    //test snapshot
    it('matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});