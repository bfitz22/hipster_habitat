import React from 'react';
import Nav from './nav';
import Footer from './footer';
import ListingIndexContainer from '../components/listing/listing_index_container';
import { Route, Switch } from 'react-router-dom';
import MainMenuContainer from './main_menu/main_menu_container';
import ListingDetailContainer from './listing/listing_detail_container';
// import SearchBar from './search_bar';

// const names = [
//     <Autocomplete names={names} />
//     "pet friendly",
//     "campfires",
//     "water on site",
//     "toilets on site",
//     "showers on site",
//     "wifi available",
//     "large group",
//     "hiking",
//     "biking",
//     "swimming",
//     "fishing",
//     "horseback riding",
//     "climbing"
// ];

const App = () => (
        <div className="body">   
            <Nav />
            <Route exact path="/" component={MainMenuContainer} />
            <Route path="/discover" component={ListingIndexContainer}/>
            <Route path="/listings/:listingId" component={ListingDetailContainer}/>
            <div>
                <Route exact path="/" component={Footer} />
                <Route path="/listings/:listingId" component={Footer} />
            </div>
        </div>
);

export default App; 