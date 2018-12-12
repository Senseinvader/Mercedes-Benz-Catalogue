import {combineReducers} from 'redux';
import headerReducer from './headerReducer';

const rootReducer = combineReducers({
    headerReducer,
});

export default rootReducer;