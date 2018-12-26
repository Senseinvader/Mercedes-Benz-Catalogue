const initialState = {
    bodyList: ['Empty'],
    modelList: ['Empty']
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BODIES_REQUEST':
            return {...state};

        case 'FETCH_BODIES_SUCCESS':
            return {...state, bodyList: action.bodyList};

        case 'FETCH_BODIES_FAILURE':
            return {...state, error: action.error};

        case 'FETCH_MODEL_SUCCESS':
            return {...state, modelList: action.modelList};

        case 'FETCH_MODEL_REQUEST':
            return{...state};

        case 'FETCH_MODEL_FAILURE':
            return {...state, error: action.error};

        default:
            return state;
    }
};

export default headerReducer;