function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function initPageToDataLayer(title, category){

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(
      {
        "page": 
                {
                  "title": title,
                  "category": category
                }
      }
    );

}

function addViewProductToDataLayer(){
    // Measure a view of product details. This example assumes the detail view occurs on pageload,
    // and also tracks a standard pageview of the details page.
    dataLayer.push({
        'ecommerce': {
            'detail': {
            'eventLabel':'Detalhes do Produto',
            'actionField': {'list': 'Home Page Product List'},    // 'detail' actions have an optional list property.
            'products': [{
                'name': 'Sansung Galaxy J7',       // Name or ID is required.
                'id': guid(),
                'price': 200.00,
                'brand': 'Sansung',
                'category': 'Smartphone',
                'variant': 'White'
                }]
            }
            }
        });
}


function addTransactionToDataLayer(items){
    
    /**
     * A function to handle a click on a checkout button. This function uses the eventCallback
     * data layer variable to handle navigation after the ecommerce data has been sent to Google Analytics.
     */

    let productsInCart=[];
    items.forEach((product)=>{
        productsInCart.push({
            'id': guid(),                     // Transaction ID. Required.
            'name': product.get("item_name"),    // Product name. Required.
            'sku': 'DD23444',                 // SKU/code.
            'category': 'Celular',         // Category or variation.
            'price': product.amount(),                 // Unit price.
            'quantity': product.get('quantity')                   // Quantity.
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
            document.location = 'checkout.html';
        }
    });
}