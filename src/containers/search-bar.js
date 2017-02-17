import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({
      term: event.target.value
    });
  }

  render(){
    return (
      <form className="input-group">
        <input
          placeholder="Get a Five-day forecast in your favorite cities!"
          value={this.state.term}
          className="form-control"
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">

          <button type="submit" className="btn btn-secondary">Submit</button>

          </span>
      </form>
    )
  }
}
