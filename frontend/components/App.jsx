import React from 'react';
import Nav from './nav';
import Footer from './footer';
import ListingIndexContainer from '../components/listing/listing_index_container';
import { Route } from 'react-router-dom';
import MainMenuContainer from './main_menu/main_menu_container';
import ListingDetailContainer from './listing/listing_detail_container';
import ListingForm from './listing/listing_create/listing_form';
import ListingLocationForm from './listing/listing_create/listing_location_form';
import ListingAmenitiesForm from './listing/listing_create/listing_amenities_form';
import ListingPriceForm from './listing/listing_create/listing_price_form';
import ListingActivitiesForm from './listing/listing_create/listing_activities_form';
import { AuthRoute } from '../util/route_utils';

const App = () => (
        <div className="body">     
            <Route exact path="/" component={Nav}/>
            <Route path="/discover" component={Nav}/>
            
                <AuthRoute path="/listing_create/" component={ListingForm}/> 
                <AuthRoute path="/listing_create/location" component={ListingLocationForm}/>
                <AuthRoute path="/listing_create/amenities" component={ListingAmenitiesForm}/>
                <AuthRoute path="/listing_create/activities" component={ListingActivitiesForm}/> 
                <AuthRoute path="/listing_create/price" component={ListingPriceForm}/>
                {/* <AuthRoute path="/listing_create/photos" component={ListingPhotosForm}/>  */}
            
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