import React from 'react';
import { Component } from 'react';
import FruitBasket from './FruitBasket';

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
    	fruit: [],
      filters: [],
      currentFilter: null
    };
  }
  
  componentWillMount=()=>{
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }));
  }
  
  render(){
  	return(
      <div></div>
  	)
  }
}

export default App;
