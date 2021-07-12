import { getApiBlogs, getApiPagination, getApiSort, getApiSearch } from "../services/Api";


const initialState = {
  data: [],
  loading: false,
};

const types = {
  PAGINATION: "PAGINATION",
  SORT: "SORT",
  SEARCH: "SEARCH",
};

export const actions = {
  pagination: (payload) => {
    return { type: types.PAGINATION, payload }
  },
  sort: (payload) => {
    return { type: types.SORT, payload }
  },
  search: (payload) => {
    return { type: types.SEARCH, payload }
  },
};

export const Pagination = (id) => (dispatch) => {
  getApiPagination(id, 10)
    .then(res => {
      if (res && res.status === 200)
        dispatch(actions.pagination(res.data));
    })
    .catch(err => {
      console.log(err)
    })
}

export const Sort = (id, type) => (dispatch) => {
  getApiSort(id, type)
    .then(res => {
      if (res && res.status === 200)
        dispatch(actions.pagination(res.data));
    })
    .catch(err => {
      console.log(err)
    })
}

export const Search = (data) => (dispatch) => {
  getApiSearch(data)
    .then(res => {
      if (res && res.status === 200)
        dispatch(actions.pagination(res.data));
    })
    .catch(err => {
      console.log(err)
    })
}

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.PAGINATION:
      return { ...state, data: payload };
    case types.SORT:
      return { ...state, data: payload };
    case types.SEARCH:
      return { ...state, data: payload };
    default:
      return state;
  }
};
