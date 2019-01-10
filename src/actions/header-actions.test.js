import configureStore from 'redux-mock-store';
import * as headerActions from './header-actions';
import fetchMock from'fetch-mock';
import thunk from 'redux-thunk';
import {getBodiesQuery, getModelConfigurationQuery, getModelsQuery} from './apiQueries';
import {
    bodyListExample,
    carModel,
    carModelImages,
    expectedDataOfModelConfiguration, linkInterPhoto, linkOuterPhoto,
    modelConfigurationHeader, modelListExample
} from "./body-jsons";

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('Header actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });

    it('creates FETCH_BODY_LIST when fetching bodies cars has been done', () => {
        fetchMock.getOnce(getBodiesQuery, {
            body: bodyListExample,
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

        fetchMock.getOnce(getModelsQuery('1'), {
            body: modelListExample,
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
        expectedCarModel.interPhoto = linkInterPhoto;
        expectedCarModel.outerPhoto = linkOuterPhoto;
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

    it('has error when fetchBodyList has not query', () => {
        fetchMock.getOnce(getBodiesQuery, {

        });

        const expectedData = [
            {'type': 'FETCH_BODIES_REQUEST'},
            {'type': 'FETCH_BODIES_FAILURE',
                'error': 'Error: Mistake in query'
            }
        ]

        const store = mockStore({ error: ''});

        return store.dispatch(headerActions.fetchBodyList('', 'error'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedData);
            });
    });

    it('has error when fetchModelList has not query', () => {
        fetchMock.getOnce(getModelsQuery(''), {

        });

        const expectedData = [
            {'type': 'FETCH_MODELS_REQUEST'},
            {'type': 'FETCH_MODELS_FAILURE',
                'error': 'Error: Mistake in query'
            }
        ]

        const store = mockStore({ error: ''});

        return store.dispatch(headerActions.fetchModelList('', 'error'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedData);
            });
    });


});