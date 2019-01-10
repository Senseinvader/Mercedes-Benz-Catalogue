import CarModel from "../model/carModel";

const initialState = {
    loading: false,
    error: null,
    bodyList: [{bodyId: '', bodyName: 'Loading...'}],
    modelList: [{modelId: '', modelName: 'Loading...'}],
    configurationLoaded: false,
    modelConfiguration: new CarModel(),
    picturesUrl: undefined,
    bodyLoaded: true,
    modelLoaded: true
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BODIES_REQUEST':
            return {...state, loading: true, modelConfiguration: new CarModel(), bodyLoaded: true};

        case 'FETCH_BODIES_SUCCESS':
            return {...state, loading: false, bodyList: action.bodyList, bodyLoaded: false};

        case 'FETCH_BODIES_FAILURE':
            return {...state, loading: false, error: action.error};

        case 'FETCH_MODELS_REQUEST':
            return{...state, loading: true, modelLoaded: true};

        case 'FETCH_MODELS_SUCCESS':
            return {...state, loading: false, modelList: action.modelList, modelLoaded: false};

        case 'FETCH_MODELS_FAILURE':
            return {...state, loading: false, error: action.error};

        case 'FETCH_MODEL_CONFIGURATION_REQUEST':
            return{...state, loading: true, configurationLoaded: false};

        case 'FETCH_MODEL_CONFIGURATION_SUCCESS':
            return {...state, loading: false, modelConfiguration: action.modelConfiguration, configurationLoaded: true, picturesUrl: action.picturesUrl};

        case 'FETCH_MODEL_CONFIGURATION_FAILURE':
            return {...state, loading: false, error: action.error};

        default:
            return state;
    }
};

export default headerReducer;