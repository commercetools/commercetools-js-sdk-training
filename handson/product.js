const middlewareAuth = require('@commercetools/sdk-middleware-auth');
const httpMiddleware = require('@commercetools/sdk-middleware-http');
const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient } = require('./client.js');
const projectKey = 'sdk-training-project';

const getProductTypes = function getProductTypes() {
  // TODO: 2.2
  // Get a list of product types
  return getClient().then((client) => {

    // #region SOLUTION
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const productTypeUri = requestBuilder.productTypes.build();
    const productRequest = {
      uri: productTypeUri,
      method: 'GET'
    };
    return client.execute(productRequest);
    // #region SOLUTION

  });
};

const createProduct = function createProduct(name, key, description, productTypeId) {
  // TODO: 2.3
  //Create a product

  // #region SOLUTION
  return getClient().then((client) => {
    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const productUri = requestBuilder.products.build();
    const productRequest = {
      uri: productUri,
      method: 'POST',
      body: {
        name: { en: name },
        key,
        description: { en: description },
        productType: {
          id: productTypeId,
          typeId: 'product-type'
        },
        slug: { en: name.replace(/ /g, '-').toLowerCase() }
      }
    };
    return client.execute(productRequest);
  });
  // #endregion
};

module.exports.getProductTypes = getProductTypes;
module.exports.createProduct = createProduct;
