const sdkRequestBuilder = require('@commercetools/api-request-builder');

const { getClient, projectKey } = require('./client.js');

const getProductTypes = function getProductTypes() {
  // TODO: 2.4
  // Get a list of product types

  // #region SOLUTION
  return getClient().then((client) => {

    const requestBuilder = sdkRequestBuilder.createRequestBuilder({ projectKey });
    const productTypeUri = requestBuilder.productTypes.build();
    const productRequest = {
      uri: productTypeUri,
      method: 'GET'
    };
    return client.execute(productRequest);

  });
  // #region SOLUTION
};

const createProduct = function createProduct(name, key, description, productTypeId, sku, priceCentAmount, taxCategoryId) {
  // TODO: 4
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
        key: key,
        description: { en: description },
        productType: {
          id: productTypeId,
          typeId: 'product-type'
        },
        slug: { en: key },
        taxCategory: {
          "typeId": "tax-category",
          "id": taxCategoryId
        },
        masterVariant: {
          sku: sku,
          prices: [{
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: priceCentAmount
            }
          }]
        }
      }
    };
    return client.execute(productRequest);
  });
  // #endregion
};

module.exports.getProductTypes = getProductTypes;
module.exports.createProduct = createProduct;
