import React from 'react';
import Slideshow from '../slideshow/slideshow';

class ListingDetail extends React.Component {
    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId);
        document.addEventListener('scroll', (e) => {
          return this.dragger();
        }
      
    

    constructor(props) {
      super(props);
      this.getDistance = this.getDistance.bind(this);
      this.getPosition = this.getPosition.bind(this);
    }

    getPosition(ele) {
      var xPos = 0, yPos = 0;

      while(ele) {
        xPos += (ele.offsetLeft - ele.scrollLeft + ele.clientLeft);
        yPos += (ele.offsetTop - ele.scrollTop + ele.clientTop);
        ele = ele.offsetParent; 
      }

      return { x: xPos, y: yPos };
    }

    getDistance(a, b) {
      const aPosition = this.getPosition(a);
      const bPosition = this.getPosition(b);

      return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);
    }

    dragger() {
      // const $anchor = document.getElementById("anchor");
      // let $scroller = document.getElementById("scroller");
      let sticky = {
        zIndex: "1",
        border: "2px solid rgb(235, 235, 235)",
        height: "320px",
        width: "319px",
        position: "fixed",
        top: "0px",
        right: "400px",
        backgroundColor: "white",
      };
      let normal = {
        zIndex: "1",
        border: "2px solid rgb(235, 235, 235)",
        height: "320px",
        width: "319px",
        position: "absolute",
        top: "525px",
        right: "400px",
        backgroundColor: "white",
      };


      const move = () => {
        let st = $(window).scrollTop();
        // let ot = $anchor.offset().top;
        let ot = this.getDistance(st, document.getElementById("anchor"));
        if (st > ot) {
          return <div id="scroller" style={sticky}></div>
        } else {
          return <div id="scroller" style={normal}></div>
        }
      };
      // $(window).scroll(move);
    }

    render() {
        const { listing } = this.props;

        if (!listing) return null; 

        let campfires; let pets; let toilets; let water; let showers; let wifi;

        if (listing.campfires_allowed === true) { 
            campfires = <div className="info-item">
                            <img src="https://s3.amazonaws.com/hipsterhabitat-dev/campfire.png" />
                            <li>Campfires allowed</li>
                        </div>
        } else { 
            campfires = <div className="info-item">
                            <img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-fire.png" />  
                            <li className="no-item">Campfires not allowed</li>
                        </div>
        }

        if (listing.pets_allowed === true) { 
            pets = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/dog.png" />  
                        <li>Pets allowed</li>
                    </div>
        } else {
            pets = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-pets.png" />  
                        <li className="no-item">Pets not allowed</li>
                    </div>
        }

        if (listing.is_toilets === true) { 
            toilets = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/toilet+(1).png" />  
                        <li>Toilet available</li>
                    </div>
        } else {
            toilets = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-toileting+(1).png" />  
                        <li className="no-item">No toilet</li>
                    </div>
        }

        if (listing.is_water === true) { 
            water = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/water.png" />  
                        <li>Water available</li>
                    </div>
        } else {
            water = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-water.png" />  
                        <li className="no-item">No water</li>
                    </div>
        }

        if (listing.is_showers === true) {
            showers = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/shower.png" />  
                        <li>Showers available</li>
                    </div>
        } else {
            showers = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-shower.png" />  
                        <li className="no-item">No showers</li>
                    </div>
        }

        if (listing.is_wifi === true) {
            wifi = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/wifi.png" />  
                        <li>WiFi available</li>
                    </div>
        } else {
            wifi = <div className="info-item">
                        <img src="https://s3.amazonaws.com/hipsterhabitat-dev/no-wifi.png" />  
                        <li className="no-item">No WiFi</li>
                    </div>
        }

        return (

            <div className="whole-show-page">
            <Slideshow listing={listing}/>
            <div className="show-page">
                <div className="listing-show-item">
                    <div className="listing-show-title">
                        <h1>{listing.title}</h1>
                    </div>
                    <div className="listing-show-description">
                        {/* <span>{`user.${host_id}`}</span> */}
                        <p>{listing.description}</p>
                    </div>
                    <div className="info-boxes">
                        <div className="info">
                            <span>Campsite Area</span>
                            <div className="info-item">
                                <img src="https://s3.amazonaws.com/hipsterhabitat-dev/camping-tent.png" />
                                <li>Bring your own tents</li>
                            </div>
                            <div className="info-item">
                                <img src="https://s3.amazonaws.com/hipsterhabitat-dev/placeholder+(1).png" />
                                <li>15 sites</li>
                            </div>
                            <div className="info-item">
                                <img src="https://s3.amazonaws.com/hipsterhabitat-dev/multiple-users-silhouette.png" />
                                <li>Up to {listing.max_capacity} guests per site</li>
                            </div>
                            <div className="info-item">
                                <img src="https://s3.amazonaws.com/hipsterhabitat-dev/wheelchair.png" />
                                <li>Wheelchair access</li>
                            </div>
                        </div>
                        <div className="info">
                            <span>Essentials</span>
                            {campfires}
                            {pets}
                            {toilets}
                        </div>
                        <div className="info">
                            <span>Amenities</span>
                            {water}
                            {showers}
                            {wifi}
                        </div>
                    </div>
                </div>
                <div className="fake-box"></div>
            </div>
            <div id="anchor">
              {this.dragger.move()}
            </div>
          </div>
        )
    }
}

export default ListingDetail; 

// tent - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// people - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// location - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// wheelchair - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// no campfire - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// campfire - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// no pets - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// pets - <div>Icons made by <a href="https://www.flaticon.com/authors/zlatko-najdenovski" title="Zlatko Najdenovski">Zlatko Najdenovski</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// no toilets - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// toilets - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// no water - <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// water - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// no shower - <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// shower - <div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// no wifi - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
// wifi - <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
