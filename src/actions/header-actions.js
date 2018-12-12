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

export const fetchBodiesSuccess = (data) => ({
    type: 'FETCH_BODIES_SUCCESS',
    data
});
export const fetchBodiesFailure = (error) => ({
    type: 'FETCH_BODIES_FAILURE',
    error
});
export const fetchBodiesResults = () => (dispatch, getState) => {

    dispatch(fetchBodiesRequest());

    return fetch(getBodiesQuery)
        .then((response) => response.json())
        .then((data) => {
            const bodiesList = getBodiesList(data);
            dispatch(fetchBodiesSuccess(bodiesList));
        })
        .catch(error => dispatch(fetchBodiesFailure(error)));
};