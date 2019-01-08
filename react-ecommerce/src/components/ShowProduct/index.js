//Dependencies
import React, { Component } from 'react';
import find from 'lodash/find';
import { Link } from 'react-router-dom';
import { Icon } from 'react-materialize';
//Internals
import PRODUCTS from '../Data';
import './index.css';

class ShowProduct extends Component {

  changeDataLayer(product){

    // Measure a view of product details. This example assumes the detail view occurs on pageload,
    // and also tracks a standard pageview of the details page.
    dataLayer.push({
      'ecommerce': {
          'detail': {
          'eventLabel':'Detalhes do Produto',
          'products': [{
              'name': product.name,       // Name or ID is required.
              'id': guid(),
              'price': 200.00,
              'brand': product.brand,
              'category': product.category,
              'variant': 'White'
              }]
          }
          }
      });

  }

  addToCart (product) {

    /**
     * A function to handle a click on a checkout button. This function uses the eventCallback
     * data layer variable to handle navigation after the ecommerce data has been sent to Google Analytics.
     */

    let productsInCart=[];
    items.forEach((product)=>{
        productsInCart.push({
            'id': guid(),                     // Transaction ID. Required.
            'name': product.name,    // Product name. Required.
            'sku': 'DD23444',                 // SKU/code.
            'category': product.category,         // Category or variation.
            'price': product.price,                 // Unit price.
            'quantity': 1                   // Quantity.
        });
    });

    dataLayer.push({
        'event': 'checkout',
        'eventLabel':'Compra Finalizada',
        'ecommerce': {
            'checkout': {
                'actionField': {'step': 1, 'option': 'Visa'},
                'products': productsInCart
            }
        },
        'eventCallback': function() {
            document.location = '#';
        }
    });

  }
    
  render () {
    const product = find(PRODUCTS, ['id', parseInt(this.props.match.params.id)]);
    const currentProduct = product;

    this.changeDataLayer(product);

    return (
      <div className="show-product">
        <div className="item-wrapper">
          <div className="item-image">
            <img className="product-image" src={currentProduct.img} alt="product" />
          </div>
          <div className="item-name">
            <div className="product-info">
              <h3 id="product-name">{currentProduct.name}</h3>
            </div>
            <div className="product-bio">
              <p id="product-description">{currentProduct.description}</p>
              <p id="product-price">${currentProduct.price}</p>
              <Icon small id="add-icon">add_shopping_cart</Icon>
            </div>
            <div className="product-review">
              <div className="stars">
                <Icon small id="add-icon">star</Icon>
                <Icon small id="add-icon">star</Icon>
                <Icon small id="add-icon">star</Icon>
                <Icon small id="add-icon">star</Icon>
                <Icon small id="add-icon">star_half</Icon>
              </div>
            </div>
          </div>
        </div>
        <div className="similar-products">
          <h5>You might also like</h5>
          {PRODUCTS.map((product) => {
            if (
              product.gender === currentProduct.gender
              && product.type === currentProduct.type
              && product.name !== currentProduct.name) {
              return(
                <Link to={`/products/${product.id}`}>
                  <div key={product.id} className="item">
                    <Link to={`/products/${product.id}`}>
                    <div className="product-img">
                      <img alt={product.name} src={product.img} />
                    </div>
                    <div className="product-details">
                      <h1 id="product-name">{product.name}</h1>
                      <h4 id="product-description">{product.description}</h4>
                    </div>
                    </Link>
                    <div className="price-add">
                      <h5 id="product-price">${product.price}</h5>
                      <Icon small id="add-icon" onClick={this.addToCart(product)}>add_shopping_cart</Icon>
                    </div>
                  </div>
                </Link>
              )
            }
          })}
        </div>
      </div>
    );
  }
}

export default ShowProduct;
