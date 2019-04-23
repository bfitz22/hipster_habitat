import { Link } from 'react-router-dom';
import React from 'react';

class ListingNav extends React.Component {
    render() {
        return (
            <div className="listing-nav">
                <div className="listing-nav-img">
                    <Link to="/"><img className="tent-nav" src={window.navURL}/></Link>
                </div>
                <div className="listing-nav-body"></div>
                <div className="listing-nav-right">
                    <Link className="save-and-exit" to="/">Save and exit</Link>
                </div>
            </div>
        )
    };
};

export default ListingNav;