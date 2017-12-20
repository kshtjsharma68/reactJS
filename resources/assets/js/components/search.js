import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './search.css';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: true,
            searches: [],
            search: ''
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSearch(e) {
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
        if(this.state.searches.indexOf(this.state.value) < 0) {
            const values = this.state.searches;
            values.push(this.state.value);
            this.setState({searches: values});
        }
        e.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <h2>Search</h2>
                    <input type="text" value={this.state.search} onChange={this.handleChange}/>
                    <button type="button" onClick={this.handleSearch}>{this.state.clicked ? 'Click me' : 'Already clicked'}</button>
                </div> 
                <div className="row">
                    <MakeList value={this.state.searches}/>
                </div>   
            </div>    
        );
    }
}

function MakeList(props) {
    console.log(props.value);
    const val = props.value.length ? (
         props.value.map((item) => 
        <li key={item.toString()}>{item}</li>
        )
    ) : (
        <li>No item available</li>
    );
    
    return (
        <ul>{val}</ul>
    );
}

if(document.getElementById('search')) {
    ReactDOM.render(<Search />, document.getElementById('search'));
}

 