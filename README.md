# Hipster Habitat README

![main logo](app/assets/images/screenshots/main-logo.png)

[Hipster Habitat](https://hipster-habitat.herokuapp.com/#/) is a clone of the very successful campsite booking web service, [Hipcamp](https://www.hipcamp.com/). The app is built to allow users to browse camping listings and book them for a designated amount of time. Users can also post listings if they have campsites of their own that they would like to host. There are many distinctions between listings including amenities and activities offered as well as location. All of these can be used as filters while searching for the listing that best meets the user's needs. 

## Install

```
$ git clone https://github.com/bfitz22/hipster_habitat.git
$ cd hipster_habitat
$ npm install
$ bundle install
```

Database creation and initialization:
```
$ bundle exec rails db:setup
```

Deployment instructions:
```
$ npm start
$ bundle exec rails server
```

Ruby version: 
```
ruby 2.5.1
```

Rails version: 
```
Rails 5.2.2.1
```

Services: 
* Google maps api

The most difficult features of this app to implement were the slideshow and the rendering of the google map api. The slideshow on a listing show page had a very interesting functionality. It originally had the slides continuing beyond the last slide, displaying a lot of empty space. I had to come up with a forumla to have the panning distance end at the edge of the last slide. Here's a code snippet of the solution:

```
nextSlide() {
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0, 
                translateValue: 0
            });
        }

        if (this.browserWidth() + (-this.state.translateValue + 600) > this.sliderWidth()) {
          const translate = (-(this.sliderWidth() - this.browserWidth()));
          return this.setState({
            currentIndex: this.state.currentIndex + 1,
            translateValue: translate - 20
          });
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue - (600)
        }));
    }
```

The google maps api was more straightforward but still difficult to implement due to the foreign syntax. Getting custom marker images on the map at the right size with regards to their geographical location and having them link to their corresponding listing show page was the most challenging aspect of this feature. Here's a code snippet of the solution: 

```
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
```
## Languages and tools
Ruby 
* Rails

Javascript
* React / Redux

HTML

CSS

