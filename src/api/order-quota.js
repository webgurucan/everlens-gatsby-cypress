import axios from 'axios';

const ENDPOINT = process.env.GATSBY_API_ORDER_QUOTA;

/**
 * 
 * @param {Object} payload payload for the order quota
 * 
 *  {
      "email": "foo@bar.com",
      "uniqueId": "123456",
      "accessCode": "everlywell2020"
    }
 */

const orderQuota = payload => {
  return axios.post(ENDPOINT, payload);
};

export default orderQuota;
