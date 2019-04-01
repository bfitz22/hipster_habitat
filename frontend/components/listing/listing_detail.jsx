import React from 'react';

class ListingDetail extends React.Component {
    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId);

    }

    render() {
        const { listing } = this.props;

        if (!listing) return null; 

        let campfires; let pets; let toilets; let water; let showers; let wifi;

        if (listing.campfires_allowed === true) { 
            campfires = <li className="campfires"><img src="https://s3.amazonaws.com/hipsterhabitat-dev/campfire.png"/>  Campfires allowed</li>
        } else {
            campfires = <li className="no-campfires"><img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-fire.png" />  Campfires not allowed</li>
        }

        if (listing.pets_allowed === true) { 
            pets = <li className="pets"><img src="https://s3.amazonaws.com/hipsterhabitat-dev/dog.png" />  Pets allowed</li>
        } else {
            pets = <li className="no-pets"><img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-pets.png" />  Pets not allowed</li>
        }

        if (listing.is_toilets === true) { 
            toilets = <li className="toilets"><img src="https://s3.amazonaws.com/hipsterhabitat-dev/toilet+(1).png" />  Toilet available</li>
        } else {
            toilets = <li className="no-toilets"><img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-toileting+(1).png" />  No toilet</li>
        }

        if (listing.is_water === true) { 
            water = <li className="water"><img src="https://s3.amazonaws.com/hipsterhabitat-dev/water.png" />  Water available</li>
        } else {
            water = <li className="no-water"><img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-water.png" />  No water</li>
        }

        if (listing.is_showers === true) {
            showers = <li className="showers"><img src="https://s3.amazonaws.com/hipsterhabitat-dev/shower.png" />  Showers available</li>
        } else {
            showers = <li className="no-showers"><img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-shower.png" />  No showers</li>
        }

        if (listing.is_wifi === true) {
            wifi = <li className="wifi"><img src="https://s3.amazonaws.com/hipsterhabitat-dev/wifi.png" />  WiFi available</li>
        } else {
            wifi = <li className="no-wifi"><img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-wifi+(1).png" />  No WiFi</li>
        }

        return (
            // slideshow
            <div className="show-page">
                <div className="listing-show-item">
                    <div className="listing-show-title">
                        <h1>{listing.title}</h1>
                    </div>
                    <div className="listing-show-description">
                        {/* <span>{`user.${host_id}`}</span> */}
                        <p>{listing.description}</p>
                    </div>
                    <div className="info-boxes">
                        <div className="info">
                            <span>Campsite Area</span>
                            <li><img src="https://s3.amazonaws.com/hipsterhabitat-dev/camping-tent.png" />  Bring your own tents</li>
                            <li><img src="https://s3.amazonaws.com/hipsterhabitat-dev/placeholder+(1).png" />  15 sites</li>
                            <li><img src="https://s3.amazonaws.com/hipsterhabitat-dev/multiple-users-silhouette.png" />  Up to {listing.max_capacity} guests per site</li>
                            <li><img src="https://s3.amazonaws.com/hipsterhabitat-dev/wheelchair.png" />  Wheelchair access</li>
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
                <div className="booking-box"></div>
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
