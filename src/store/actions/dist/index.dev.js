"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLoading = isLoading;
exports.getWalletInfo = exports.WALLET_INFO = exports.HELLO_RESPONSE = exports.IS_LOADING = void 0;
var IS_LOADING = 'IS_LOADING';
exports.IS_LOADING = IS_LOADING;
var HELLO_RESPONSE = 'HELLO_RESPONSE';
exports.HELLO_RESPONSE = HELLO_RESPONSE;
var WALLET_INFO = 'WALLET_INFO';
exports.WALLET_INFO = WALLET_INFO;

function isLoading() {
  var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return {
    type: IS_LOADING,
    isLoading: isLoading
  };
}

var getWalletInfo = function getWalletInfo(data) {
  return {
    type: WALLET_INFO,
    data: data
  };
};

exports.getWalletInfo = getWalletInfo;
//# sourceMappingURL=index.dev.js.map
