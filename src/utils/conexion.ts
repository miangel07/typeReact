import axios from "axios";

export const conexion = () => {
  const Api = axios.create({
    baseURL: " http://127.0.0.1:8000/api/",
  });
  return Api;
};


