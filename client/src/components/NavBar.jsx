import React from "react";
import { useAuthContext } from "../context/AuthContext";
import UserProfile from "./UserProfile";

const NavBar = () => {
  const { user } = useAuthContext();
  const menuItems = [
    {
      name: "Search",
      url: "/",
    },
    {
      name: "Add Product",
      url: "/add",
    },
    {
      name: "About Us",
      url: "/aboutus",
    },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {menuItems.map((item) => (
              <li key={item.url}>
                <a href={item.url}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="/">
          DIY STORE
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          {menuItems.map((item) => (
            <li key={item.url}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (
          <div>
            <UserProfile />
          </div>
        ) : (
          <div className="space-x-2">
            <a href="/signUp" className="btn btn-outline btn-primary">
              Register
            </a>
            <a href="/login" className="btn btn-outline btn-secondary">
              Login
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
