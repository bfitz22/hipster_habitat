import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingMap from '../listing_map/listing_map';

class ListingIndex extends React.Component {
    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        return (
          <div className="index">
            <section className="index-list">
                <div className="filter-bar">
                  Filter
                </div>
                <div className="choices">
                    {this.props.listings.map(listing => <ListingIndexItem key={listing.id} listing={listing}/>)}
                </div>
            </section>
            <div className="listing-map">Map<ListingMap /></div>
          </div>
        );
    }
}

export default ListingIndex;