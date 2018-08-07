import {combineReducers} from 'redux';
import reducerFigures from './reducerFigures';
import figuresInKart from './figuresInKart';

const allData = combineReducers({
    figures: reducerFigures,
    inKart: figuresInKart
});

export default allData;