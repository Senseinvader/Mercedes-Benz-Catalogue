const initialState = {
    bodyList: [],
    modelList: []
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BODY_LIST':
            return {...state, bodyList: action.bodyList};
        default:
            return state;
    }
};

export default searchReducer;