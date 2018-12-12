import React from 'react';
import Header from './header';
import {configure, mount, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });


describe('Header component', () => {
    const wrapper = shallow(<Header/>);

    it('has one div', () => {
        expect(wrapper.find('.header-container').exists()).toBe(true);
    });

    it('has logo-container div', () => {
        expect(wrapper.find('.logo-container').exists()).toBe(true);
    });

    it('has two select inputs', () => {
        expect(wrapper.find('select').length).toEqual(2);
    });


    it('has options of bodyList', () => {
        const bodyList = ['body-1', 'body-2'];
        const headerWithBodyCar = shallow(<Header bodyList={bodyList} />);
        bodyList.forEach((body) => {
            expect(headerWithBodyCar.containsMatchingElement(<option value={body}>{body}</option>)).toEqual(true)
        });
    });

    it('has options of modelList', () => {
        const modelList = ['model-1', 'model-2'];
        const headerWithModelCar = shallow(<Header modelList={modelList} />);
        modelList.forEach((model) => {
            expect(headerWithModelCar.containsMatchingElement(<option value={model}>{model}</option>)).toEqual(true)
        });
    });
});