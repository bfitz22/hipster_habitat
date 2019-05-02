import React from 'react';

const NextArrow = (props) => {
    return (
        <div className="next-arrow" onClick={props.nextSlide}>
            <i className="fas fa-chevron-right"></i>
        </div>
    );
}

export default NextArrow;