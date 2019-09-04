'use strict'

var varhandsController = require('./handsControllerService');

module.exports.compareHands = function compareHands(req, res, next) {
  varhandsController.compareHands(req, res, next);
};