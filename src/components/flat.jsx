import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {
  render() {
    const flat = this.props.data
    const styles = {
      backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`
    };
    return (
      <div className="card" style={styles}>
        <div className="card-category">{flat.price} EUR</div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
