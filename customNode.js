// Sample Node-RED node file
module.exports = function (RED) {
	'use strict';
	// require any external libraries we may need.
	// var foo = require('foo library');

	// The main code definition - most things happen in here
	function SampleNode(n) {
		// Create a RED node
		RED.nodes.createNode(this, n);

		var node = this;

		// Do whatever youn need to do in here - declare callbacks etc
		// Note: this sample doesn't do anything much - it will only send
		// this message once at startup.
		var msg = {};
		msg.topic = node.topic;
		msg.payload = 'Hello World !';

		// respond to inputs....
		node.on('input', function (msg) {
			node.warn('I saw a payload: ' + msg.payload);
			// in this example just send it straight on. Should process it here really
			node.send();
		});
	}

	// Register the node by name. This must be called before overriding any of the
	// Node functions
	RED.nodes.registerType('sample', SampleNode);
}