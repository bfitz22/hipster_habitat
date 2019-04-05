import React from 'react';
import Slideshow from '../slideshow/slideshow';

class ListingDetail extends React.Component {
    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId);
    }
      
    render() {
        const { listing } = this.props;
        // const host = this.props.hosts[listing.hostId];
        if (!listing) return null; 

        let campfires; let pets; let toilets; let water; let showers; let wifi;

        if (listing.campfires_allowed) { 
            campfires = <div className="info-item">
                            <img src="https://s3.amazonaws.com/hipsterhabitat-dev/campfire.png" />
                            <li>Campfires allowed</li>
                        </div>
        } else { 
            campfires = <div className="itemless">
                            <img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-fire.png" />  
                            <li>Campfires not allowed</li>
                        </div>
        }

        if (listing.pets_allowed) { 
            pets = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/dog.png" />  
                        <li>Pets allowed</li>
                    </div>
        } else {
            pets = <div className="itemless">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-pets.png" />  
                        <li>Pets not allowed</li>
                    </div>
        }

        if (listing.is_toilets) { 
            toilets = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/toilet+(1).png" />  
                        <li>Toilet available</li>
                    </div>
        } else {
            toilets = <div className="itemless">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-toileting+(1).png" />  
                        <li>No toilet</li>
                    </div>
        }

        if (listing.is_water) { 
            water = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/water.png" />  
                        <li>Water available</li>
                    </div>
        } else {
            water = <div className="itemless">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-water.png" />  
                        <li>No water</li>
                    </div>
        }

        if (listing.is_showers) {
            showers = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/shower.png" />  
                        <li>Showers available</li>
                    </div>
        } else {
            showers = <div className="itemless">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-shower.png" />  
                        <li>No showers</li>
                    </div>
        }

        if (listing.is_wifi) {
            wifi = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/wifi.png" />  
                        <li>WiFi available</li>
                    </div>
        } else {
            wifi = <div className="itemless">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-wifi.png" />  
                        <li>No WiFi</li>
                    </div>
        }

        return (

            <div className="whole-show-page">
            <Slideshow listing={listing}/>
            <div className="show-page">
                <div className="listing-show-item">
                    <div className="listing-show-title">
                        <p>{listing.location}</p>
                        <br/>
                        <h1>{listing.title}</h1>
                    </div>
                    <div className="listing-show-description">
                        <span className="host-id">Host: </span>
                        <p className="description">{listing.description}</p>
                    </div>
                    <div className="info-boxes">
                        <div className="info">
                            <span>Campsite Area</span>
                            <div className="info-item">
                                <img src="https://s3.amazonaws.com/hipsterhabitat-dev/camping-tent.png" />
                                <li>Bring your own tents</li>
                            </div>
                            <div className="info-item">
                                <img src="https://s3.amazonaws.com/hipsterhabitat-dev/placeholder+(1).png" />
                                <li>15 sites</li>
                            </div>
                            <div className="info-item">
                                <img src="https://s3.amazonaws.com/hipsterhabitat-dev/multiple-users-silhouette.png" />
                                <li>Up to {listing.max_capacity} guests per site</li>
                            </div>
                            <div className="info-item">
                                <img src="https://s3.amazonaws.com/hipsterhabitat-dev/wheelchair.png" />
                                <li>Wheelchair access</li>
                            </div>
                        </div>
                        <div className="info">
                            <span>Essentials</span>
                            {campfires}
                            {pets}
                            {toilets}
                        </div>
                        <div className="info">
                            <span>Amenities</span>
                            {water}
                            {showers}
                            {wifi}
                        </div>
                    </div>
                </div>
                <div className="fake-box"></div>
            </div>
            <div id="anchor">
              <div className="booking-box">
                <div className="booking-div-col">
                  <section className="price">${listing.price}</section>
                  <section className="per-night">per night</section>
                </div>
                <div className="booking-div">
                  <div className="check-in-div">
                    <section className="check-bold">Check in</section>
                    <section>Fri, Apr 5th</section>
                  </div>
                  <div className="check-in-div">
                    <section className="check-bold">Check out</section>
                    <section>Sun, Apr 7th</section>
                  </div>
                  <div className="check-in-div">
                    <section className="check-bold">Guests</section>
                    <section>Max: {listing.max_capacity}</section>
                  </div>
                </div>
                <div className="booking-div-space">
                  <section className="base-price">Base price x 2 nights</section>
                  <br/>
                  <section>{`${listing.price}` * 2}</section>
                </div>
                <div className="booking-div">
                  <button className="booking-button">Request to book</button>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default ListingDetail; 

// tent - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// people - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// location - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// wheelchair - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// no campfire - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// campfire - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// no pets - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// pets - <div>Icons made by <a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// no toilets - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// toilets - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// no water - <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// water - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// no shower - <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// shower - <div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// no wifi - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// wifi - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
