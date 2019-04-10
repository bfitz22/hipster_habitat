import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import filtersReducer from './filters_reducer';
import creationsReducer from './creations_reducer';

export default combineReducers({
    modal: modalReducer,
    filters: filtersReducer,
    creations: creationsReducer
});