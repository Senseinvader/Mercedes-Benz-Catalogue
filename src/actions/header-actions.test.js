import configureStore from 'redux-mock-store';
import * as headerActions from './header-actions';
import fetchMock from'fetch-mock';
import thunk from 'redux-thunk';
import {getBodiesQuery, getModelConfigurationQuery, getModelsQuery} from './apiQueries';
import {carModel, carModelImages, expectedDataOfModelConfiguration, modelConfigurationHeader} from "./body-jsons";
import CarModel from "../model/carModel";
import {API_KEY} from "../non-export-data/api-key";

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('Header actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates FETCH_BODY_LIST when fetching bodies cars has been done', () => {
        const bodyList = [
            {
                "bodyId": "13",
                "bodyName": "Sports Tourer",
                "_links": {
                    "self": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/bodies/13?apikey=${API_KEY}`,
                    "models": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models?bodyId=13&apikey=${API_KEY}`
                }
            },
            {
                "bodyId": "15",
                "bodyName": "Shooting Brake",
                "_links": {
                    "self": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/bodies/15?apikey=${API_KEY}`,
                    "models": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models?bodyId=15&apikey=${API_KEY}`
                }
            }];

        fetchMock.getOnce(getBodiesQuery, {
            body: bodyList,
            headers: { 'content-type': 'application/json' }

        });

        const expectedActions = [
            {"type": "FETCH_BODIES_REQUEST"}, {
            type: 'FETCH_BODIES_SUCCESS',
            bodyList: [{"bodyId": "13",
            "bodyName": "Sports Tourer"}, {"bodyId": "15", "bodyName": "Shooting Brake"}]
        }];

        const store = mockStore({ bodyList: []});


        return store.dispatch(headerActions.fetchBodyList())
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            })
    });

    it('creates FETCH_MODEL_LIST when fetching bodies cars has been done', () => {
        const modelList = [
            {
                "modelId": "13",
                "name": "Sports Tourer",
                "_links": {
                    "self": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/bodies/13?apikey=${API_KEY}`,
                    "models": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models?bodyId=13&apikey=${API_KEY}`
                }
            },
            {
                "modelId": "15",
                "name": "Shooting Brake",
                "_links": {
                    "self": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/bodies/15?apikey=${API_KEY}`,
                    "models": `https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models?bodyId=15&apikey=${API_KEY}`
                }
            }];

        fetchMock.getOnce(getModelsQuery('1'), {
            body: modelList,
            headers: { 'content-type': 'application/json' }

        });

        const expectedActions = [
            {"type": "FETCH_MODELS_REQUEST"}, {
                type: 'FETCH_MODELS_SUCCESS',
                modelList: [{"modelId": "13",
                    "modelName": "Sports Tourer"}, {"modelId": "15", "modelName": "Shooting Brake"}]
            }];

        const store = mockStore({ modelList: []});


        return store.dispatch(headerActions.fetchModelList('1'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            })
    });

    it('creates FETCH_MODEL_CONFIGURATION when fetching bodies cars has been done', () => {
        fetchMock.get(getModelConfigurationQuery('205066_000'), {
            body: modelConfigurationHeader,
            headers: { 'content-type': 'aplication/json' }
        });

        const url = modelConfigurationHeader._links.image;

        fetchMock.get(url, {
            body: carModelImages,
            headers: { 'content-type': 'aplication/json' }
        });

        const expectedCarModel = carModel;
        expectedCarModel.interPhoto = "https://europe.starconnect-ce.i.daimler.com/iris/iris?COSY-EU-100-1713d0VXqXWFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9mWa9Q6FjcBXBryXGEAJ3J0l5CNOB29MjbApjTlI5uxmZQC31SrkzNwlbm7jAeohKV5sN%25vqCr9yLRzQfYax7rErH1eJin8wsofoiZUMdM4FnClTg95Qp6PDakmSeWH0Stsd9sGcUfDL1XGEW9YJ0ldCfOB2zB5bAp7ToI5uKMTQmIJwF1GY6PDGmhSc63ZstXS0h3cUf8XNXGEHiTJ0lU0xOB2GS1bApFnyI5u9mIQC3zC1kzN9tKm7sDgubYwR9hDv34taSj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1Lbz71&&IMGT=P27&POV=BI1,PZM";
        expectedCarModel.outerPhoto = "https://europe.starconnect-ce.i.daimler.com/iris/iris?COSY-EU-100-1713d0VXqXWFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9mWa9Q6FjcBXBryXGEAJ3J0l5CNOB29MjbApjTlI5uxmZQC31SrkzNwlbm7jAeohKV5sN%25vqCr9yLRzQfYax7rErH1eJin8wsofoiZUMdM4FnClTg95Qp6PDakmSeWH0Stsd9sGcUfDL1XGEW9YJ0ldCfOB2zB5bAp7ToI5uKMTQmIJwF1GY6PDGmhSc63ZstXS0h3cUf8XNXGEHiTJ0lU0xOB2GS1bApFnyI5u9mIQC3zC1kzN9tKm7sDgubYwR9hDv34taSj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1Lbz71&&IMGT=P27&POV=BE020,PZM";
        const expectedData = [
            {
                type: 'FETCH_MODEL_CONFIGURATION_SUCCESS',
                modelConfiguration: expectedCarModel
            }
        ]

        const store = mockStore({ modelConfiguration: {}});

        return store.dispatch(headerActions.fetchModelConfiguration('205066_000'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedDataOfModelConfiguration);
            })
    });

    it('has error when fetchModelConfiguration has not query', () => {
        fetchMock.getOnce(getModelConfigurationQuery(''), {

        });

        const expectedData = [
            {'type': 'FETCH_MODEL_CONFIGURATION_REQUEST'},
            {'type': 'FETCH_MODEL_CONFIGURATION_FAILURE',
            'error': 'Error: Mistake in query'
            }
        ]

        const store = mockStore({ error: ''});

        return store.dispatch(headerActions.fetchModelConfiguration('', 'error'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedData);
            });
    });

    it('has add images of internal and external car in fetchModelConfiguration', () => {
        fetchMock.get(getModelConfigurationQuery('205066_000'), {
            body: modelConfigurationHeader,
            headers: { 'content-type': 'aplication/json' }
        });

        const url = modelConfigurationHeader._links.image;

        fetchMock.get(url, {
            body: carModelImages,
            headers: { 'content-type': 'aplication/json' }
        });

        const expectedCarModel = carModel;
        expectedCarModel.interPhoto = "https://europe.starconnect-ce.i.daimler.com/iris/iris?COSY-EU-100-1713d0VXqXWFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9mWa9Q6FjcBXBryXGEAJ3J0l5CNOB29MjbApjTlI5uxmZQC31SrkzNwlbm7jAeohKV5sN%25vqCr9yLRzQfYax7rErH1eJin8wsofoiZUMdM4FnClTg95Qp6PDakmSeWH0Stsd9sGcUfDL1XGEW9YJ0ldCfOB2zB5bAp7ToI5uKMTQmIJwF1GY6PDGmhSc63ZstXS0h3cUf8XNXGEHiTJ0lU0xOB2GS1bApFnyI5u9mIQC3zC1kzN9tKm7sDgubYwR9hDv34taSj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1Lbz71&&IMGT=P27&POV=BI1,PZM";
        expectedCarModel.outerPhoto = "https://europe.starconnect-ce.i.daimler.com/iris/iris?COSY-EU-100-1713d0VXqXWFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9mWa9Q6FjcBXBryXGEAJ3J0l5CNOB29MjbApjTlI5uxmZQC31SrkzNwlbm7jAeohKV5sN%25vqCr9yLRzQfYax7rErH1eJin8wsofoiZUMdM4FnClTg95Qp6PDakmSeWH0Stsd9sGcUfDL1XGEW9YJ0ldCfOB2zB5bAp7ToI5uKMTQmIJwF1GY6PDGmhSc63ZstXS0h3cUf8XNXGEHiTJ0lU0xOB2GS1bApFnyI5u9mIQC3zC1kzN9tKm7sDgubYwR9hDv34taSj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1Lbz71&&IMGT=P27&POV=BE020,PZM";
        const expectedData = [
            {
                type: 'FETCH_MODEL_CONFIGURATION_SUCCESS',
                modelConfiguration: expectedCarModel
            }
        ]

        const store = mockStore({ modelConfiguration: {}});

        return store.dispatch(headerActions.fetchModelConfiguration('205066_000'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedDataOfModelConfiguration);
            });

    });

    it('has add images of internal and external car in fetchModelConfigurationImages', () => {
        const url = modelConfigurationHeader._links.image;

        fetchMock.getOnce(url, {
            body: carModelImages,
            headers: { 'content-type': 'aplication/json' }
        });
        const expectedCarModel = new CarModel();
        expectedCarModel.interPhoto = "https://europe.starconnect-ce.i.daimler.com/iris/iris?COSY-EU-100-1713d0VXqXWFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9mWa9Q6FjcBXBryXGEAJ3J0l5CNOB29MjbApjTlI5uxmZQC31SrkzNwlbm7jAeohKV5sN%25vqCr9yLRzQfYax7rErH1eJin8wsofoiZUMdM4FnClTg95Qp6PDakmSeWH0Stsd9sGcUfDL1XGEW9YJ0ldCfOB2zB5bAp7ToI5uKMTQmIJwF1GY6PDGmhSc63ZstXS0h3cUf8XNXGEHiTJ0lU0xOB2GS1bApFnyI5u9mIQC3zC1kzN9tKm7sDgubYwR9hDv34taSj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1Lbz71&&IMGT=P27&POV=BI1,PZM";
        expectedCarModel.outerPhoto = "https://europe.starconnect-ce.i.daimler.com/iris/iris?COSY-EU-100-1713d0VXqXWFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9mWa9Q6FjcBXBryXGEAJ3J0l5CNOB29MjbApjTlI5uxmZQC31SrkzNwlbm7jAeohKV5sN%25vqCr9yLRzQfYax7rErH1eJin8wsofoiZUMdM4FnClTg95Qp6PDakmSeWH0Stsd9sGcUfDL1XGEW9YJ0ldCfOB2zB5bAp7ToI5uKMTQmIJwF1GY6PDGmhSc63ZstXS0h3cUf8XNXGEHiTJ0lU0xOB2GS1bApFnyI5u9mIQC3zC1kzN9tKm7sDgubYwR9hDv34taSj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1Lbz71&&IMGT=P27&POV=BE020,PZM";
        const expectedData = [
            {
                type: 'FETCH_MODEL_CONFIGURATION_SUCCESS',
                modelConfiguration: expectedCarModel
            }
        ]
        const store = mockStore({modelConfiguration: {}});
        return store.dispatch(headerActions.fetchModelConfigurationImages(new CarModel(), url))
            .then(() => {
                expect(store.getActions()).toEqual(expectedData);
            });
    });


});