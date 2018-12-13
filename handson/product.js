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

module.exports.getProductTypes = getProductTypes;
module.exports.getProductTypeByKey = getProductTypeByKey;
module.exports.createProduct = createProduct;
