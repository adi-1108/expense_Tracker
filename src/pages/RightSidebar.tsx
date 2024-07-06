import React, { useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { signin, signout } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const RightSidebar = () => {
  const user = useSelector((state: any) => state.user.user);
  const [profileOptions, setProfileOptions] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOptionClick = () => {
    setProfileOptions(!profileOptions);
  };

  const handlelogout = () => {
    dispatch(signout());
    console.log("User Signed Out");
    navigate("/signin");
  };
  return (
    <div className="mt-20 px-10">
      <div className="flex items-center justify-between">
        <label>Profile</label>
        <EllipsisVerticalIcon
          onClick={handleOptionClick}
          className="h-6 w-6 cursor-pointer rounded-3xl text-white hover:bg-slate-900 active:scale-105"
        />

        {profileOptions && (
          <div
            onClick={handlelogout}
            className="absolute right-10 mt-28 w-48 cursor-pointer rounded-md border border-gray-300 bg-red-700 shadow-lg transition-all hover:bg-red-800"
          >
            <button className="px-4 py-2">
              <label className="font-semibold">Logout </label>
            </button>
          </div>
        )}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <UserCircleIcon className="h-28 w-28 text-gray-500" />
      </div>

      <div className="mt-4 flex items-center justify-center gap-5">
        <label className="font-semibold" htmlFor="">
          {user?.name}
        </label>
        <CheckIcon className="h-6 w-6 rounded-full bg-blue-700 text-white" />
      </div>

      <div className="mt-10 flex items-center justify-between gap-5">
        <label className="text-xl font-semibold" htmlFor="">
          Transcations
        </label>
        <label
          className="cursor-pointer font-semibold text-blue-500 underline"
          htmlFor=""
        >
          See More
        </label>
      </div>
    </div>
  );
};

export default RightSidebar;
