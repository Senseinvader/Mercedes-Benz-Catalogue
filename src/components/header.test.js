import React from 'react';
import Header, {mapStateToProps} from './header';
import {configure, shallow} from "enzyme";
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

    it('Should show empty bodyList', () => {
        const initialState = {
            headerReducer: {
                bodyList: ['Empty']
            }
        };

        expect(mapStateToProps(initialState).bodyList).toEqual(['Empty']);
    });
});