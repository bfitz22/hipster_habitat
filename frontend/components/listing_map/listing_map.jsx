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
        center: { lat: 40.880799, lng: -73.812353 },
        zoom: 10
      };
      
      this.map = new google.maps.Map(this.mapNode, mapOptions);
      this.MarkerManager = new MarkerManager(this.map, this.handleClick.bind(this));
      this.addListeners = this.addListeners.bind(this);

      this.MarkerManager.updateMarkers(this.props.listings);
      this.addListeners();
    }
    
    componentDidUpdate() {
      this.MarkerManager.updateMarkers(this.props.listings);
    }
    
    addListeners() {
      google.maps.event.addListener(this.map, 'idle', () => {
        const { north, south, east, west } = this.map.getBounds().toJSON();
        const bounds = {
          northEast: { lat: north, lng: east },
          southWest: { lat: south, lng: west } };
        this.props.updateFilter('bounds', bounds);
      });

      // google.maps.event.addListener(this.map, 'click', (listing) => {
      //   this.handleClick(listing);
      // });
    }
    // source: BenchBnB

    handleClick(listing) {
      this.props.history.push(`/listings/${listing.id}`);
    }
    
    render() {
        return (
            <div className="map" ref={ map => this.mapNode = map }></div>
        )
    }
}

export default withRouter(ListingMap); 