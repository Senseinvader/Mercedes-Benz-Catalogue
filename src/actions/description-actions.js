const setDescriptionId = (description, descriptionId) => ({
    type: 'SET_DESCRIPTION',
    description: description,
    descriptionId: descriptionId
});

export const incremetDescriptionID = () => (dispatch, getState) => {
    const descriptionList = getState().headerReducer.modelConfiguration.vehicleComponents;
    const listLength = descriptionList.length;
    let descriptionId = getState().descriptionReducer.descriptionId;
    descriptionId++;
    if (descriptionId >= listLength) {
        descriptionId = 0;
    }
    const description = descriptionList[descriptionId].name;
    dispatch(setDescriptionId(description, descriptionId));
};

export const decremetDescriptionID = () => (dispatch, getState) => {
    const descriptionList = getState().headerReducer.modelConfiguration.vehicleComponents;
    const listLength = descriptionList.length;
    let descriptionId = getState().descriptionReducer.descriptionId;
    descriptionId--;
    if (descriptionId <= 0) {
        descriptionId = listLength -1;
    }
    const description = descriptionList[descriptionId].name;
    dispatch(setDescriptionId(description, descriptionId));
};

