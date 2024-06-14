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

  const login = async (data) => {
    setError(null);
    try {
      const session = await authService.login(data);
      if (session) {
        const user = await authService.getSession();
        if (user) {
          dispatch(authLogin(user));
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      <div>
        <h1>Login Page</h1>
      </div>
    </>
  );
};

export default Login;
