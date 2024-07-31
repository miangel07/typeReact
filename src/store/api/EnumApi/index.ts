import { conexion } from "../../../utils/conexion";
import { useQuery } from "@tanstack/react-query";

const getRol = async () => {
  try {
    const { data } = await conexion().get("auth/rol");
    return data;
  } catch (error) {
    console.error(error);
  }
};
const getTipoId = async () => {
  try {
    const { data } = await conexion().get("auth/tipoId");
    return data;
  } catch (error) {
    console.error(error);
  }
};
export const useQuerygeRol = () => {
  return useQuery({
    queryKey: ["rol"],
    queryFn: getRol,
  });
};
export const useQuerygetTipoId = () => {
  return useQuery({
    queryKey: ["tipoid"],
    queryFn: getTipoId,
  });
};
