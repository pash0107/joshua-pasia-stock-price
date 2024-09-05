import axios from "axios";
const timeout = 600000;
const apiUrl = process.env.REACT_APP_API_URL;
const finnHubURL = process.env.REACT_APP_FINHUB_API_URL;

let headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
};

export function* get(uri, data, sort, token, type) {
  headers = {
    ...headers,
  };

  if (!sort) {
    sort = {
      sort: "asc",
      sortBy: "createdAt",
    };
  }
  const params = data ? data : "";
  const sortField = `&sort=${sort.sort === "asc" ? "" : "-"}${sort.sortBy}`;

  const apiEndpoint = type && type === "FINNHUB" ? finnHubURL : apiUrl;

  const parameters =
    type && token && type === "FINNHUB"
      ? `symbol=${params}&token=${token}`
      : `${params}${sortField}`;

  const result = yield axios
    .get(`${apiEndpoint}/${uri}?${parameters}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  if (result.status) {
    return result;
  } else {
    if (result.response) {
      return result.response;
    }
  }
}

export function* fetch(url, options) {
  const result = yield axios
    .request({
      ...options,
      url,
      baseURL: apiUrl,
      timeout: timeout,
      headers: headers,
      onDownloadProgress: (progress) => {},
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  if (result.status) {
    return result;
  } else {
    if (result.response) {
      return result.response;
    }
  }
}

export function* fetchTest(url, options) {
  const result = yield axios
    .request({
      ...options,
      url,
      baseURL: apiUrl,
      timeout: timeout,
      onDownloadProgress: (progress) => {},
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return error;
    });
  if (result.status) {
    return result;
  } else {
    if (result.response) {
      return result.response;
    }
  }
}
