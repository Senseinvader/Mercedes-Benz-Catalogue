const initialState = {
    exterior: true,
};

const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IMAGE_CHANGED':
            return {...state, exterior: !state.exterior};
        default:
            return state;
    }
};

export default sliderReducer;