"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _AppConstant = _interopRequireDefault(require("../config/AppConstant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _axios.default.create({
  baseURL: _AppConstant.default.baseUrl
});

exports.default = _default;
//# sourceMappingURL=https.dev.js.map
