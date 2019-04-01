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
                        <a href="https://github.com/bfitz22"><i className="fab fa-github"></i> Github</a>
                        <a href="https://www.linkedin.com/in/brian-fitzgerald-643a6757/"><i className="fab fa-linkedin"></i> LinkedIn</a>
                        <a href="https://www.hipcamp.com/"><i className="fas fa-campground"></i> Hipcamp</a>
                    </div>
                </div>
                <div className="footer-icons">
                    <section className="about-title">
                        About
                    </section>
                        <br />
                    <div className="icon-links">
                        <a href="/">Journal</a>
                        <a href="/">Our Story</a>
                        <a href="/">Careers</a>
                    </div>
                </div>
                <div className="footer-icons">
                    <section className="social-title">
                        Browse
                    </section>
                        <br />
                    <div className="icon-links">
                        <a href="/">Gift Cards</a>
                        <a href="/">Help</a>
                        <a href="/">Contact</a>
                    </div>
                </div>
                <div className="footer-body">
                    <div className="footer-title-div">
                        <section className="footer-title">
                            HipsterHabitat is everywhere you want to camp.
                        </section>
                    </div>
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