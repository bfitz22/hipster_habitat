import React from 'react';
import { withRouter } from 'react-router-dom';

class ListingMap extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: { lat: 40.753370, lng: -73.982881 },
            zoom: 13
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }
    
    
    
    
    render() {
        return (
            <div ref={ map => this.mapNode = map }></div>
        )
    }
}

export default ListingMap; 