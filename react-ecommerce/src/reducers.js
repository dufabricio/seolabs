import {combineReducers} from 'redux';
import showProductReducer from './components/ShowProduct/reducers';

const rootReducer = combineReducers({showProductReducer});

export default rootReducer;