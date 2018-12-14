
const PubSub = require(`@google-cloud/pubsub`);
const log = require('./logger.js').log;

// const pubsub = new PubSub();
const pubsub = new PubSub({ 
    projectId: 'ctp-playground',
    keyFilename: 'ctp-playground-e4b70ba9d4cc.service-account.json'
});
const subscriptionName = 'training-jvm-subscription-1';
const timeout = 240;
const subscription = pubsub.subscription(subscriptionName);

// Create an event handler to handle messages
let messageCount = 0;
const messageHandler = message => {
    console.log(`Received message ${message.id}:`);
    const payload = Buffer.from(message.data, 'base64').toString();
    try{
        payloadObj = JSON.parse(payload);
        log(payloadObj)
    }catch{
        log(payload);
    }
    messageCount += 1;

    // "Ack" (acknowledge receipt of) the message
    message.ack();
};

// Listen for new messages until timeout is hit
subscription.on(`message`, messageHandler);

setTimeout(() => {
    subscription.removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
}, timeout * 1000);
