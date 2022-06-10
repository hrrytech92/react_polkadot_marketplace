import list from './list';
import {isLoading} from './interactions';
import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
  list,
  isLoading,
});


const persistConfig = {
  key: 'counter',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;