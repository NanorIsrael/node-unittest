const {expect} = require("chai");
const { it, describe } = require("mocha");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const sinon = require('sinon')


describe("sendPaymentRequestToApi()", function() {

  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(function() {
    calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
	consoleLogSpy = sinon.spy(console, 'log');

  });

  afterEach(function() {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

    it(`checks of console is logged properly`, function() {
		sendPaymentRequestToApi(100, 20);
		expect(consoleLogSpy.calledOnce).to.be.true;
		expect(consoleLogSpy.calledWith("The total is: 10")).to.be.true;
    });

    it(`checks util is called correctly`, function() {
		sendPaymentRequestToApi(100, 20);
      expect(calculateNumberStub.calledOnce).to.be.true;
      expect(calculateNumberStub.calledWith("SUM", 100, 20)).to.be.true;
	  expect(Utils.calculateNumber("SUM", 100, 20)).to.equal(10);
    });

});