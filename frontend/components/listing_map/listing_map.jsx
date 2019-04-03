import React from 'react';
import MarkerManager from './marker_manager';
import { withRouter } from 'react-router-dom';

// const getCoordsObj = latLng => ({
//   lat: latLng.lat(),
//   lng: latLng.lng()
// });

class ListingMap extends React.Component {
    componentDidMount() {
      const mapOptions = {
        center: { lat: 40.753370, lng: -73.982881 },
        zoom: 9
      };
      
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map);
      this.MarkerManager.updateMarkers(this.props.listings);
      // const map = this.refs.map; 
      // this.map = new google.maps.Map(map, mapOptions);
      
    }
    
    
    
    
    render() {
        return (
            <div className="map" ref={ map => this.mapNode = map }></div>
        )
    }
}

export default ListingMap; 