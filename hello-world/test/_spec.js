var should = require("should");
var helper = require("node-red-test-helper");
var lowerNode = require("../hello-world.js");

describe('hello-world Node', function () {

  afterEach(function () {
    helper.unload();
  });

  it('should be loaded', function (done) {
    var flow = [{ id: "n1", type: "hello-world", name: "test name" }];
    helper.load(helloNode, flow, function () {
      var n1 = helper.getNode("n1");
      n1.should.have.property('name', 'test name');
      done();
    });
  });

  it('should send payload "Hello World !"', function (done) {
    var flow = [{ id: "n1", type: "hello-world", name: "test name",wires:[["n2"]] },
    { id: "n2", type: "helper" }];
    helper.load(helloNode, flow, function () {
      var n2 = helper.getNode("n2");
      var n1 = helper.getNode("n1");
      n2.on("input", function (msg) {
        msg.should.have.property('payload');
        done();
      });
      n1.receive({ payload: "Hello World !" });
    });
  });
});