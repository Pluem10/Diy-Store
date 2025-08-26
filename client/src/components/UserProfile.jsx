import React from "react";
import { useAuthContext } from "../context/AuthContext";

const UserProfile = () => {
  const { logout } = useAuthContext();

  const handleLogOut = () => {
    logout();
  };

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="User Avatar"
            src="https://i.pinimg.com/736x/e1/93/22/e1932207df57edf7a4349c2cdc26f0d0.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
      >
        <li>
          <button className="justify-between w-full text-left">
            Profile
            <span className="badge">New</span>
          </button>
        </li>
        <li>
          <button className="w-full text-left">Settings</button>
        </li>
        <li>
          <button className="w-full text-left" onClick={handleLogOut}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserProfile;
