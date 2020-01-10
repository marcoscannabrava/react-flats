import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {
  handleClick = (name, lat, lng) => {
    this.props.select({ name, lat, lng });
  }

  render() {
    const flat = this.props.data
    // const selected = this.props.selected.name
    const styles = {
      backgroundImage: `
      linear-gradient(rgba(0, 0, 0, 0.3), 
      rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`
    };
    // const classNames = {
    //   if(name === selected)
    // };
    return (
      <div className={this.props.selected === flat.name ? "card selected" : "card"} style={styles} onClick={() => this.handleClick(flat.name, flat.lat, flat.lng)}
      data-name={flat.name} data-lat={flat.lat} data-lng={flat.lng} >
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
