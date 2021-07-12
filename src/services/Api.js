import request from "../util/Api";
import * as Urls from "../constants/Config";

const getApiBlogs = () => {
  return request({
    url: `${Urls.API_URL}blogs`,
    method: "GET",
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });
};

const getApiBlogsById = (id) => {
  return request({
    url: `${Urls.API_URL}blogs/${id}`,
    method: "GET",
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });
};

const getApiPagination = (id, limit) => {
  return request({
    url: `${Urls.API_URL}blogs?page=${id}&limit=${limit}`,
    method: "GET",
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });
};

const getApiSort = (createdAt, type) => {
  return request({
    url: `${Urls.API_URL}blogs?sortBy=${createdAt}&order=${type}`,
    method: "GET",
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });
};

const getApiSearch = (blog1) => {
  return request({
    url: `${Urls.API_URL}blogs?search=${blog1}`,
    method: "GET",
  })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error.response;
    });
};


export { getApiBlogs, getApiPagination, getApiSort, getApiSearch, getApiBlogsById };