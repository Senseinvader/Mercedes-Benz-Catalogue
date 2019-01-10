import {combineReducers} from 'redux';
import headerReducer from './headerReducer';
import sliderReducer from './sliderReducer';
import descriptionReducer from "./descriptionReducer";

const rootReducer = combineReducers({
    headerReducer,
    sliderReducer,
    descriptionReducer
});

export default rootReducer;