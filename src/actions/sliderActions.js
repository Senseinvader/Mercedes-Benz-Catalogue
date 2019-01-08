import {fetchModelConfigurationSuccess} from "./header-actions";

export const changeImage = () => ({
    type: 'IMAGE_CHANGED'
});


export const fetchModelConfigurationImages = (carModel, url) => {
    return dispatch => {
        return fetch(url)
            .then(res => res.json())
            .then(body => {
                console.log('sfsdfjsdfjkhsdjkfhsdjkfhsdjkfhsdjkfhsdjkfhsdjkfhsdjkfhsdjkfhsdjkhfsjk'+ body.vehicle.INT1.url)
                carModel.interPhoto = body.vehicle.INT1.url;
                carModel.outerPhoto = body.vehicle.EXT020.url;
                console.log('Ważne: ' + carModel);
                dispatch(fetchModelConfigurationSuccess(carModel));
            })
    }
}