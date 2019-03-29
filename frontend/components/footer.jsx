import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="icon-links">
                    <a href="https://github.com/bfitz22"><i className="fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/brian-fitzgerald-643a6757/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://www.hipcamp.com/"><i className="fas fa-campground"></i></a>
                </div>
                <img className="footer-img" src={window.footerURL} />
            </footer>
        )
    }
}

export default Footer; 