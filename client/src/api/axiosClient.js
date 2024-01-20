import axios from "axis";

const BASE_URL = "http://localhost:5050/api/v1";
const getToken = () => localStorage.getItem("token");

const axiosClient = axios.create({
  baseURL: BASE_URL,
});

//APIを叩く前に前処理を行う
axiosClient.intercepters.request.use(async (config) => {
  return {
    config,
    header: {
      "Content-Type": "application/json",
      authorization: `Bearer ${getToken()}`, //リクエストヘッダにJWTをつけてサーバーに渡す
    },
  };
});

axiosClient.intercepters.response.use(
  (response) => {
    return response;
  },
  (err) => {
    throw err.response;
  }
);

export default axiosClient;
