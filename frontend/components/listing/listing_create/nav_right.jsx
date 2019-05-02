import React from 'react';

const NavRight = (props) => {
    if (props) {
        return (
            <div className="nav-arrow">
                <i className="fas fa-chevron-right"></i>
            </div>
        )
    } else {
        return (
            <div className="nav-arrow-grey">
                <i className="fas fa-chevron-right" aria-hidden="true"></i>
            </div>
        )
    } 
}

export default NavRight;