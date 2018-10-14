// Sample Node-RED node file
module.exports = (RED) => {
  // require any external libraries we may need.
  // var foo = require('foo library');

  // The main code definition - most things happen in here
  function SampleNode(n) {
    // Create a RED node
    RED.nodes.createNode(this, n);

    const node = this;

    // Do whatever youn need to do in here - declare callbacks etc
    // Note: this sample doesn't do anything much - it will only send
    // this message once at startup.
    const msg = {};
    msg.topic = node.topic;
    msg.payload = 'Hello World !';

    // respond to inputs....
    node.on('input', (msg) => {
      node.warn(`I saw a payload: ${msg.payload}`);
      // in this example just send it straight on. Should process it here really
      node.send(msg);
    });
  }

  // Register the node by name. This must be called before overriding any of the
  // Node functions
  RED.nodes.registerType('sample', SampleNode);
};
