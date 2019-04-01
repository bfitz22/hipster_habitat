import React from 'react';

const MainMenu = () => {
    return (
        <>
        <div className="home">
                <h2 className="home-title">Everywhere you want to camp.</h2>
            <div className="subtext">
                Book unique camping experiences on over 
                <span> 300,000 </span>
                campsites, ranches, vineyards, public parks, 
                and more.
            </div>
        </div>
        {/* Search Bar */}
        <div className="main-menu">
            <h1 className="main-menu-title">Discover camping...</h1>
            <div className="menu-items">
                <div>
                    <a href="/#/discover" className="option-links">
                        <img className="camp-pic" src="https://s3.amazonaws.com/hipsterhabitat-dev/pet_camping.jpg" />
                        <p className="option-title">Pet friendly camping</p>
                        <p className="option-location">Best options near me</p>
                    </a>
                </div> 
                <div>
                    <a href="/#/discover" className="option-links">
                        <img className="camp-pic" src="https://s3.amazonaws.com/hipsterhabitat-dev/wifi_camping.jpg" />
                        <p className="option-title">Glamping with WiFi</p>
                        <p className="option-location">Best options near me</p>
                    </a>
                </div> 
                <div>
                    <a href="/#/discover" className="option-links">
                        <img className="camp-pic" src="https://s3.amazonaws.com/hipsterhabitat-dev/cheap_camping.jpg" />
                        <p className="option-title">Low Price Sites</p>
                        <p className="option-location">Best options near me</p>
                    </a>
                </div> 
                <div>
                    <a href="/#/listings/1" className="option-links">
                    <img className="camp-pic" src="https://s3.amazonaws.com/hipsterhabitat-dev/camp_hope.jpg" />
                        <p className="option-title">Camp Hope</p>
                        <p className="option-location"> New York</p>
                    </a>
                </div> 
                <div>
                    <a href="/#/listings/2" className="option-links">
                        <img className="camp-pic" src="https://s3.amazonaws.com/hipsterhabitat-dev/camp_firewood.jpg"/>
                        <p className="option-title">Camp Firewood</p>
                        <p className="option-location"> New Jersey</p>
                    </a>
                </div> 
                <div>
                    <a href="/#/listings/3" className="option-links">
                        <img className="camp-pic" src="https://s3.amazonaws.com/hipsterhabitat-dev/camp_crystal_lake.jpg" />
                        <p className="option-title">Camp Crystal Lake</p>
                        <p className="option-location"> Pennsylvania</p>
                    </a>
                </div> 
            </div>
        </div>
        </>
    );
}

export default MainMenu;