import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import { FcAddImage, FcStatistics } from "react-icons/fc";
import { FaBezierCurve } from "react-icons/fa6";

const Sidebar = () => {
  const { user } = useAuth();
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div>
        <nav className="flex flex-col overflow-x-hidden bg-teal-800 w-full h-full  px-4 tex-gray-900 border border-purple-900">
          <div className="flex flex-wrap mt-8">
            <div className="w-1/2">
              <img
                src={user?.photoURL}
                className="mx-auto w-20 h-20 rounded-full"
              />
            </div>
            <div className="w-1/2">
              <span className="font-semibold text-white">
                {user?.displayName}
              </span>
              {/* <button className="bg-green-500 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-white hover:text-green-500">
                Premium
              </button> */}
            </div>
          </div>
          <div className="mt-10 mb-4">
            <ul className="ml-4">
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  `flex items-center p-4 my-2 text-lg text-black transition-colors duration-300 transform  hover:bg-teal-300 rounded-lg  ${
                    isActive ? "bg-teal-600" : "text-black"
                  }`
                }
              >
                <li className="mb-2 text-black flex flex-row items-center hover:text-black ">
                  <span>
                    <FaBezierCurve />
                  </span>
                  <span>
                    <span className="ml-2">Statistics</span>
                  </span>
                </li>
              </NavLink>
              <NavLink
                to="addroom"
                end
                className={({ isActive }) =>
                  `flex items-center p-4 my-2 text-lg text-black transition-colors duration-300 transform  hover:bg-teal-300 rounded-lg  ${
                    isActive ? "bg-teal-600" : "text-black"
                  }`
                }
              >
                <li className="mb-2 text-black flex flex-row items-center hover:text-black ">
                  <span>
                    <FcAddImage />
                  </span>
                  <span>
                    <span className="ml-2">Add Room</span>
                  </span>
                </li>
              </NavLink>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
