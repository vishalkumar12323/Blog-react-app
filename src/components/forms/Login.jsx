import { useState } from "react";
import { getSession } from "../../store/authSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authService } from "../../services/auth_service";
import { Link, useNavigate } from "react-router-dom";
import { DefaultButton, Input, Spinner } from "../index";
import clsx from "clsx";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const session = await authService.login(data);
      if (session) {
        dispatch(getSession());
        navigate("/");
        reset();
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center">
        <div className="w-[80%] sm:w-[50%] sm:max-w-[50%]  mx-auto h-auto rounded-lg shadow-lg p-3 dark:bg-slate-800 border border-pink-500 to-orange-500 flex justify-start items-center flex-col">
          <div className="py-7">
            <h2 className="px-2 text-3xl bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-transparent bg-clip-text">
              Login
            </h2>
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
              <DefaultButton
                type="submit"
                className={clsx(`gap-3`, {
                  "cursor-not-allowed hover:bg-lime-700": loading,
                })}
                disabled={loading}
              >
                {loading && <Spinner width="1rem" height="1rem" />} Login
              </DefaultButton>
              <p className="text-[17px] md:text-[16px] text-center">
                don't have an account,
                <Link
                  to="/signup"
                  className="bg-gradient-to-br from-pink-500 to-orange-400 text-transparent bg-clip-text text-[17px] sm:text[17px] hover:underline"
                >
                  click here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
