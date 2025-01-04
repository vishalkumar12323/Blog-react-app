import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <h1 className="text-4xl text-green-500 capitalize">Not Found</h1>;
    } else if (error.status === 401) {
      return (
        <h1 className="text-4xl text-green-500 capitalize">
          You aren&apos;t authorized to see this
        </h1>
      );
    } else if (error.status === 503) {
      return (
        <h1 className="text-4xl text-green-500 capitalize">
          Service Unavailable
        </h1>
      );
    }
    return (
      <div className="w-full h-screen flex justify-center items-center bg-slate-50/40 dark:bg-slate-800">
        <span className="text-4xl text-green-500 capitalize">
          something went wrong, please try again
        </span>
      </div>
    );
  }
};

export default ErrorPage;
