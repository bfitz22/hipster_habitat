import React from 'react';
import Nav from './nav';
import Footer from './footer';
import ListingIndexContainer from '../components/listing/listing_index_container';
import { Route } from 'react-router-dom';
import MainMenuContainer from './main_menu/main_menu_container';
import ListingDetailContainer from './listing/listing_detail_container';
import ListingForm from './listing/listing_create/listing_form';

const App = () => (
        <div className="body"> 
            <Route path="/listingcreate" component={ListingForm}/>     
            <Route exact path="/" component={Nav}/>
            <Route path="/discover" component={Nav}/>
            <Route path="/listings/:listingId" component={Nav}/>
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