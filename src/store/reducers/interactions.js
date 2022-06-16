import {IS_LOADING, WALLET_INFO} from '../actions';

export function isLoading(state = {}, action) {
  switch (action.type) {
    case IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

export function getWalletInfo(state = {}, action) {
  switch (action.type) {
    case WALLET_INFO:
      return action.data;
    default:
      return state;
  }
}
