import React, { useState } from "react";
import { login as authLogin } from "../store/authSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authService } from "../services/auth_service";
import { Button, Input } from "./index";

const LoginPage = () => {
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
      <div className="max-w-[33%] w-1/3 mx-auto rounded-lg shadow-lg h-auto p-4 border">
        <h2 className="py-1 px-2 mb-3 text-2xl">
          Login to{" "}
          <span className="font uppercase text-[4xl] font-semibold">
            blogify
          </span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-1 px-2">
          <Input
            label="email"
            type="email"
            placeholder="enter your email..."
            autoComplete="off"
            {...register("email", { required: "please enter a valid email." })}
          />
          <Input
            label="password"
            type="password"
            placeholder="enter your password..."
            autoComplete="off"
            {...register("password", {
              min: 8,
              max: 16,
              required: "please enter valid password.",
            })}
          />

          <div className="flex justify-between items-center">
            <Button type="submit">Login</Button>
            <p className="text-[14px]">
              don't have an account,{" "}
              <a href="#" className="text-blue-500 hover:underline">
                click here
              </a>{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;