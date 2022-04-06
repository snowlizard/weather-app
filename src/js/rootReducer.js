import { combineReducers } from 'redux';
import citiesReducer from './components/cities/citiesReducer';
import { historyReducer } from './components/history/historyReducer';

const rootReducer = combineReducers({
    city: citiesReducer,
    history: historyReducer
});

export default rootReducer;
