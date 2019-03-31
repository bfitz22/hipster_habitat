import React from 'react';
import Nav from './nav';
import Footer from './footer';
import ListingIndexContainer from '../components/listing/listing_index_container';
import { Route, Switch } from 'react-router-dom';
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
        <body className="body">   
            <Nav />
            <Route path="/discover" component={ListingIndexContainer}/>
            <div>
                <Footer />
            </div>
        </body>
);

export default App; 