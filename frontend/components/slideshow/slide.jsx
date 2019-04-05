import React from 'react';

const Slide = ({ image }) => {
    const style = {
        backgroundImage: `url(${image})`
    };

    return <div className="slide" style={style}></div>
}

export default Slide