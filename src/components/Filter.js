import React from 'react';

const defaultLimit = 100

const Filter =(props)=>{
  // constructor() {
  //   super();

  //   this.state = {
  //     filters: []
  //   };
  // }

  // componentWillMount() {
  //   this.fetchFilters();
  // }

  // fetchFilters = () => {
  //   fetch('/api/fruit_types')
  //     .then(response => response.json())
  //     .then(filters => this.setState({ filters }));
  // }

  return (
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}

Filter.defaultProps = {
  filters: [],
  handleChange: function() {}
}

export default Filter;
