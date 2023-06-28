import axios from "axios";
const api = axios.create({
  // headers: { "X-Requested-With": "XMLHttpRequest", Accept: "application/json" },
  // baseURL: import.meta.env.VITE_API_URL,
  // withCredentials: true,
  headers: { Accept: "application/json" },
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 ) {
      window.location = "/#/auth/login";
    }
    return Promise.reject(error);
  }
);

export { axios, api };
