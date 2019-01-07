import React from 'react';
import {Header, mapDispatchToProps} from './header';
import {fetchBodyList} from '../actions/header-actions';
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });


describe('Header component', () => {
    const wrapper = shallow(<Header/>);

    it('renders itself', () => {
        // const component = wrapper.dive();
        expect(toJson(wrapper)).toMatchSnapshot();
    });

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
        const bodyList = [{bodyId: 'body-1', bodyName: 'body-1-name'}, {bodyId: 'body-2', bodyName: 'body-3-name'}];
        const headerWithBodyCar = shallow(<Header bodyList={bodyList} />);
        bodyList.forEach((body) => {
            expect(headerWithBodyCar.containsMatchingElement(<option value={body.bodyId}>{body.bodyName}</option>)).toEqual(true)
        });
    });

    it('has options of modelList', () => {
        const modelList = [{modelId: 'body-1', modelName: 'body-1-name'}, {modelId: 'body-2', modelName: 'body-3-name'}];
        const headerWithModelCar = shallow(<Header modelList={modelList} />);
        modelList.forEach((model) => {
            expect(headerWithModelCar.containsMatchingElement(<option value={model.modelId}>{model.modelName}</option>)).toEqual(true)
        });
    });
    
    it('dispatches onLoad function via mapDispatchToProps', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).onLoad();
        expect(dispatch).toHaveBeenCalled();
    });
});