import { useState, useEffect } from "react";
import { Container } from "../index";

const CheckUserOnLineOrOffline = ({ children }) => {
  const [isOnLine, setIsOnLine] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnLine = () => setIsOnLine(true);
    const hadleOffLine = () => setIsOnLine(false);
    window.addEventListener("online", handleOnLine);
    window.addEventListener("offline", hadleOffLine);

    return () => {
      window.removeEventListener("online", handleOnLine);
      window.removeEventListener("offline", hadleOffLine);
    };
  }, [isOnLine]);
  return (
    <>
      {isOnLine ? (
        children
      ) : (
        <Container className="min-h-[80vh] justify-center items-center">
          Oop&apos;s &#9785; look like you are offline, Please connect to the
          internet and try again
        </Container>
      )}
    </>
  );
};

export default CheckUserOnLineOrOffline;
