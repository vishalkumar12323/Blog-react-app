import { useEffect, useState } from "react";
import { Button, Input } from "../components";
import { authService } from "../services/auth_service";
import { logout, getAuthState } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user } = useSelector(getAuthState);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [updatedName, setUpdatedName] = useState(user?.name);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const updateUserName= () => {

  // }

  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <>
      <div className="z-50">
        <Button
          onClick={() => setIsMenuVisible((prevState) => !prevState)}
          className="btn py-[0.30rem] px-[0.80rem] flex justify-center items-center cursor-pointer"
        >
          {user.profile ? (
            <img src="..." alt="user-profile" className="w-full h-auto" />
          ) : (
            <span className="text-[1.2rem] font-semibold">
              {" "}
              {user.name?.slice(0, 1).toUpperCase()}{" "}
            </span>
          )}
        </Button>
      </div>

      {isMenuVisible && (
        <main
          className="w-[95vw] h-screen absolute top-0 right-0"
          onClick={() => setIsMenuVisible(false)}
        >
          <div
            className="absolute top-12 right-4 sm:w-60 h-auto border rounded-md border-green-500 z-50 p-3"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ul className="w-full flex flex-col justify-center items-start">
              <div className="w-full">
                <li>Username</li>
                <li className="px-1 flex justify-between w-full items-start gap-2">
                  {isEditable ? (
                    <Input
                      type="text"
                      className="bg-transparent py-[0.30rem] transition rounded"
                      autoComplete="off"
                      value={updatedName}
                      name="updatedName"
                      onChange={(e) => setUpdatedName(e.target.value)}
                    />
                  ) : (
                    <span className="px-1 py-[0.30rem]">{user.name}</span>
                  )}{" "}
                  <Button
                    type="button"
                    className="px-[0.70rem] py-[0.30rem] btn"
                    onClick={() => setIsEditable((prevState) => !prevState)}
                  >
                    <span className="dark:text-white text-black">
                      {isEditable ? "d" : "e"}
                    </span>
                  </Button>{" "}
                </li>
              </div>
              <div>
                <li>Email</li>
                <li className="px-1">{user.email}</li>
              </div>
              <Button
                type="button"
                className={"mt-2"}
                onClick={() => {
                  authService.logout();
                  dispatch(logout());
                  setIsMenuVisible(false);
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            </ul>
          </div>
        </main>
      )}
    </>
  );
};

export default UserProfile;
