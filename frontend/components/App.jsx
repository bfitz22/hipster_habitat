import React from 'react';
import Nav from './nav';
import Footer from './footer';
import ListingIndexContainer from '../components/listing/listing_index_container';
import { Route, Switch } from 'react-router-dom';
import MainMenu from './main_menu/main_menu';
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
            <Route exact path="/" component={MainMenu} />
            <Route path="/discover" component={ListingIndexContainer}/>
            <div>
                <Footer />
            </div>
        </div>
);

export default App; 