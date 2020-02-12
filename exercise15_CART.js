const { createCart, 
        addProductToCartBySkus, 
        addDiscountCodeToCart,
        captureOrderByCustomerId } = require('./handson/cart.js');
const log = require('./logger.js').log;

// TODO 6.1: Complete a checkout in ./handson/cart.js

// TODO
// replace customerId with key
// replace in all calls the fetching of the cart by customerId with cartId, if wished

const checkout = async () => {
  // create cart
  cartEmpty = await createCart({currency: 'EUR',country: 'DE',locale: 'de', customerId : 'a6f9eb52-35bc-4c88-942f-eca50f1058d3'});
  
  // TODO add inventory information

  // add products
  cartFilled = await addProductToCartBySkus({customerId: cartEmpty.body.customerId,skus: ['bottle-shelf-6125', 'bottle-shelf-6125']});

  // add discount
  cartDiscounted = await addDiscountCodeToCart({customerId: cartFilled.body.customerId,code: 'AIRPORT'});
  
  // TODO set shipping

  // TODO recalculate

  // create order
  order = await captureOrderByCustomerId({customerId: cartDiscounted.body.customerId});
  
  // TODO change order state
  
 return order;
}


checkout()
  .then(log)
  .catch(log);
