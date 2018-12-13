import {combineReducers} from 'redux';
import headerReducer from './headerReducer';
import sliderReducer from './sliderReducer';

const rootReducer = combineReducers({
    headerReducer,
    sliderReducer,
});

export default rootReducer;