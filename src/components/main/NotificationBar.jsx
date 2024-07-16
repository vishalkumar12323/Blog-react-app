import { useState, useEffect } from "react";

const NotificationBar = () => {
  const [notifications, setNotifications] = useState([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (notifications.length > 0) {
      setAnimate(true);
      setTimeout(() => {
        setAnimate(false);
      }, 5000); // 5 seconds
    }
  }, [notifications]);

  const addNotification = () => {
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      {
        id: Math.random(),
        message: "Error Notification",
      },
    ]);
  };

  const removeNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  const handleDismiss = (id) => {
    removeNotification(id);
  };

  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-4 left-2">
        <button onClick={addNotification}>add notification</button>
      </div>
      <div className="absolute top-4 right-2">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`notification bg-red-500 text-white px-4 py-2 rounded-md shadow-md z-50 flex justify-between items-center gap-3 duration-500 transition-transform ${
              animate ? "animate-fadeIn" : ""
            }`}
          >
            <p className="text-sm select-none">{notification.message}</p>
            <button
              className="text-white p-1"
              onClick={() => handleDismiss(notification.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationBar;
