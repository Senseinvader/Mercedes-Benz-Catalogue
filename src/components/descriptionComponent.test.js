import React from 'react';
import {shallow, configure} from 'enzyme';
import DescriptionComponent from './descriptionComponent';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Description component', () => {

    const wrapper = shallow(<DescriptionComponent />);

    it('has one div', () => {
        expect(wrapper.find('div').length).toBe(1);
    });
    //renders description conditionally
    it('renders inter/exter description based on props', () => {
        const displaySetting = {exterior: true};
        const description = {interiorDesc: 'interior', exteriorDesc: 'exterior'};
        const wrapper = shallow(<DescriptionComponent {...displaySetting} {...description} />)
        expect(wrapper.find('div h3').text()).toBe('exterior');
    });
    //test snapshot
});