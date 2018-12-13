import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer'


const store = createStore(rootReducer);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

