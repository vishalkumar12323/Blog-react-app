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
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="w-[90%] sm:w-[50%] sm:max-w-[55%] h-auto rounded-lg shadow-lg p-3 dark:bg-slate-800 border border-green-500/75 flex justify-start items-center flex-col">
          <div className="py-5">
            <h2 className="px-2 text-3xl text-green-500">Signup</h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-full w-3/4 flex items-center justify-start flex-col"
          >
            <Input
              label="name"
              type="text"
              placeholder="Enter your name..."
              {...register("name", {
                min: 6,
                max: 15,
              })}
              autoComplete="off"
              className={"py-3 sm:py-4"}
            />
            <Input
              label="email"
              type="email"
              placeholder="Enter your email..."
              {...register("email", {
                required: "please enter valid email",
              })}
              autoComplete="off"
              className={"py-3 sm:py-4"}
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
              className={"py-3 sm:py-4 md:mb-4"}
            />

            <div className="w-full flex justify-center gap-2 items-center flex-col">
              <Button type="submit">Register</Button>
              <p className="text-[12px] md:text-[16px] text-center">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-green-500 text-[12px] sm:text-[17px]  hover:underline"
                >
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
