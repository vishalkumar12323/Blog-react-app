import React, { useState } from "react";
import { login as authLogin } from "../store/authSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authService } from "../services/auth_service";
import { Button, Input } from "./index";

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    // setError(null);
    console.log(data);
    // try {
    //   const session = await authService.login(data);
    //   if (session) {
    //     const user = await authService.getSession();
    //     if (user) {
    //       dispatch(authLogin(user));
    //     }
    //   }
    // } catch (error) {
    //   setError(error.message);
    // }
  };
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="w-[90%] sm:w-[50%] sm:max-w-[55%]  mx-auto h-auto rounded-lg shadow-lg p-3 dark:bg-slate-800 border border-green-500/75 flex justify-start items-center flex-col">
          <div className="py-7">
            <h2 className="px-2 text-3xl text-green-500">Login</h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="px-2 h-full w-3/4 flex items-center justify-start flex-col"
          >
            <Input
              label="email"
              type="email"
              placeholder="Email"
              autoComplete="off"
              {...register("email", {
                required: "please enter a valid email.",
              })}
              className={"py-4"}
            />
            <Input
              label="password"
              type="password"
              placeholder="Password"
              autoComplete="off"
              {...register("password", {
                min: 8,
                max: 16,
                required: "please enter valid password.",
              })}
              className={"py-4 md:mb-4"}
            />

            <div className="w-full flex justify-center gap-3 items-center flex-col">
              <Button type="submit" className={"text-2xl"}>
                Login
              </Button>
              <p className="text-[12px] sm:text-[16px] text-center">
                don't have an account,{" "}
                <a
                  href="#"
                  className="text-green-500 text-[12px] sm:text[17px] hover:underline"
                >
                  click here
                </a>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
