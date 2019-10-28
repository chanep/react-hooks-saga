import axios from "axios";

const BASEURL = "https://www.omdbapi.com/?apiKey=ffd0c3a5";

export const apiCall = (url, data, headers, method) =>
  axios({
    method,
    url: BASEURL + url,
    data,
    headers
  });
