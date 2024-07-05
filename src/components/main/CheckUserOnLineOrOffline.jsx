import React, { useState, useEffect } from "react";

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
        <div>
          oop's &#9785; look like you are offline, please connect to the
          internet
        </div>
      )}
    </>
  );
};

export default CheckUserOnLineOrOffline;
