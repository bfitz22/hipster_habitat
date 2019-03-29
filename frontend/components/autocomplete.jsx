import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Autocomplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: ""
        };
        this.selectName = this.selectName.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(field) {
        return e => this.setState({[field]: e.currentTarget.value});
    }

    matches() {
        const matches = [];
        if (this.state.inputVal.length === 0) {
            return this.props.names; 
        }

        this.props.names.forEach(name => {
            const sub = name.slice(0, this.state.inputVal.length);
            if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
                matches.push(name);
            }
        });

        if (matches.length === 0) {
            matches.push('No matches, no campfire :(');
        }

        return matches; 
    }

    selectName(e) {
        const name = e.currentTarget.innerText; 
        this.setState({inputVal: name});
    }

    render() {
        const results = this.matches().map((result, i) => {
            return (
                <li key={i} onClick={this.selectName}>{result}</li>
            );
        });
        return(
            <div>
                <div className="auto">
                    <input 
                        onChange={this.handleInput("inputVal")}
                        value={this.state.inputVal}
                        placeholder='Search...'/>
                    <ul>
                        <ReactCSSTransitionGroup
                            transtionName='auto'
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}>
                            {results}
                        </ReactCSSTransitionGroup>
                    </ul>
                </div>
            </div>
        );
    }
};

