import configureStore from 'redux-mock-store';
import * as sliderActions from './sliderActions';
import {
    carModelImages,
    interExamplePhoto,
    linkInterPhoto,
    linkOuterPhoto,
    modelConfigurationHeader, outherExamplePhoto
} from "./body-jsons";
import fetchMock from "fetch-mock";
import CarModel from "../model/carModel";
import thunk from "redux-thunk";

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore();

describe('Slider actions', () => {
    beforeEach(() => {
        store.clearActions();
    });

    it('dispatches the right type', () => {
       const expectedActions = [{
           type: 'IMAGE_CHANGED'
       }];
       store.dispatch(sliderActions.changeImage())
       expect(store.getActions()).toEqual(expectedActions);
    });

    it('has add images of internal and external car in fetchModelConfigurationImages', () => {
        const url = modelConfigurationHeader._links.image;

        fetchMock.getOnce(url, {
            body: carModelImages,
            headers: { 'content-type': 'aplication/json' }
        });
        const expectedCarModel = new CarModel();
        expectedCarModel.interPhoto = interExamplePhoto;
        expectedCarModel.outerPhoto = outherExamplePhoto;
        const expectedData = [
            {
                type: 'FETCH_MODEL_CONFIGURATION_SUCCESS',
                modelConfiguration: expectedCarModel
            }
        ]
        const store = mockStore({modelConfiguration: {}});
        return store.dispatch(sliderActions.fetchModelConfigurationImages(new CarModel(), url))
            .then(() => {
                expect(store.getActions()).toEqual(expectedData);
            });
    });
});