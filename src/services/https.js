import axios from 'axios';
import AppConstant from '../config/AppConstant';

export default axios.create({
  baseURL: AppConstant.baseUrl
});
