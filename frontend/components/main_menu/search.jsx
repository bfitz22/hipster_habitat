import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSearch(e) {
        this.props.searchIdeas(e.target.value)
    }
    
    render() {
        return (
            <>
                <div className="search-input">
                    <i className="fas fa-search"></i>
                    <input className="search" type="text" placeholder="Try Yosemite, Napa, pets..."
                    onKeyUp={this.handleSearch.bind(this)}/>
                </div>
                <div className="spacer"></div>
            </>
        )
    }
}

export default Search; 