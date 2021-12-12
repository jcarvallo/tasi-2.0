import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const setToken = (token: string) => localStorage.setItem("token", token);

const getToken = () => localStorage.getItem("token");

const config: any = axios.create({ baseURL: process.env.api });

const method = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
};

config.interceptors.request.use(
  (req: AxiosRequestConfig) => {
    if (req.url !== "authentication") {
      req.headers = { Authorization: `Bearer ${getToken()}` };
    }
    return req;
  },
  (error: any) => Promise.reject(error)
);
config.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.config.url === "authentication" && res.data.token) {
      setToken(res.data.token);
    }
    return res;
  },
  (error: any) => Promise.reject(error)
);

export { config, method };
