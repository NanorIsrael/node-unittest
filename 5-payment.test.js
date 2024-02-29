const {expect} = require("chai");
const { it, describe } = require("mocha");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");
const sinon = require('sinon')


describe("sendPaymentRequestToApi()", function() {

  let calculateNumberSpy;
  let consoleLogSpy;

  beforeEach(function() {
	calculateNumberSpy = sinon.spy(Utils, "calculateNumber");
	consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
	calculateNumberSpy.restore();
	consoleLogSpy.restore();
  });
	

    it(`checks of console is logged properly with 100 and 20`, function() {
		sendPaymentRequestToApi(100, 20);
		expect(consoleLogSpy.calledOnce).to.be.true;
		expect(consoleLogSpy.calledWith("The total is: 120")).to.be.true;
		expect(calculateNumberSpy.calledOnce).to.be.true;
		expect(calculateNumberSpy.calledWith("SUM", 100, 20)).to.be.true;
		expect(Utils.calculateNumber("SUM", 100, 20)).to.equal(120);
    });

    it(`checks of console is logged properly with 10 and 10`, function() {
		sendPaymentRequestToApi(10, 10);
		expect(consoleLogSpy.calledOnce).to.be.true;
		expect(consoleLogSpy.calledWith("The total is: 20")).to.be.true;
		expect(calculateNumberSpy.calledOnce).to.be.true;
		expect(calculateNumberSpy.calledWith("SUM", 10, 10)).to.be.true;
		expect(Utils.calculateNumber("SUM", 10, 10)).to.equal(20);
    });
});