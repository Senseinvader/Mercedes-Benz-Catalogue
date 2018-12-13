import {API_KEY} from '../non-export-data/api-key';
import {getBodiesList} from '../model/body';
import {getBodiesQuery, getModelsQuery} from './apiQueries';
import {getModelSnippettsList} from "../model/carModelSnippet";

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

export const fetchModelsRequest = () => ({
    type: 'FETCH_MODELS_REQUEST'
});

export const fetchModelsSuccess = (modelList) => ({
    type: 'FETCH_MODELS_SUCCESS',
    modelList
});
export const fetchModelsFailure = (error) => ({
    type: 'FETCH_MODELS_FAILURE',
    error
});

export const fetchBodyList = () => {
    return dispatch => {
        dispatch(fetchBodiesRequest());
        return fetch(getBodiesQuery)
            .then(res => res.json())
            .then(body => dispatch(fetchBodiesSuccess(getBodiesList(body))))
            .catch(error => dispatch(fetchModelsFailure(error)));
    }
};

export const fetchModelList = (bodyId) => {
    return dispatch => {
        dispatch(fetchModelsRequest());
        return fetch(getModelsQuery(bodyId))
            .then(res => res.json())
            .then(body => dispatch(fetchModelsSuccess(getModelSnippettsList(body))))
            .catch(error => dispatch(fetchModelsFailure(error)));
    }
};