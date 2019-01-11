import { put, takeEvery } from 'redux-saga/effects';
import { LOAD_PRODUCT } from './actions';
import { CLIENT_ID, BASE_API_URL } from '../../config';
import PRODUCTS from '../Data';

export function* loadProductHandler(action) {
  
    const currentProduct = find(PRODUCTS, ['id', parseInt(this.props.match.params.id)]);

    // Measureqin a view of product details. This example assumes the detail view occurs on pageload,
    // and also tracks a standard pageview of the details page.
    window.dataLayer.push({
        'ecommerce': {
            'detail': {
            'eventLabel':'Detalhes do Produto',
            'products': [{
                'name': product.name,       // Name or ID is required.
                'id': window.guid(),
                'price': product.price,
                'brand': product.brand,
                'category': product.category,
                'variant': 'White'
                }]
            }
            }
        });

    console.log(window.dataLayer);

    yield put({ type: LOAD_PRODUCT_COMPLETE, product: currentProduct });

}

export default [
  takeEvery(LOAD_PRODUCT, loadProductHandler)
];

  /*    
    window.dataLayer.push({
        'event': 'checkout',
        'eventLabel':'Compra Finalizada',
        'ecommerce': {
            'checkout': {
                'actionField': {'step': 1, 'option': 'Visa'},
                'products': [
                  {
                    'id': window.guid(),                     // Transaction ID. Required.
                    'name': product.name,    // Product name. Required.
                    'sku': 'DD23444',                 // SKU/code.
                    'category': product.category,         // Category or variation.
                    'price': product.price,                 // Unit price.
                    'quantity': 1                   // Quantity.
                  }
                ]
            }
        },
        'eventCallback': function() {
            document.location = '#';
        }
    });

  */
