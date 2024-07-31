import {conexion} from "../../../utils/conexion";
type LoginResponse = {
  message: string
};


type LoginData = {
  numero_documento: Number;
  password: string;
};
type user = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  rol: string;
  tipo_documento: string;
  numero_documento: Number;
}

export const login = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const response = await conexion().post("auth/login/", data);
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
export const UserRegister = async (data: user): Promise<LoginResponse> => {
  try {
    const response = await conexion().post("auth/registrar/", data);

    return response.data.message;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor");
    } else {
      throw new Error("Error al realizar la solicitud");
    }
  }
};