import React from 'react';
import BigCalendar from '../../calendar';

const Booking_Box = (props) => {
    return(
        <div className="booking-box">
            <div className="booking-div-col">
                <section className="price">${props.listing.price}</section>
                <section className="per-night">per night</section>
            </div>
            <div className="booking-div">
                <div className="check-in-div">
                <section className="check-bold">Check in</section>
                <section>{props.listing.check_in}</section>
                </div>
                <div className="check-in-div">
                <section className="check-bold">Check out</section>
                <section>{props.listing.check_out}</section>
                </div>
                <div className="guests-div">
                <section className="check-bold">Guests</section>
                <section>Max: {props.listing.max_capacity}</section>
                </div>
            </div>
            <div className="booking-div-space">
                <section className="base-price">Base price x 2 nights</section>
                <br/>
                <section>${`${props.listing.price}` * 2}</section>
            </div>
            <div className="booking-div">
                <button className="booking-button">Request to book</button>
            </div>
            <BigCalendar />
        </div>
    )
}

export default Booking_Box;