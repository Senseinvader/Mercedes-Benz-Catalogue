import {API_KEY} from '../non-export-data/api-key';
import {getBodiesList} from '../model/body';
import {getBodiesQuery} from './apiQueries';

export const testAction = () => ({
    type: 'TEST_ACTION',
    bodyId: 1,
    bodyName: 'limousine'
});

export const fetchBodiesRequest = () => ({
    type: 'FETCH_BODIES_REQUEST'
});

export const fetchBodiesSuccess = (bodyList) => ({
    type: 'FETCH_BODIES_SUCCESS',
    bodyList
});
export const fetchBodiesFailure = (error) => ({
    type: 'FETCH_BODIES_FAILURE',
    error
});

export const fetchBodyList = () => {
    return dispatch => {
        dispatch(fetchBodiesRequest());
        return fetch(getBodiesQuery)
            .then(res => res.json())
            .then(body => dispatch(fetchBodiesSuccess(getBodiesList(body))))
            .catch(error => dispatch(fetchBodiesFailure(error)));
    }
};