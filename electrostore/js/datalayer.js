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
        evt.preventDefault();

        // GA Comercio Eletronico Avancado
        console.log("GA Comercio Eletronico Avancado");

        ga('ecommerce:addTransaction', {
            'id': '1234',                     // Transaction ID. Required.
            'affiliation': 'Eletronic Store',   // Affiliation or store name.
            'revenue': '11.99',               // Grand Total.
            'shipping': '5',                  // Shipping.
            'tax': '1.29'                     // Tax.
        });

        let eventValue=0;
        items.forEach((product)=>{
            eventValue += product.total();
            ga('ecommerce:addItem', {
                'id': '1234',                     // Transaction ID. Required.
                'name': product.get("item_name"),    // Product name. Required.
                'sku': 'DD23444',                 // SKU/code.
                'category': 'Celular',         // Category or variation.
                'price': product.amount(),                 // Unit price.
                'quantity': product.get('quantity')                   // Quantity.
            });
        });
        
        ga('ecommerce:send');

}