"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interactions = require("./interactions");

var _redux = require("redux");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _reduxPersist = require("redux-persist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  isLoading: _interactions.isLoading,
  getWalletInfo: _interactions.getWalletInfo
});
var persistConfig = {
  key: 'Veil Of Time',
  storage: _storage.default
};
var persistedReducer = (0, _reduxPersist.persistReducer)(persistConfig, reducers);
var _default = persistedReducer;
exports.default = _default;
//# sourceMappingURL=index.dev.js.map
