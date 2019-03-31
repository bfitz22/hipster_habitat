import React from 'react';
import ListingIndexItem from './listing_index_item';
import ListingMap from '../listing_map/listing_map';

class ListingIndex extends React.Component {
    componentDidMount() {
        this.props.fetchListings();
    }

    render() {
        return (
            <section className="index">
                <ul>
                    {this.props.listings.map(listing => <ListingIndexItem key={listing.id} listing={listing}/>)}
                </ul>
                <ListingMap />
            </section>
        );
    }
}

export default ListingIndex;