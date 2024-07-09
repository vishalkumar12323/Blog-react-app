import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();

  console.error(error);
  return <div>🛺</div>;
};

export default ErrorBoundary;
