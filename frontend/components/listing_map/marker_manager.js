import listing_index_container from "../listing/listing_index_container";

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    debugger
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);

    let newListings = listings.filter(listing => !this.markers[listing.id]);
    newListings.forEach(listing => this.createMarkerFromListing(listing, this.handleClick))
  }
}

export default MarkerManager;