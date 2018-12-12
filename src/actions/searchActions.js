import {getBodiesQuery} from "./apiQueries";

export const bodyListFetched = bodyList => ({
    type: "FETCH_BODY_LIST",
    bodyList: bodyList
});

export const fetchBodyList = () => {
    return dispatch => {
        return fetch(getBodiesQuery)
            .then(res => res.json())
            .then(body => dispatch(bodyListFetched(body)))
    }
};