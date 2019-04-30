import React from 'react';

const Slide = ({ image, position }) => {
    const style = {
        backgroundImage: `url(${image})`,
        left: position
    };

    return <div className="slide" style={style}></div>
}

export default Slide