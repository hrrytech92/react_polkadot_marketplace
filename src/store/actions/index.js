export const IS_LOADING = 'IS_LOADING';
export const HELLO_RESPONSE = 'HELLO_RESPONSE';
export const WALLET_INFO = 'WALLET_INFO';

export function isLoading(isLoading = false) {
  return {
    type: IS_LOADING,
    isLoading: isLoading,
  };
}

export const getWalletInfo = (data) => {
  return {
    type: WALLET_INFO,
    data
  }
};
