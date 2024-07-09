import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return <h1 className="text-4xl text-green-500 capitalize">Not Found</h1>;
  }

  if (error.status === 401) {
    return (
      <h1 className="text-4xl text-green-500 capitalize">
        You aren't authorized to see this
      </h1>
    );
  }

  if (error.status === 503) {
    return (
      <h1 className="text-4xl text-green-500 capitalize">
        Service Unavailable
      </h1>
    );
  }
  return (
    <div className="text-4xl text-green-500 capitalize">
      something went wrong, please try again
    </div>
  );
};

export default ErrorBoundary;
