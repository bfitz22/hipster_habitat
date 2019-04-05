import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingMap from '../listing_map/listing_map';
// import FilterForm from '../listing_map/filter_form';

class ListingIndex extends React.Component {
    componentDidMount() {
        this.props.fetchListings();
    }

    // componentDidUpdate(nextProps) {
    //   this.state = nextProps; 
    // }

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
            <div className="map-container"><ListingMap listings={this.props.listings}/></div>
          </div>
        );
    }
}
// updateBounds = { this.props.updateBounds }

export default ListingIndex;