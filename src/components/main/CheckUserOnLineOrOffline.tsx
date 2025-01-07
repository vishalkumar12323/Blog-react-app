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
        <div className="w-full h-[85vh] flex justify-center flex-col">
          <p className="text-2xl text-center">
            oop&apos;s &#9785; look like you are offline, please connect to the
            internet
          </p>

          <div className="mx-auto mt-4 text-[14px]">
            <span>Try:</span>
            <ul className="list-disc pl-8">
              <li>Checking the network cables, modem, and router</li>
              <li>Reconnecting to Wi-Fi</li>
              <li>Running Windows Network Diagnostics</li>
            </ul>
            <p className="mt-3">ERR_INTERNET_DISCONNECTED</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckUserOnLineOrOffline;
