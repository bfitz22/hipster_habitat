import React from 'react';
import Slideshow from '../slideshow/slideshow';
import InfoBoxes from './sub_components/info_boxes';
import CalendarModal from '../modal/calendar_modal';

class ListingDetail extends React.Component {
    constructor(props) {
        super(props);
        this.listenToScroll = this.listenToScroll.bind(this);
    }

    componentDidMount() {
        this.props.fetchListing(this.props.match.params.listingId);
        document.addEventListener('scroll', () => {
            document.documentElement.dataset.scroll = window.scrollY;
        });
        document.addEventListener('scroll', this.listenToScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', () => {
            document.documentElement.dataset.scroll = window.scrollY;
        });
        document.removeEventListener('scroll', this.listenToScroll);
    }

    listenToScroll() {
        const box = document.getElementById("booking-box");
        if (document.documentElement.dataset.scroll >= 567) {
            box.classList.remove("booking-box");
            box.classList.add("fixed-box");
        } else {
            box.classList.remove("fixed-box");
            box.classList.add("booking-box");
        } 
    }
    
    render() {
        const { listing } = this.props;
        const { users } = this.props;
        let host;
        if (listing && users[listing.host_id]) {
            host = <ul className="host-info">
                    <li>{users[listing.host_id].first_name}</li>
                    <li>{users[listing.host_id].last_name}</li>
                </ul>
        } else {
            host = "loading"
        }

        if (!listing) return null; 

        const activities = [[listing.amenity.is_hiking, <i className="fas fa-hiking"></i>, "Hiking"],
            [listing.amenity.is_biking, <i className="fas fa-bicycle"></i>, "Biking"],
            [listing.amenity.is_swimming, <i className="fas fa-swimmer"></i>, "Swimming"],
            [listing.amenity.is_fishing, <i className="fas fa-fish"></i>, "Fishing"],
            [listing.amenity.is_horseback, <i className="fas fa-horse"></i>, "Horseback"],
            [listing.amenity.is_climbing, <i className="fas fa-mountain"></i>, "Climbing"]
            ]

        const available_activities = activities.map((activity, i) => {
            if (activity[0]) {
                return (
                <div key={i} className="activity-box">
                <div className="activity">
                    <div  className="activity-item">
                        {activity[1]}
                    </div>
                </div>
                <span className="activity-title">{activity[2]}</span>
                </div>
                )
            }
        })
        return (
            <div id="cake" className="whole-show-page">
                <Slideshow listing={listing}/>
                <div className="show-page">
                    <div className="listing-show-item">
                        <div className="listing-show-title">
                            <p>{listing.location}</p>
                            <br/>
                            <h1>{listing.title}</h1>
                        </div>
                        <div className="listing-show-description">
                            <span className="host-id">Host: {host}</span>
                            <p className="description">{listing.description}</p>
                        </div>
                        <InfoBoxes listing={listing}/>
                    </div>
                    <div className="fake-box"></div>
                </div>
                <div id="booking-box" className="booking-box"> 
                    <div className="booking-div-col">
                        <section className="price">${listing.price}</section>
                        <section className="per-night">per night</section>
                    </div>
                    <CalendarModal listing={listing}/>
                </div>
                <div className="activities-show">
                    <div className="activities-containter">
                        <p className="activity-p">Activities</p>
                        <p className="activity-p2" >Offered on the Host's property or nearby.</p>
                        <div className="activity-box-container">
                            <div className="activity-boxes">{available_activities}</div>
                        </div>
                    </div>
                    <div className="fake-box"></div>
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
