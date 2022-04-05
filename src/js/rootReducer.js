import { combineReducers } from 'redux';
import citiesReducer from './components/cities/citiesReducer';

const rootReducer = combineReducers({
    city: citiesReducer
});

export default rootReducer;
