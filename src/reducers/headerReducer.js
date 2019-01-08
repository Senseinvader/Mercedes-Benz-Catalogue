import CarModel from "../model/carModel";

const initialState = {
    loading: false,
    error: null,
    bodyList: [{bodyId: '', bodyName: 'Empty'}],
    modelList: [{modelId: '', modelName: 'Empty'}],
    modelConfiguration: new CarModel(),
    picturesUrl: undefined,
};

const headerReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'FETCH_BODIES_REQUEST':
            return {...state, loading: true, modelConfiguration: new CarModel()};

        case 'FETCH_BODIES_SUCCESS':
            return {...state, loading: false, bodyList: action.bodyList};

        case 'FETCH_BODIES_FAILURE':
            return {...state, loading: false, error: action.error};

        case 'FETCH_MODELS_REQUEST':
            return{...state, loading: true};

        case 'FETCH_MODELS_SUCCESS':
            return {...state, loading: false, modelList: action.modelList};

        case 'FETCH_MODELS_FAILURE':
            return {...state, loading: false, error: action.error};

        case 'FETCH_MODEL_CONFIGURATION_REQUEST':
            return{...state, loading: true};

        case 'FETCH_MODEL_CONFIGURATION_SUCCESS':
            return {...state, loading: false, modelConfiguration: action.modelConfiguration, picturesUrl: action.picturesUrl};

        case 'FETCH_MODEL_CONFIGURATION_FAILURE':
            return {...state, loading: false, error: action.error};

        default:
            return state;
    }
};

export default headerReducer;