import React from 'react';

const InfoBoxes = (props) => {
    let campfires; let pets; let toilets; let water; let showers; let wifi;

    if (props.listing.amenity.campfires_allowed) { 
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

    if (props.listing.amenity.pets_allowed) { 
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

    if (props.listing.amenity.is_toilets) { 
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

    if (props.listing.amenity.is_water) { 
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

    if (props.listing.amenity.is_showers) {
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

    if (props.listing.amenity.is_wifi) {
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
                    <li>Up to {props.listing.max_capacity} guests per site</li>
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
    )
}

export default InfoBoxes;