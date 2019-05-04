import React from 'react';
import { connect } from 'react-redux';
import { updateCreation } from '../../../actions/listing_actions';

class NavRight extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }   

    onClick() {
        this.props.updateCreation()
    }

    render () {
        let block; 
        if (this.props.nextPage) {
            block = <div className="nav-arrow">
                        <i className="fas fa-chevron-right"></i>
                    </div>
        } else {
            block = <div className="nav-arrow-grey">
                        <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    </div>
        }
        return (
            <>
            {block}
            </>
        )
    }
}

const msp = ({ entities: { creations } }) => {
    return {
        nextPage: creations.nextPage
    }
}

const mdp = dispatch => ({
    updateCreation: (key, value) => dispatch(updateCreation(key, value))
});

export default connect(msp, mdp)(NavRight);