import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import * as searchActions from "./searchActions";
import {getBodiesQuery} from "./apiQueries";


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    })

    it('creates FETCH_BODY_LIST when fetching bodies cars has been done', () => {
        const bodyList = ['body-1', 'body-2'];
        fetchMock.getOnce(getBodiesQuery, {
            body: bodyList,
            headers: { 'content-type': 'application/json' }

        });

        const expectedActions = [{
            type: 'FETCH_BODY_LIST',
            bodyList: ['body-1', 'body-2']
        }];

        const store = mockStore({ bodyList: []});


        return store.dispatch(searchActions.fetchBodyList())
            .then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        })
    });
});