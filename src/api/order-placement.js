import axios from 'axios';

/**
 * 
 * @param {Object} payload payload for the order placement
 * 
 *  {
      "email": "example@everlywell.com",
      "line_items": [
        {
        "product_id": 88,
        "quantity": 1
        }
      ],
      "ship_address": {
        "firstname": "Joe",
        "lastname": "Example",
        "address1": "800 W Cesar Chavez St",
        "address2": "B101",
        "city": "Austin",
        "state": "TX",
        "zipcode": "78701",
        "country": "US",
        "phone": "512-555-1234"
      },
      "user_id": 1,
      "enterprise_client_id": 1,
      "third_party_member_id": "X9342AD",
      "auto_register": false,
      "user": {
        "password": "",
        "dob": "1988-04-27"
      }
    }
 */

const orderPlacement = payload => {
  return axios.post(process.env.GATSBY_ORDER_PLACEMENT_ENDPOINT, payload);
};

export default orderPlacement;
