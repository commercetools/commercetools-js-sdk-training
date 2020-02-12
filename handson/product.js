const { getClient, projectKey } = require('./client.js');
const log = require('../logger.js').log;
const { createRequestBuilder } = require('@commercetools/api-request-builder');

const createProductDraft = (productData) => {
  const {name, key, description, productTypeKey, sku, priceCentAmount, currency, taxCategoryKey} = productData;
  return {
    key,
    name: {
      en: name
    },
    productType: {
      key: productTypeKey
    },
    slug: {
      en: name
    },
    description: {
      en: description
    },
    masterVariant: {
      sku,
      key: sku,
      prices: [ {
        value : {
          currencyCode: currency,
          centAmount: priceCentAmount
        }
      }]
    },
    taxCategory: {
      key: taxCategoryKey
    }
  }
}

const createProductAndMasterVariant = (productData) => 
    getClient().execute({
      uri: createRequestBuilder({projectKey}).products.build(),
      method: 'POST',
      body: createProductDraft(productData)
    })

const getProductByKey = (key) =>
    getClient().execute({
        uri: createRequestBuilder({projectKey}).products.byKey(key).build(),
        method: 'GET'
    })

const getCategoryByKey = (key) =>
    getClient().execute({
        uri: createRequestBuilder({projectKey}).categories.byKey(key).build(),
        method: 'GET'
})

const getProductTypes = () => 
  getClient().execute({
    uri: createRequestBuilder({projectKey}).productTypes.build(),
    method: 'GET'
})

const getProductTypeByKey = (key) =>
  getClient().execute({
    uri: createRequestBuilder({projectKey}).taxCategories.byKey(key).build(),
    method: 'GET'
})


const assignProductToCategoryPROMISSES = (productKey, categoryKey) => 
    getProductByKey(productKey)
        .then (
            (currentProduct) => {
              const updateActions = [{
                action: 'addToCategory',
                category : {
                    key: categoryKey
                }
              }, 
              {
              action: 'publish'
              }
              ];
            return getClient().execute({
                uri: createRequestBuilder({projectKey}).products.byKey(productKey).build(),
                method: 'POST',
                body: {
                    version: currentProduct.body.version,
                    actions: updateActions
                }
            })    
            }
    )

const assignProductToCategoryAwait = async (productKey, categoryKey) => {
      const product = await getProductByKey(productKey);
      const updateActions = [{
          action: 'addToCategory',
          category : {
              key: categoryKey
          }
        }, 
        {
        action: 'publish'
        }
      ];
      return getClient().execute({
                  uri: createRequestBuilder({projectKey}).products.byKey(productKey).build(),
                  method: 'POST',
                  body: {
                      version: product.body.version,
                      actions: updateActions
                  }
              })    
  }

const queryProducts = ({attributeName, attributeValue}) => 
      getClient().execute({
        uri: createRequestBuilder({projectKey}).productProjections
              .staged(true)
              .where(`masterVariant(attributes(name = "${attributeName}")) and 
                    masterVariant(attributes(value = "${attributeValue}"))`)
                    // masterVariant(attributes(value(en = "${attributeValue}")))`) 
              .whereOperator('or')
              .where(`variants(attributes(name = "${attributeName}")) and 
                    variants(attributes(value = "${attributeValue}"))`)
                    // variants(attributes(value(en = "${attributeValue}")))`)
              .expand('productType')
              .build(),
        method: 'GET'
    })



  const searchProducts = ({attributeName, attributeValue, locale, userInput}) => {
    // TODO 4.F: Implement searching for products given the user's free text input. 
    // Optional: Include some facets and try out other search features if you have time. 
  
    const uri = createRequestBuilder({projectKey}).productProjectionsSearch
    .staged(false)
    // .filter(`variants.attributes.${attributeName}.en: "${attributeValue}"`)
    .text(userInput, locale)
    .markMatchingVariants(true)
    .facet(`variants.attributes.${attributeName}.en`)
    .expand('productType')
    .build();
    log(uri);
    return getClient().execute({
      uri,
      method: 'GET'
    })
  
  }
  


module.exports.getProductTypes = getProductTypes;
module.exports.getProductByKey = getProductByKey;
module.exports.getCategoryByKey = getCategoryByKey;
module.exports.assignProductToCategoryPROMISSES = assignProductToCategoryPROMISSES;
module.exports.assignProductToCategoryAwait = assignProductToCategoryAwait;
module.exports.getProductTypeByKey = getProductTypeByKey;
module.exports.createProductAndMasterVariant = createProductAndMasterVariant;
module.exports.queryProducts = queryProducts;
module.exports.searchProducts = searchProducts;
