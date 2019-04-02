import React from 'react';
import Slide from './slide';
import NextArrow from './next_arrow';
import PrevArrow from './prev_arrow';

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="slideshow">
                <Slide />

                <PrevArrow />
                <NextArrow />
            </div>
        );
    }
}