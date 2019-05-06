import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingMap from '../listing_map/listing_map';
import MarkerManager from '../listing_map/marker_manager';
// import FilterForm from '../listing_map/filter_form';

class ListingIndex extends React.Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     listings: listings
    //   }
    // }

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
        this.props.fetchMapListings(this.props.filter);
    }

    componentDidUpdate() {
      this.addListeners();
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
          <div className="index">
            <section className="index-list">
                <div className="filter-bar">
                  
                </div>
                <div className="choices">
                    {this.props.listings.map(listing => <ListingIndexItem key={listing.id} listing={listing}/>)}
                </div>
            </section>
            <div className="map-container"><div className="map" ref={ map => this.mapNode = map }></div></div>
          </div>
        );
    }
}

{/* <ListingMap updateFilter={this.props.updateFilter} listings={this.props.listings}/> */}

export default ListingIndex;