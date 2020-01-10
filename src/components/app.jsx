import React, { Component } from 'react';
import FlatList from './flat_list';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList />
        </div>
        <div className="map-container">map container</div>
      </div>
    );
  }
}

export default App;
