import React from 'react';
import SearchResults from './search_results';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchListings: [] }
    }

    // searchQuery(query) {
    //     let listings = this.props.listings.filter((listing) => {
    //         return listing.title.toLowerCase().includes(query.toLowerCase()) ||
    //         listing.description.toLowerCase().includes(query.toLowerCase())
    //     });
    //     this.setState({ searchListings: listings })
    // }

    handleSearch(e) {
        let listings = this.props.listings.filter((listing) => {
            return listing.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            listing.description.toLowerCase().includes(e.target.value.toLowerCase()) ||
            listing.site.toLowerCase().includes(e.target.value.toLowerCase()) ||
            listing.location.toLowerCase().includes(e.target.value.toLowerCase())
        });
        this.setState({ searchListings: listings })
    }
    
    render() {
        return (
            <>
                <div className="search-input">
                    <i className="fas fa-search"></i>
                    <input className="search" type="text" placeholder="Try Yosemite, Napa, pets..."
                    onKeyUp={this.handleSearch.bind(this)}/>
                    {this.state.searchListings.map(listing => <SearchResults key={listing.id} listing={listing}/>)}
                </div>
                <div className="spacer"></div>
            </>
        )
    }
}

export default Search; 