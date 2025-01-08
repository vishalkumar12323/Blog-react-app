import React, { useState } from "react";
import { Button, Input } from "../index";
import { authService } from "../../services/auth_service";
import { db } from "../../services/db_service.ts";
import { logout } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MdAdd,
  MdClose,
  MdLogout,
  MdArrowBack,
  MdDelete,
} from "react-icons/md";
import { AppDispatch } from "../../store/store.ts";
import { IUserProps } from "../../lib/definations.ts";
import { LuPencil } from "react-icons/lu";

const ProfileImage = ({
  setIsEditable,
}: {
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [profileImage, setProfileImage] = useState();
  return (
    <>
      <div className="p-3">
        <button
          onClick={() => setIsEditable(false)}
          className="bg-slate-200 dark:bg-slate-900 hover:bg-slate-900/50 dark:hover:bg-slate-900/50 p-1 rounded-full transition-colors"
        >
          <MdArrowBack size={20} />
        </button>

        <div className="flex flex-col px-4 mt-2">
          <span>Profile picture</span>
          <p>
            A picture helps people recognize you and lets you know when you’re
            signed in to your account.
          </p>
        </div>

        <div className="w-24 h-24 rounded-full mx-auto mt-2">
          {profileImage ? (
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-full h-auto rounded-full select-none"
            />
          ) : (
            <span className="text-[3rem] rounded-full font-semibold flex justify-center items-center w-full h-full bg-slate-200 dark:bg-slate-900 hover:bg-slate-900/50 dark:hover:bg-slate-900/50">
              {" "}
              v{/* {user.name?.slice(0, 1).toUpperCase()}{" "} */}
            </span>
          )}
        </div>

        <div className="flex justify-center gap-1 mt-5 mx-auto w-3/4 h-16">
          <button className="bg-slate-200 dark:bg-slate-900 hover:bg-slate-900/50 dark:hover:bg-slate-900/50 w-full rounded-l-full flex justify-center items-center gap-3 transition-colors">
            <LuPencil size={20} />
            Change
          </button>
          <button className="bg-slate-200 dark:bg-slate-900 hover:bg-slate-900/50 dark:hover:bg-slate-900/50 w-full rounded-r-full flex justify-center items-center gap-3 transition-colors">
            <MdDelete size={20} />
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

const UserProfile = ({ user }: { user: IUserProps }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [updatedName, setUpdatedName] = useState<string>(user?.name);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  return (
    <>
      <div className="z-50">
        <Button
          onClick={() => setIsMenuVisible((prevState) => !prevState)}
          className="btn flex justify-center items-center cursor-pointer py-[0.54rem!important] px-[0.80rem!important]"
        >
          {user.profileImageId ? (
            <img
              src={db.getUserProfile(user.profileImageId).toString()}
              alt="user-profile"
              className="w-full h-auto rounded-full"
            />
          ) : (
            <span className="text-[1.2rem] font-semibold">
              {" "}
              v{/* {user.name?.slice(0, 1).toUpperCase()}{" "} */}
            </span>
          )}
        </Button>
      </div>

      {isMenuVisible && (
        <div className="w-[28rem] h-[20rem] rounded-2xl dark:bg-slate-800 bg-white shadow-xl absolute right-10 top-12">
          {isEditable ? (
            <ProfileImage setIsEditable={setIsEditable} />
          ) : (
            <>
              <div className="flex justify-center gap-4 p-4 relative">
                <p className="text-xl dark:text-white">
                  {" "}
                  vishalkkumar342@gmail.com{" "}
                </p>
                <button
                  onClick={() => setIsMenuVisible(false)}
                  className="w-fit h-fit p-2 rounded-full cursor-pointer bg-slate-200 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-500 transition-colors absolute right-2 top-2"
                >
                  {" "}
                  <MdClose size={22} />{" "}
                </button>
              </div>

              <div className="w-24 h-24 rounded-full mx-auto mt-2 relative">
                {user.profileImageId ? (
                  <img
                    src={db.getUserProfile(user.profileImageId).toString()}
                    alt="profile"
                    className="w-full h-auto rounded-full select-none"
                  />
                ) : (
                  <span className="text-[3rem] rounded-full font-semibold flex justify-center items-center w-full h-full bg-slate-200 dark:bg-slate-900 hover:bg-slate-900/50 dark:hover:bg-slate-900/50">
                    {" "}
                    v{/* {user.name?.slice(0, 1).toUpperCase()}{" "} */}
                  </span>
                )}

                <button
                  onClick={() => setIsEditable(true)}
                  className="absolute right-1 bottom-[-0.50rem] w-fit h-fit p-1 rounded-full cursor-pointer bg-slate-200 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-500 transition-colors"
                >
                  {" "}
                  <LuPencil size={15} />{" "}
                </button>
              </div>

              <div className="mt-2">
                <p className="text-center text-[22px]"> vishal kumar </p>
              </div>
              <div className="flex justify-center gap-1 mt-5 mx-auto w-3/4 h-16">
                <button className="bg-slate-200 dark:bg-slate-900 hover:bg-slate-900/50 dark:hover:bg-slate-900/50 w-full rounded-l-full flex justify-center items-center gap-3 transition-colors">
                  <MdAdd size={22} />
                  Add Account
                </button>
                <button className="bg-slate-200 dark:bg-slate-900 hover:bg-slate-900/50 dark:hover:bg-slate-900/50 w-full rounded-r-full flex justify-center items-center gap-3 transition-colors">
                  <MdLogout size={22} />
                  Log Out
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default UserProfile;
