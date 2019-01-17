const { getClient, projectKey } = require('./client.js');
const log = require('../logger.js').log;
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

const createProduct = function createProduct(name, key, description, productTypeKey, sku, priceCentAmount, taxCategoryKey, brand) {
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
      }],
      attributes: [
        {
          name: "brand",
          value: brand
        }
      ]
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
  // Assume a Text attribute (not localized)
  // Use the query builder and log the URI you built for debugging 

  // #region SOLUTION
  const uriBuilder = createRequestBuilder({ projectKey })
    .productProjections
    .where(`variants(attributes(name = "${attributeName}")) and variants(attributes(value = "${attributeValue}"))`)
    .whereOperator('or')
    .where(`masterVariant(attributes(name = "${attributeName}")) and masterVariant(attributes(value = "${attributeValue}"))`);
  const uri = uriBuilder
    .expand('productType')
    .build();
  log(uri);

  return getClient().execute({
    uri,
    method: 'GET'
  })
  // #endregion

};

const searchProducts = function searchProducts(attributeName, attributeValue, locale, userInput) {
  // TODO 4.F: Implement searching for products given the user's free text input. 
  // Optional: Include some facets and try out other search features if you have time. 

  // #region SOLUTION
  const uri = createRequestBuilder({ projectKey })
    .productProjectionsSearch
    .filter(`variants.attributes.${attributeName} : "${attributeValue}"`)
    .text(userInput, locale)
    .markMatchingVariants(true)
    .facet(`variants.attributes.${attributeName}`)
    .build();
  log(uri);
  return getClient().execute({
    uri,
    method: 'GET'
  })
  // #endregion

};

module.exports.getProductTypes = getProductTypes;
module.exports.getProductTypeByKey = getProductTypeByKey;
module.exports.createProduct = createProduct;
module.exports.queryProducts = queryProducts;
module.exports.searchProducts = searchProducts;
