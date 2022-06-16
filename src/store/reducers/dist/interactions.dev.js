"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLoading = isLoading;
exports.getWalletInfo = getWalletInfo;

var _actions = require("../actions");

function isLoading() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

function getWalletInfo() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.WALLET_INFO:
      return action.data;

    default:
      return state;
  }
}
//# sourceMappingURL=interactions.dev.js.map
