import { combineReducers } from 'redux';
import combinedReducer from './combinedReducer';


export default combineReducers({
    default: combinedReducer
});