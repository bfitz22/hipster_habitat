import React from 'react';
import Nav from './nav';
import Footer from './footer';
import ListingIndexContainer from '../components/listing/listing_index_container';
import { Route } from 'react-router-dom';
// import Autocomplete from './autocomplete';

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
            <Route path="" component={ListingIndexContainer}/>
            <div>
                <Footer />
            </div>
        </body>
);

export default App; 