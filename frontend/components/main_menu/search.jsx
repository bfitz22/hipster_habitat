import React from 'react';
import SearchResults from './search_results';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchListings: [] }
        // this.sliceListings = this.sliceListings.bind(this);
    }

    // searchQuery(query) {
    //     let listings = this.props.listings.filter((listing) => {
    //         return listing.title.toLowerCase().includes(query.toLowerCase()) ||
    //         listing.description.toLowerCase().includes(query.toLowerCase())
    //     });
    //     this.setState({ searchListings: listings })
    // }

    handleSearch(e) {
        if (e.target.value === "") { 
            this.setState({ searchListings: [] })
            return 
        };
        let listings = this.props.listings.filter((listing) => {
            return listing.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            listing.description.toLowerCase().includes(e.target.value.toLowerCase()) ||
            listing.site.toLowerCase().includes(e.target.value.toLowerCase()) ||
            listing.location.toLowerCase().includes(e.target.value.toLowerCase())
        });
        this.setState({ searchListings: listings })
    }

    // sliceListings() {
    //     return this.state.searchListings.slice(0, 5);
    // }
    
    render() {
        return (
            <>
                <div className="search-input">
                    <i className="fas fa-search"></i>
                    <input id="search-text" className="search" type="text" placeholder="Try Yosemite, Napa, pets..."
                    onKeyUp={this.handleSearch.bind(this)}/>
                </div>
                <div className="results-container">
                    <div className="results">  
                        {this.state.searchListings.map(listing => <SearchResults key={listing.id} listing={listing}/>)}
                    </div>
                </div>
                <div className="spacer"></div>
            </>
        )
    }
}

export default Search; 