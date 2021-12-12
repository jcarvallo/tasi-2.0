import { AxiosRequestConfig } from "axios";
import { config, method } from "./httpConfig";

const httpClient = {
  get: async (request: AxiosRequestConfig) => {
    let { url, params } = request;
    return await config({
      method: method.get,
      url,
      params: params ? params : {},
    });
  },
  post: async (request: AxiosRequestConfig) => {
    let { url, data, auth } = request;
    return (await auth)
      ? config({ method: method.post, url, data: {}, auth })
      : config({ method: method.post, url, data });
  },
  put: async (request: AxiosRequestConfig) => {
    let { url, data } = request;
    return await config({ method: method.put, url, data });
  },
  delete: async (request: AxiosRequestConfig) => {
    let { url } = request;
    return await config({ method: method.delete, url });
  },
};

export default httpClient;
