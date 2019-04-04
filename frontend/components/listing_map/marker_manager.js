

class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);

    let newListings = listings.filter(listing => !this.markers[listing.id]);
    newListings.forEach(listing => this.createMarker(listing));
  }

  createMarker(listing) {
    const position = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position, 
      map: this.map,
      listingId: listing.id
    });

    this.markers[marker.listingId] = marker; 
  }
}

export default MarkerManager;