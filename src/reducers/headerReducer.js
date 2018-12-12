const initialState = {
    bodyList: [],
    modelList: []
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BODIES_REQUEST':
            return {...state, loading: true};

        case 'FETCH_BODIES_SUCCESS':
            return {...state, bodyList: action.bodyList, loading: false};

        case 'FETCH_MODEL_LIST':
            return {...state, modelList: action.modelList, loading: false};
        default:
            return state;
    }
};

export default headerReducer;