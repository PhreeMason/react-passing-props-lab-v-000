import React, { Component } from 'react';

const defaultLimit = 100

const FilteredFruitList=(props)=> {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     items: []
  //   };
  // }

  // componentWillMount() {
  //   fetch('/api/fruit')
  //     .then(response => response.json())
  //     .then(items => this.setState({ items }));
  // }

  const list = !props.filter ? props.fruit : props.fruit.filter(i => i.fruit_type === props.filter);

  return (
    <ul className="fruit-list">
      {list.map((item, index) => <li key={index}>{item.char}</li>)}
    </ul>
  );

}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
