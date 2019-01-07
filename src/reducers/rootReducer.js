import {combineReducers} from "redux";
import sliderReducer from "./sliderReducer";
import headerReducer from "./headerReducer";

const rootReducer = combineReducers({
        headerReducer,
        sliderReducer
    });

export default rootReducer;