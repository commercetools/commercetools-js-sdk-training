const log = require('./logger.js').log;
const { getImportClient, projectKey } = require('./handson/client.js');

const createSinkDraft = {
      key : 'berlin-store-prices',
      resourceType : 'price',
  }

const createSink = () => 
   getImportClient().execute({     
        uri: `/${projectKey}` + '/import-sinks',
        method: 'POST',
      body: createSinkDraft
})

const createImportRequestDraft = {
        type : 'price',
        resources : [{
                key: 'berlin-store-prices',
                value: {
                   currencyCode: 'EUR',
                   centAmount: '4200'     
                },
                productVariant: {
                        typeId: 'product-variant',
                        key: '11'
                },
                product: {
                        typeId: 'product',
                        key: 'green-bordeaux-new'
                }
        }]
    }

const createImportRequest = () => 
   getImportClient().execute({     
        uri: `/${projectKey}` + '/prices/importSinkKey=' + 'berlin-store-prices',
        method: 'POST',
      body: createImportRequestDraft
})

const checkImportStatus = () => 
        getImportClient().execute({     
                uri: `/${projectKey}` + '/import-summaries/importSinkKey=berlin-store-prices',
                method: 'GET'
})

// Do it step by step tp verify results and status

// createSink().then(log).catch(log);
// createImportRequest().then(log).catch(log);
// checkImportStatus().then(log).catch(log);

