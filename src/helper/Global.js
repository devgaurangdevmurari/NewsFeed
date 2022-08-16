import axios from "axios";

export const makeAPIRequest = ({
  method,
  url,
  data,
  headers,
  params,
  baseURL,
}) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method,
      baseURL,
      url,
      data,
      headers,
      params,
    };

    options.validateStatus = () => {
      return true;
    };

    axios(options)
      .then((response) => {
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
