import React from 'react';
import MainMenuItem from './main_menu_item';
import Search from './search';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.sliceListings = this.sliceListings.bind(this);
    }

    componentDidMount() {
        this.props.fetchListings();
    }

    sliceListings() {
      return this.props.listings.slice(0, 3);
    }

    searchIdeas(query) {
        let listings = this.props.listings.filter((listing) => {
            return listing.title.includes(query) ||
            listing.description.includes(query)
        });
        console.log(listings)
    }

    render() {
        return (
        <div className="splash">
        <div className="home">
            <div className="home-title">Find yourself outside.</div>
            <div className="subtext">
                Book unique camping experiences on over 
                <span> 300,000 </span>
                campsites, ranches, vineyards, public parks, 
                and more.
            </div>
        </div>
        <div className="search-bar-container">
          <div className="search-bar">
            <Search searchIdeas={this.searchIdeas.bind(this)}/>
          </div>
        </div>
        <div className="main-menu">
            <h1 className="main-menu-title">Discover camping...</h1>
            <div className="menu-items">
                <div>
                    <a href="/#/discover" className="option-links">
                        <img className="camp-pic" src="https://s3.amazonaws.com/hipsterhabitat-dev/pet_camping.jpg" />
                        <p className="option-title">Pet friendly camping</p>
                        <p className="option-location">Best options near me</p>
                    </a>
                </div> 
                <div>
                    <a href="/#/discover" className="option-links">
                        <img className="camp-pic" src="https://s3.amazonaws.com/hipsterhabitat-dev/wifi_camping.jpg" />
                        <p className="option-title">Glamping with WiFi</p>
                        <p className="option-location">Best options near me</p>
                    </a>
                </div> 
                <div>
                    <a href="/#/discover" className="option-links">
                        <img className="camp-pic" src="https://s3.amazonaws.com/hipsterhabitat-dev/cheap_camping.jpg" />
                        <p className="option-title">Low Price Sites</p>
                        <p className="option-location">Best options near me</p>
                    </a>
                </div> 
                {this.sliceListings().map(listing => <MainMenuItem key={listing.id} listing={listing}/>)}
            </div>
        </div>
        </div>
    );
    }
}

export default MainMenu;