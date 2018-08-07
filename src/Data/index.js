import {combineReducers} from 'redux';
import reducerFigures from './reducerFigures';

const allData = combineReducers({
    figures: reducerFigures
});

export default allData;