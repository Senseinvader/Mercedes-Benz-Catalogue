const initialState = {
    descriptionId: 0,
    description: ''
};

const descriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DESCRIPTION':
            return {...state, description: action.description, descriptionId: action.descriptionId}
        default:
            return state;
    }

};

export default descriptionReducer;