import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <>
            <footer className="footer">
                <div className="footer-icons">
                    <section className="social-title">
                        Social
                    </section>
                    <br />
                    <div className="icon-links">
                        <a href="https://github.com/bfitz22"><i className="fab fa-github"> Github</i></a>
                        <a href="https://www.linkedin.com/in/brian-fitzgerald-643a6757/"><i className="fab fa-linkedin"> LinkedIn</i></a>
                        <a href="https://www.hipcamp.com/"><i className="fas fa-campground"></i> Hipcamp</a>
                    </div>
                </div>
                <div className="footer-body">
                    <section className="footer-title">
                        HipsterHabitat is everywhere you want to camp.
                    </section>
                    <br />
                    <br />
                    <section className="footer-text">
                        Discover unique experiences on ranches, nature preserves, farms, vineyards, and public
                        campgrounds across the U.S. Book tent camping, treehouses, cabins, yurts, primitive
                        backcountry sites, car camping, airstreams, tiny houses, RV camping, glamping tents
                        and more. 
                    </section>
                </div>
            </footer>
            <footer className="footer-bottom">
                <section className="bottom">
                    <p>Made in New York.</p>
                    <p className="terms">Terms of Service</p>
                </section>
            </footer>
            </>
        )
    }
}

export default Footer; 