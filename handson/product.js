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
  // TODO 4.2: Implement getting a product type by key

  // #region SOLUTION
  return getClient().execute({
    uri: createRequestBuilder({ projectKey }).productTypes.byKey(key).build(),
    method: 'GET'
  })
  // #endregion

};

const createProduct = function createProduct(name, key, description, productType, sku, priceCentAmount, taxCategory) {
  // TODO 4.3: Create a product
  // https://docs.commercetools.com/http-api-projects-products.html#create-a-product

  // #region SOLUTION
  const productDraft = {
    key,
    name: {
      "en": name
    },
    productType: {
      typeId: "product-type",
      id: productType.id
      // correct alternative:: "key: productType.key"
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
    taxCategory:{
      typeId: "tax-category",
      id: taxCategory.id
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
