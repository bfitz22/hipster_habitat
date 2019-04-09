import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { selectAllListings } from './reducers/selectors';
import { fetchListings, fetchListing, fetchMapListings } from './actions/listing_actions';
import { updateFilter } from './actions/filter_actions';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.updateFilter = updateFilter;
    window.fetchMapListings = fetchMapListings;
    window.fetchListing = fetchListing;
    window.fetchListings = fetchListings;
    window.selector = selectAllListings; 
    window.getState = store.getState;
    window.dispatch = store.dispatch; 
    ReactDOM.render(<Root store={store} />, root);
}); 


