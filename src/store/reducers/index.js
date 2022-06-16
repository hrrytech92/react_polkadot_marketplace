import {isLoading, getWalletInfo} from './interactions';
import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
  isLoading,
  getWalletInfo
});


const persistConfig = {
  key: 'Veil Of Time',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;