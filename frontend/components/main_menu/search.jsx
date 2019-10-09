import React from 'react';
import classNames from 'classnames';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { "arr": [
            {title: "Anytime", active: false, image: "far fa-calendar"},
            {title: "Campsites", active: false, image: "fas fa-campground"},
            {title: "Lodging", active: false, image: "fas fa-home"},
            {title: "RVs", active: false, image: "fas fa-shuttle-van"}
        ]}
    }

    toggle(index) {
        let arr = this.state.arr;
        arr[index].active = !arr[index].active;
        this.setState({ arr: arr });
    }

    handleSearch(e) {
        this.props.searchIdeas(e.target.value)
    }
    
    render() {
        const options = this.state.arr.map((el, i) => 
            <button key={i} className={el.active ? "filtered" : "unfiltered"} 
            onClick={() => this.toggle(i)}><i className={classNames(el.image, "search-image")} ></i>
            {el.title}</button>
        )

        return (
            <>
                <div className="search-input">
                    <i className="fas fa-search"></i>
                    <input className="search" type="text" placeholder="Try Yosemite, Napa, pets..."
                    onKeyUp={this.handleSearch.bind(this)}/>
                </div>
                <div className="spacer"></div>
                <div className="filter-buttons">
                    {options}
                    <button className="search-button">Search</button>
                </div>
            </>
        )
    }
}

export default Search; 