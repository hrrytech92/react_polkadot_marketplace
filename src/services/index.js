import Https from './https';
import AppConstant from '../config/AppConstant';

export function getAllApisList () {
  return new Promise((resolve, reject) => {
    Https.get(AppConstant.baseUrl + "/api").then(function (response) {
      resolve(response);
    })
    .catch(function (error) {
      reject(error);
    })
  })
}

export function getOwnedNFTs (address) {
  return new Promise((resolve, reject) => {
    Https.get(AppConstant.baseUrl + `/get_nfts_owned_by/${address}`).then(function (response) {
      resolve(response);
    })
    .catch(function (error) {
      reject(error);
    })
  })
}

export function getNFTInfo (id) {
  return new Promise((resolve, reject) => {
    Https.get(AppConstant.baseUrl + `/get_nft_by_id/${id}`).then(function (response) {
      resolve(response);
    })
    .catch(function (error) {
      reject(error);
    })
  })
}