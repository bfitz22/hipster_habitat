

class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick; 
  }

  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);

    let newListings = listings.filter(listing => !this.markers[listing.id]);
    newListings.forEach(listing => this.createMarker(listing));
  }

  createMarker(listing) {
    var icon = {
      url: window.markerURL,
      scaledSize: new google.maps.Size(65, 65)
    };
    const position = new google.maps.LatLng(listing.lat, listing.lng);
    const marker = new google.maps.Marker({
      position, 
      map: this.map,
      icon: icon,
      listingId: listing.id
    });
    marker.addListener('click', () => this.handleClick(listing));
    this.markers[marker.listingId] = marker; 
  }
}

export default MarkerManager;