import configureStore from 'redux-mock-store';
import * as headerActions from './header-actions';
import fetchMock from'fetch-mock';
import thunk from 'redux-thunk';
import {getBodiesQuery} from './apiQueries';

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
                    "self": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/bodies/13?apikey=43e86821-8de1-4f07-a9a9-7be3199a0bf3",
                    "models": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models?bodyId=13&apikey=43e86821-8de1-4f07-a9a9-7be3199a0bf3"
                }
            },
            {
                "bodyId": "15",
                "bodyName": "Shooting Brake",
                "_links": {
                    "self": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/bodies/15?apikey=43e86821-8de1-4f07-a9a9-7be3199a0bf3",
                    "models": "https://api.mercedes-benz.com/configurator/v1/markets/de_DE/models?bodyId=15&apikey=43e86821-8de1-4f07-a9a9-7be3199a0bf3"
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
});