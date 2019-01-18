export const initialState = {
    exterior: true,
    modal: false,
    imagesArray: []
};

const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IMAGE_CHANGED':
            return {...state, exterior: !state.exterior};
        case 'IMAGE_INCREASED':
            return {...state, modal: true};
        case 'IMAGE_DECREASED':
            return {...state, modal: false};
        default:
            return state;
    }
};

export default sliderReducer;