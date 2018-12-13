const { getClient, projectKey } = require('./client.js');
// #region SOLUTION
const { createRequestBuilder } = require('@commercetools/api-request-builder');
// #endregion

const getProductTypes = function getProductTypes() {
  // TODO 2: Get a list of product types

  // #region SOLUTION
  return getClient().execute({
    uri: `/${projectKey}/product-types`,
    method: 'GET'
  })
  // #endregion

};

const getProductTypeByKey = function getProductTypeByKey(key) {
  // TODO 4.C: Implement getting a product type by key
  // Do use the request builder to build the URI

  // #region SOLUTION
  return getClient().execute({
    uri: createRequestBuilder({ projectKey }).productTypes.byKey(key).build(),
    method: 'GET'
  })
  // #endregion

};

const createProduct = function createProduct(name, key, description, productTypeKey, sku, priceCentAmount, taxCategoryKey) {
  // TODO 4.D: Create a product, understand ResourceIdentifier vs. Reference
  // https://docs.commercetools.com/http-api-types#resourceidentifier
  // https://docs.commercetools.com/http-api-projects-products.html#create-a-product

  // #region SOLUTION
  const productDraft = {
    key,
    name: {
      "en": name
    },
    productType: {
      key: productTypeKey
    },
    slug: {
      "en": name.replace(/[^0-9a-z_-]/gi, '-').substring(0, 256)
    },
    description: {
      "en": description
    },
    masterVariant: {
      sku: sku,
      prices: [{
        value: {
          centAmount: priceCentAmount,
          currencyCode: "EUR"
        }
      },
      {
        value: {
          centAmount: priceCentAmount,
          currencyCode: "USD"
        }
      }]
    },
    taxCategory: {
      key: taxCategoryKey
    }
  };

  return getClient().execute({
    uri: createRequestBuilder({ projectKey })
      .products
      .build(),
    method: 'POST',
    body: productDraft
  })
  // #endregion

};

const queryProducts = function queryProducts(attributeName, attributeValue) {
  // TODO 4.E: Implement querying products by given attribute name and value
  // Use the query builder and try to reproduce the query in IMPEX.commercetools.com 

  // #region SOLUTION
  return getClient().execute({
    uri: createRequestBuilder({ projectKey })
      .products
      .XXX
      .build(),
    method: 'GET'
  })
  // #endregion

};

const searchProducts = function searchProducts(userInput) {
  // TODO 4.F: Implement searching for products given the user's free text input. 
  // Include some facets and try out other search features if you have time left.  

  // #region SOLUTION
  return getClient().execute({
    uri: createRequestBuilder({ projectKey })
      .products
      .XXX
      .build(),
    method: 'GET'
  })
  // #endregion

};

module.exports.getProductTypes = getProductTypes;
module.exports.getProductTypeByKey = getProductTypeByKey;
module.exports.createProduct = createProduct;
module.exports.queryProducts = queryProducts;
module.exports.queryProducts = searchProducts;
