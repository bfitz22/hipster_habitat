import React from 'react';

const PrevArrow = (props) => {
    return (
        <div className="prev-arrow" onClick={props.prevSlide}>
            <i className="fas fa-chevron-left" aria-hidden="true"></i>
        </div>
    );
}

export default PrevArrow;