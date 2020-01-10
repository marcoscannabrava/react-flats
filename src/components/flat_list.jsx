import React, { Component } from 'react';
import flats from '../../data/flats.js';
import Flat from './flat';

// eslint-disable-next-line react/prefer-stateless-function
class FlatList extends Component {
  render() {
    return (
      flats.map(flat => <Flat data={flat} key={flat.name} />)
    );
  }
}

export default FlatList;
