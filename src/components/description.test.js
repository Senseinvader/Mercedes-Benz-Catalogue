import React from 'react';
import {shallow, configure} from 'enzyme';
import Description, {UnwrappedDesc} from './description';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('Description component', () => {

    const wrapper = shallow(<UnwrappedDesc configurationLoaded={true}/>);

    it('has two anchors', () => {
        expect(wrapper.find('a').length).toBe(2);
    });
    //renders description conditionally
    it('renders exter description when exterior flag is true', () => {
        const displaySetting = {exterior: true};
        const description = {interiorDesc: 'interior', exteriorDesc: 'exterior'};
        const wrapper = shallow(<UnwrappedDesc {...displaySetting} {...description} />)
        expect(wrapper.find('div p')).toBeTruthy();
    });
    //test snapshot
    it('matches the snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});