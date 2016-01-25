import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }

  render() {
    return (
    <div>
    {/* input is controlled component. A controlled component has its value set by state. inputs value only ever changes when the state changes */}
      <input
       value={this.state.term}
       onChange={event => this.setState({term: event.target.value})} />
    </div>
    );
  }
}

export default SearchBar;
