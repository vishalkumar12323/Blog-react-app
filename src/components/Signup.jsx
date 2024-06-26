import React from "react";
import { Button, Input } from "./index";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="w-[44%] h-auto max-w-[42%] mx-auto rounded-lg shadow-lg p-4 dark:bg-slate-800">
          <h2 className="py-1 px-2 mb-3 text-2xl">
            Register to{" "}
            <span className="font uppercase text-[4xl] font-semibold">
              blogify
            </span>
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-1 px-2">
            <Input
              label="name"
              type="text"
              placeholder="Enter your name..."
              {...register("name", {
                min: 6,
                max: 15,
              })}
              autoComplete="off"
            />
            <Input
              label="email"
              type="email"
              placeholder="Enter your email..."
              {...register("email", {
                required: "please enter valid email",
              })}
              autoComplete="off"
            />
            <Input
              label="password"
              type="password"
              placeholder="Create your password..."
              {...register("password", {
                min: 8,
                max: 16,
                required: "please enter a valid password",
              })}
              autoComplete="off"
            />

            <div className="w-full flex justify-between gap-2 items-center">
              <Button type="submit">Register</Button>
              <p className="text-[13.5px]">
                Already have an account?{" "}
                <a href="/login" className="text-blue-500 hover:underline">
                  Login instead.
                </a>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
