import React from 'react';
import Slideshow from '../slideshow/slideshow';
import Booking_Box from './booking_box/booking_box';

class ListingDetail extends React.Component {
    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId);
    }
    
    render() {
        const { listing } = this.props;
        const { users } = this.props;
        let host;
        if (listing && users[listing.host_id]) {
            host = <ul className="host-info">
                    <li>{users[listing.host_id].first_name}</li>
                    <li>{users[listing.host_id].last_name}</li>
                </ul>
        } else {
            host = "loading"
        }

        if (!listing) return null; 

        let campfires; let pets; let toilets; let water; let showers; let wifi;

        if (listing.amenity.campfires_allowed) { 
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

        if (listing.amenity.pets_allowed) { 
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

        if (listing.amenity.is_toilets) { 
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

        if (listing.amenity.is_water) { 
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

        if (listing.amenity.is_showers) {
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

        if (listing.amenity.is_wifi) {
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

        const activities = [[listing.amenity.is_hiking, <i className="fas fa-hiking"></i>, "Hiking"],
            [listing.amenity.is_biking, <i className="fas fa-bicycle"></i>, "Biking"],
            [listing.amenity.is_swimming, <i className="fas fa-swimmer"></i>, "Swimming"],
            [listing.amenity.is_fishing, <i className="fas fa-fish"></i>, "Fishing"],
            [listing.amenity.is_horseback, <i className="fas fa-horse"></i>, "Horseback-Riding"],
            [listing.amenity.is_climbing, <i className="fas fa-mountain"></i>, "Climbing"]
            ]

        const available_activities = activities.map((activity, i) => {
            if (activity[0]) {
                return (
                <div key={i} className="activity-box">
                <div className="activity">
                    <div  className="activity-item">
                        {activity[1]}
                    </div>
                </div>
                <span className="activity-title">{activity[2]}</span>
                </div>
                )
            }
        })
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
                        <span className="host-id">Host: {host}</span>
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
              <Booking_Box listing={listing} />
            </div>
            <div className="activities-show">
                <div className="activities-containter">
                    <p className="activity-p">Activities</p>
                    <p className="activity-p2" >Offered on the Host's property or nearby.</p>
                    <div className="activity-box-container">
                        <div className="activity-boxes">{available_activities}</div>
                    </div>
                </div>
                <div className="fake-box"></div>
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
