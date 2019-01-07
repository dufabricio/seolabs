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
            'actionField': {'list': 'Home Page Product List'},    // 'detail' actions have an optional list property.
            'products': [{
                'name': 'Sansung Galaxy J7',       // Name or ID is required.
                'id': '12345',
                'price': '200.00',
                'brand': 'Sansung',
                'category': 'Smartphone',
                'variant': 'White'
                }]
            }
            }
        });
}

function addTransactionToDataLayer(items){

    // GA META - Sucess Submit
    // Count the number of each item in the cart
    ga('send', 'event', 'Clique', 'Checkout','Compra de Produto');
    
    // GA Comercio Eletronico Avancado
    console.log("GA Comercio Eletronico Avancado");

    /**
     * A function to handle a click on a checkout button. This function uses the eventCallback
     * data layer variable to handle navigation after the ecommerce data has been sent to Google Analytics.
     */

    let productsInCart=[];
    items.forEach((product)=>{
        productsInCart.push({
            'id': '1234',                     // Transaction ID. Required.
            'name': product.get("item_name"),    // Product name. Required.
            'sku': 'DD23444',                 // SKU/code.
            'category': 'Celular',         // Category or variation.
            'price': product.amount(),                 // Unit price.
            'quantity': product.get('quantity')                   // Quantity.
        });
    });

    dataLayer.push({
    'event': 'checkout',
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