import React, { Component } from 'react';
import FlatList from './flat_list';
import Map from './map';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: {
        name: null,
        lat: 48.884211,
        lng: 2.34689
      }
    };
  }

  select = (data) => {
    this.setState({ selectedFlat: data });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList select={this.select} selected={this.state.selectedFlat.name} />
        </div>
        <div className="map-container">
          <Map coords={this.state.selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
