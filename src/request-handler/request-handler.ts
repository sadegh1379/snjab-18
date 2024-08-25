import axios, { AxiosInstance, AxiosResponse } from "axios";
import { toast } from "react-toastify";

const serverInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API,
  timeout: 30000,
});

let errorToastShown = false;
const errorToastTimeout = 5000;

const addInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      const token = JSON.parse(localStorage.getItem("token") as string);
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        const status = error.response.status;
        if (!errorToastShown) {
          if (status === 500) {
            toast.error("خطای داخلی سرور (500)");
          } else if (status === 401) {
            window.location.href = `/login?callbackUrl=${window.location.pathname}`;
            localStorage.removeItem("token");
            localStorage.removeItem("user-info");
            localStorage.removeItem("selected-year");
          }
          // else if (status === 404) {
          //   toast.error("منبع یافت نشد (404)");
          // } else if (status === 401) {
          //   toast.error("دسترسی غیر مجاز (401)");
          //   localStorage.clear();
          //   window.location.href = "/login";
          // } else {
          // toast.error(`خطا: ${status}`);
          // }
          errorToastShown = true;
          setTimeout(() => {
            errorToastShown = false;
          }, errorToastTimeout);
        }
      } else {
        if (!errorToastShown) {
          toast.error("خطای شبکه یا سرور پاسخگو نیست");
          errorToastShown = true;
          setTimeout(() => {
            errorToastShown = false;
          }, errorToastTimeout);
        }
      }
      return Promise.reject(error);
    }
  );
};

addInterceptors(serverInstance);

const requestToServer = async <T>({
  method,
  data,
  url,
}: {
  method: "GET" | "POST" | "DELETE" | "PUT";
  url: string;
  data?: any;
}): Promise<T> => {
  const response: AxiosResponse<T> = await serverInstance.request({
    url,
    method,
    data,
  });
  return response.data;
};

export { requestToServer };
