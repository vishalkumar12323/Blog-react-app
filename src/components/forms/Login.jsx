import React, { useState } from "react";
import { login as authLogin } from "../../store/authSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authService } from "../../services/auth_service";
import { useNavigate } from "react-router-dom";
import { Button, Input, Spinner } from "../index";
import clsx from "clsx";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const session = await authService.login(data);
      if (session) {
        const user = await authService.getSession();
        if (user) {
          const userData = {
            id: user.$id,
            name: user.name,
            email: user.email,
          };
          dispatch(authLogin(userData));
          reset();
          navigate("/");
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      navigate("/login");
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="w-[80%] sm:w-[50%] sm:max-w-[55%]  mx-auto h-auto rounded-lg shadow-lg p-3 dark:bg-slate-800 border border-lime-500/75 flex justify-start items-center flex-col">
          <div className="py-7">
            <h2 className="px-2 text-3xl text-lime-500">Login</h2>
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
              <Button
                type="submit"
                className={clsx(`flex gap-3 justify-center items-center`, {
                  "cursor-not-allowed hover:bg-green-800": loading,
                })}
                disabled={loading}
              >
                {" "}
                {loading && <Spinner width="1rem" height="1rem" />} Login
              </Button>
              <p className="text-[12px] sm:text-[16px] text-center">
                don't have an account,{" "}
                <a
                  href="/signup"
                  className="text-green-500 text-[14px] sm:text[17px] hover:underline"
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
