import React from 'react';

const MainMenu = () => {
    return (
        <div className="main-menu">
            <h1 className="main-menu-title">Discover camping...</h1>
            <div className="menu-items">
                <div>
                    <a href="/" className="option-links">
                        <img className="camp-hope" src={window.campHopeURL} />
                        <p className="option-title">Pet friendly camping</p>
                        <p className="option-location">Best options near me</p>
                    </a>
                </div> 
                <div>
                    <a href="/" className="option-links">
                        <img className="camp-hope" src={window.campHopeURL} />
                        <p className="option-title">Glamping with WiFi</p>
                        <p className="option-location">Best options near me</p>
                    </a>
                </div> 
                <div>
                    <a href="/" className="option-links">
                        <img className="camp-hope" src={window.campHopeURL} />
                        <p className="option-title">Low Price Sites</p>
                        <p className="option-location">Best options near me</p>
                    </a>
                </div> 
                <div>
                    <a href="/api/listings/1" className="option-links">
                        <img className="camp-hope" src={window.campHopeURL} />
                        <p className="option-title">Camp Hope</p>
                        <p className="option-location"> New York</p>
                    </a>
                </div> 
                <div>
                    <a href="/api/listings/2" className="option-links">
                        <img className="camp-firewood" src={window.campFirewoodURL} />
                        <p className="option-title">Camp Firewood</p>
                        <p className="option-location"> New Jersey</p>
                    </a>
                </div> 
                <div>
                    <a href="/api/listings/3" className="option-links">
                        <img className="camp-crystal-lake" src={window.campCrystalLakeURL} />
                        <p className="option-title">Camp Crystal Lake</p>
                        <p className="option-location"> Pennsylvania</p>
                    </a>
                </div> 
            </div>
        </div>
    );
}

export default MainMenu;