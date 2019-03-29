import React from 'react';

class Dropdown extends React.Component {
    render () {
        return ( 
            <div className="dropdown-menu">
                { 
                    this.props.showMenu 
                        ? (   
                            <div className="menu">
                                <button>Menu item</button>
                                <button>Menu item</button>
                                <button>Menu item</button>
                            </div> 
                        ) 
                        : ( 
                            null 
                        ) 
                }
            </div>
        );
    }
}

export default Dropdown; 