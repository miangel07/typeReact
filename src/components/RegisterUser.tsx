import { useForm } from "react-hook-form";
import { useQuerygeRol } from "../store/api/EnumApi";
import { useQuerygetTipoId } from "../store/api/EnumApi";
import { useMutation } from "@tanstack/react-query";
import { UserRegister } from "../store/api/auth";

type ResponseUser = {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  rol: string;
  tipo_documento: string;
  numero_documento: Number;
};
type props ={
    closeModal: () => void;
}
const RegisterUser = ({closeModal}:props) => {
  const { data: rol, isLoading, isError, error } = useQuerygeRol();
  const { data: tipoId, isLoading: loandId } = useQuerygetTipoId();
  const { register, handleSubmit,reset } = useForm<ResponseUser>();
  const useMutationregister = useMutation({
    mutationFn: UserRegister,
    onSuccess: (data) => {
      alert(data);
      reset();
      closeModal();
    },
    onError: (error: Error) => {
      console.log("Error:", error.message);
    },
  });
  if (isLoading && loandId) {
    return <div>Cargando...</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  const onSubmitUser = (data: ResponseUser) => {
    useMutationregister.mutate(data);
  };
 
  return (
    <form onSubmit={handleSubmit(onSubmitUser)} className="flex flex-col gap-3 items-center">
      <div className="w-[558px]  flex  flex-col justify-between items-center">
        <label>Nombre usuario</label>
        <input
          className="text-black  h-[36px] rounded-lg  outline outline-3 outline-none  pl-3
    border-solid border-2 w-96"
          type="text"
          id="username"
          {...register("username", {
            required: {
              value: true,
              message: `nombre es obligatorio`,
            },
          })}
        />
      </div>
      <div className="w-[558px]  flex  flex-col justify-between items-center">
        <label>Nombres</label>
        <input
          className="text-black  h-[36px] rounded-lg  outline outline-3 outline-none  pl-3
    border-solid border-2 w-96"
          type="text"
          id="first_name"
          {...register("first_name", {
            required: {
              value: true,
              message: `nombre es obligatorio`,
            },
          })}
        />
      </div>
      <div className="w-[558px]  flex  flex-col justify-between items-center">
        <label>Apellidos</label>
        <input
          className="text-black  h-[36px] rounded-lg  outline outline-3 outline-none  pl-3
    border-solid border-2 w-96"
          type="text"
          id="last_name"
          {...register("last_name", {
            required: {
              value: true,
              message: `nombre es obligatorio`,
            },
          })}
        />
      </div>
      <div className="w-[558px]  flex  flex-col justify-between items-center">
        <label>Email</label>
        <input
          className="text-black  h-[36px] rounded-lg  outline outline-3 outline-none  pl-3
    border-solid border-2 w-96"
          type="email"
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: `nombre es obligatorio`,
            },
          })}
        />
      </div>

      <div className="w-[558px]  flex  flex-col justify-between items-center">
        <label>contraseña</label>
        <input
          className="text-black  h-[36px] rounded-lg  outline outline-3 outline-none  pl-3
    border-solid border-2 w-96"
          type="text"
          id="password"
          placeholder=""
          {...register("password", {
            required: {
              value: true,
              message: `nombre es obligatorio`,
            },
          })}
        />
      </div>
      <div className="w-[558px]  flex  flex-col justify-between items-center">
        <label>Rol</label>
        <select
          {...register("rol", {
            required: {
              value: true,
              message: `nombre es obligatorio`,
            },
          })}
        >
          <option value="">Seleccione un rol</option>
          {rol?.map((item: string, index: number) => (
            <option key={index} value={item[0]}>
              {item[0]}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[558px]  flex  flex-col justify-between items-center">
        <label>tipo Documento</label>
        <select
          {...register("tipo_documento", {
            required: {
              value: true,
              message: `nombre es obligatorio`,
            },
          })}
        >
          <option value="">Seleccione Tipo Documento</option>
          {tipoId?.map((item: string, index: number) => (
            <option key={index} value={item[0]}>
              {item[0]}
            </option>
          ))}
        </select>
      </div>
      <div className="w-[558px]  flex  flex-col justify-between items-center">
        <label>Numero Documento</label>
        <input
          className="text-black  h-[36px] rounded-lg  outline outline-3 outline-none  pl-3
    border-solid border-2 w-96"
          type="number"
          id="numero_documento"
          {...register("numero_documento", {
            required: {
              value: true,
              message: `nombre es obligatorio`,
            },
          })}
        />
      </div>

      <input type="submit" value={"enviar"} />
    </form>
  );
};

export default RegisterUser;
