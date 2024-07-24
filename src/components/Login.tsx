import { login } from "../store/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "@tanstack/react-router";
import img from "../../public/logo-sena-verde.jpg";

type Response = {
  username: string;
  password: string;
};

const LoginComponen = () => {
  const navigate = useNavigate();
  const [messageError, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Response>();
  const useMutationLogin = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log("Usuario autorizado", data);
      navigate({ to: "/home" });
    },
    onError: (error: Error) => {
      console.log("Error:", error.message);
      setErrorMessage(error.message);
    },
  });
  const onsubmitData = (data: Response) => {
    useMutationLogin.mutate(data);
    console.log("", data);
  };
  const errorApi = messageError ? (
    <p className="text-red-300 flex ">{messageError}</p>
  ) : (
    ""
  );

  return (
    <>
      <div className="flex w-full  flex-col  items-center">
        <div className="flex flex-col  justify-start w-full pl-4 pt-4  ">
          <div
            className="w-[85px] h-[85px] bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </div>
        <div className=" w-[450px] mt-48  flex h-[450px] items-center shadow-2xl rounded-lg">
          <form
            className=" flex flex-col gap-2 md:w-[450px] h-[350px] w-fit justify-between  pl-4"
            onSubmit={handleSubmit(onsubmitData)}
          >
            <div className="w-full flex justify-center ">
              <h1 className="text-xl font-bold">Coffco</h1>
            </div>
            {errorApi}
            <label>Nombre Usuario:</label>

            <input
              className="text-black  h-[36px] rounded-lg  outline outline-3 outline-none  pl-3
        border-solid border-2 w-96"
              type="text"
              id="username"
              placeholder="Ejemplo Miguel07"
              {...register("username", {
                required: {
                  value: true,
                  message: `nombre es obligatorio`,
                },
              })}
            />
            {errors.username && (
              <p className="text-red-400">{errors.username.message}</p>
            )}

            <label>Contraseña:</label>

            <input
              type="password"
              className="text-black w-96 h-[36px] rounded-lg  outline outline-3 outline-none  pl-3
        border-solid border-2 "
              id="password"
              {...register("password", {
                required: {
                  value: true,
                  message: `la contraseña es obligatorio`,
                },
              })}
            />
            <span>
              {errors.password && (
                <p className="text-red-400">{errors.password.message}</p>
              )}
            </span>

            <input
              className="bg-blue-200 rounded-lg w-32 h-9"
              type="submit"
              value="Entrar"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginComponen;
