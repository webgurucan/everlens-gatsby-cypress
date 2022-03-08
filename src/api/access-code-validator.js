import axios from 'axios';

const accessCodeValidator = code => {
  return axios.post(process.env.GATSBY_ACCESS_CODE_VALIDATOR_ENDPOINT, {
    input: {
      code,
      enterprise_partner_id: process.env.GATSBY_ENTERPRISE_PARTNER_ID,
    },
  });
};

export default accessCodeValidator;
