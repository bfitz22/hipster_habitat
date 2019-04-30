import React from 'react';
import Slide from './slide';
import NextArrow from './next_arrow';
import PrevArrow from './prev_arrow';

export default class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: props.listing.listing_photos,
            currentIndex: 0,
            translateValue: 0
        }; 
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
    }

    prevSlide() {
        if (this.state.currentIndex === 0) {
            return null; 
        }

      if (this.browserWidth() + (-this.state.translateValue + 600) > this.sliderWidth()) {
        const translate = (-(this.sliderWidth() - this.browserWidth()));
        return this.setState({
          currentIndex: this.state.currentIndex + 1,
          translateValue: translate - 20
        });
      }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (600)
        }));
    }

    nextSlide() {
        if (this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0, 
                translateValue: 0
            });
        }

        if (this.browserWidth() + (-this.state.translateValue + 600) > this.sliderWidth()) {
          const translate = (-(this.sliderWidth() - this.browserWidth()));
          return this.setState({
            currentIndex: this.state.currentIndex + 1,
            translateValue: translate - 20
          });
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue - (600)
        }));
    }

    sliderWidth() {
        return document.querySelector('.slider-wrapper').clientWidth;
    }

    browserWidth() {
        return document.querySelector('body').clientWidth;
    }

    render() {
        return (
            <div className="slideshow">
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    {   
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} position={i * 615}/>
                        ))
                    }
                </div>
                <PrevArrow prevSlide={this.prevSlide}/>
                <NextArrow nextSlide={this.nextSlide}/>
            </div>
        );
    }
}
