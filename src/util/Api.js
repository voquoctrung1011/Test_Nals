import axios from "axios";
import * as Urls from "../constants/Config";

const request = axios.create({
  baseURL: `${Urls.API_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// after send request
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const res = error.response;
    switch (res.status) {
      case 401:
        console.log("logout");
        // localStorage.clear();
        window.location.reload();
        break;
      case 403:
        //do something
        break;
      case 404:
        //do something
        break;
      //...
      case 500:
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default request;
