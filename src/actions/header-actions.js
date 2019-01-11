import {getBodiesList} from '../model/body';
import {getBodiesQuery, getModelConfigurationQuery, getModelsQuery} from './apiQueries';
import {getModelSnippettsList} from "../model/carModelSnippet";
import {getCarModel} from "../model/carModel";

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

export const fetchModelConfigurationSuccess = (modelConfiguration, picturesUrl) => ({
    type: 'FETCH_MODEL_CONFIGURATION_SUCCESS',
    modelConfiguration,
    picturesUrl
});

export const fetchModelConfigurationFailure = (error) => ({
    type: 'FETCH_MODEL_CONFIGURATION_FAILURE',
    error
})

export const fetchModelConfigurationRequest = () => ({
    type: "FETCH_MODEL_CONFIGURATION_REQUEST"
});

export const fetchBodyList = () => {
    return dispatch => {
        dispatch(fetchBodiesRequest());
        return fetch(getBodiesQuery)
            .then(res => res.json())
            .then(body => dispatch(fetchBodiesSuccess(getBodiesList(body))))
            .catch(error => dispatch(fetchBodiesFailure('Error: Mistake in query', error)));
    }
};

export const fetchModelList = (bodyId) => {
    return dispatch => {
        dispatch(fetchModelsRequest());
        return fetch(getModelsQuery(bodyId))
            .then(res => res.json())
            .then(body => dispatch(fetchModelsSuccess(getModelSnippettsList(body))))
            .catch(error => dispatch(fetchModelsFailure('Error: Mistake in query', error)));
    }
};

export const fetchModelConfiguration = (modelId) => {
    return dispatch => {
        dispatch(fetchModelConfigurationRequest());
        return fetch(getModelConfigurationQuery(modelId))
            .then(res => res.json())
            .then(body => dispatch(fetchModelConfigurationSuccess(getCarModel(body), body._links.image)))
            // .then(body => dispatch(fetchModelConfigurationImages(getCarModel(body), body._links.image)))
            .catch(error => dispatch(fetchModelConfigurationFailure('Error: Mistake in query', error)));
    }
};