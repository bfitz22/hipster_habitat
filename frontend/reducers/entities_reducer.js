import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';
import creationsReducer from './creations_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingsReducer,
    creations: creationsReducer
});

export default entitiesReducer;