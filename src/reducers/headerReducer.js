const initialState = {
    bodyList: [],
    modelList: []
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BODY_LIST':
            return {...state, bodyList: action.bodyList};

        case 'FETCH_MODEL_LIST':
            return {...state, modelList: action.modelList};
        default:
            return state;
    }
};

export default headerReducer;