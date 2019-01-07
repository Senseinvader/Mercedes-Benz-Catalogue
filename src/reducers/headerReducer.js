const initialState = {
    loading: false,
    error: null,
    bodyList: ['Empty'],
    modelList: ['Empty']
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BODIES_REQUEST':
            return {...state, loading: true};

        case 'FETCH_BODIES_SUCCESS':
            return {...state, loading: false, bodyList: action.bodyList};

        case 'FETCH_BODIES_FAILURE':
            return {...state, loading: false, error: action.error};

        case 'FETCH_MODEL_REQUEST':
            return{...state, loading: true};

        case 'FETCH_MODEL_SUCCESS':
            return {...state, loading: false, modelList: action.modelList};

        case 'FETCH_MODEL_FAILURE':
            return {...state, loading: false, error: action.error};

        default:
            return state;
    }
};

export default headerReducer;