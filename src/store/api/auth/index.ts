import axios from "axios";

const Api = axios.create({
  baseURL: " http://127.0.0.1:8000/api/",
});
type LoginResponse = {
  message: string;
};

type LoginData = {
  username: string;
  password: string;
};

export const login = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const response = await Api.post("auth/login/", data);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.detail);
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor");
    } else {
      throw new Error("Error al realizar la solicitud");
    }
  }
};
