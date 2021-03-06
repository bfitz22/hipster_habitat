import React from 'react';
import MainMenuItem from './main_menu_item';
import classNames from 'classnames';
import SearchModal from '../modal/search_modal';

class MainMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = { arr: [
                {title: "Anytime", active: false, image: "far fa-calendar"},
                {title: "Campsites", site: "tent", active: false, image: "fas fa-campground"},
                {title: "Lodging", site: "cabin", active: false, image: "fas fa-home"},
                {title: "RVs", site: "rv", active: false, image: "fas fa-shuttle-van"}
            ], 
            filteredListings: this.props.listings,
        }
        this.sliceListings = this.sliceListings.bind(this);
        this.applyFilters = this.applyFilters.bind(this);
    }

    componentDidMount() {
        this.props.fetchListings();
    }

    toggle(index) {
        let arr = this.state.arr;
        arr[index].active = !arr[index].active;
        this.setState({ arr: arr });
        this.applyFilters();
        document.getElementById("search-text").focus();
    }

    applyFilters() {
        let listings = [];
        let count = 0;
        this.state.arr.forEach((el) => {
            if (el.site && el.active) {
                count += 1
                this.props.listings.forEach((listing) => {
                    if (el.site === listing.site) {
                        listings.push(listing)
                    }
                })
            }
        })
        if (count > 0) {
            this.setState({ filteredListings: listings })
        } else {
            listings = this.props.listings
            this.setState({ filteredListings: listings }) 
        }
    }

    handleSearch(e) {
        if (e.target.value === "") { 
            this.props.closeModal();
            return 
        };
        const filteredListings = this.state.filteredListings.length > 0 ? this.state.filteredListings : this.props.listings

        let listings = filteredListings.filter((listing) => {
            return listing.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            listing.description.toLowerCase().includes(e.target.value.toLowerCase()) ||
            listing.site.toLowerCase().includes(e.target.value.toLowerCase()) ||
            listing.location.toLowerCase().includes(e.target.value.toLowerCase())
        });
         
        for (let j = 0; j < filteredListings.length; j++) {
            let amenities = Object.entries(filteredListings[j].amenity);
            for (let i = 0; i < amenities.length; i++) {
                if (amenities[i][0].includes(e.target.value.toLowerCase()) && amenities[i][1] === true) {
                    if ( !listings.includes(filteredListings[j]) ) { listings.push(filteredListings[j]) }
                    break 
                }
            }
        }
        this.props.openSearchModal(listings);
    }

    sliceListings() {
        return this.props.listings.slice(0, 3);
    }

    render() {
        const options = this.state.arr.map((el, i) => 
            <button key={i} className={el.active ? "filtered" : "unfiltered"} 
            onClick={() => this.toggle(i)}><i className={classNames(el.image, "search-image")} ></i>
            {el.title}</button>
        )

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
            <div className="search-input">
                <i className="fas fa-search"></i>
                <input id="search-text" className="search" type="text" placeholder="Try Yosemite, Napa, pets..."
                onFocus={this.handleSearch.bind(this)} onKeyUp={this.handleSearch.bind(this)}/>
            </div>
            <div className="results-container">
                <SearchModal />
            </div>
            <div className="spacer"></div>
            <div className="filter-buttons">
                {options}
                <button className="search-button">Search</button>
            </div>
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