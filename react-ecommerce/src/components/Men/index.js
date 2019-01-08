//Dependencies
import React, { Component } from 'react';
//Internals
import MenItems from './MenItems';
import './index.css';


class MensProducts extends Component {

  render() {
    return(
      <div className="mens-products">
        <div className="mens-title">
          <h4>Men's Items</h4>
        </div>
        <MenItems />
      </div>
    );
  }
}


export default MensProducts;
