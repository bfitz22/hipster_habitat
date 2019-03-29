import React from 'react';
import Nav from './nav';
import Footer from './footer';
import Autocomplete from './autocomplete';

const names = [
    "pet friendly",
    "campfires",
    "water on site",
    "toilets on site",
    "showers on site",
    "wifi available",
    "large group",
    "hiking",
    "biking",
    "swimming",
    "fishing",
    "horseback riding",
    "climbing"
];

const App = () => (
    <body className="body">
        <Nav />
        <Autocomplete names={names} />
        <Footer />
    </body>
);

export default App; 