import React from 'react';

const NavLeft = (props) => {
    if (props) {
        return (
            <div className="nav-arrow">
                <i className="fas fa-chevron-left"></i>
            </div>
        )
    } else {
        return (
            <div className="nav-arrow-grey">
                <i className="fas fa-chevron-left" aria-hidden="true"></i>
            </div>
        )
    } 
}

export default NavLeft;