import React from "react";
import { Button, Typography } from "@material-tailwind/react";

import { NavLink } from "react-router-dom";
const Nav = () => {
  const user = null;
  let navItems = (
    <>
      <NavLink to="/">
        <li>
          <Button color="cyan" className="btn sans">
            Home
          </Button>
        </li>
      </NavLink>
      <NavLink to="/rooms">
        <li>
          <Button color="cyan" className="btn pop">
            Rooms
          </Button>
        </li>
      </NavLink>
      <NavLink to="/bookings">
        <li>
          {" "}
          <Button color="cyan" className="btn pop">
            My Bookings
          </Button>
        </li>
      </NavLink>
      <NavLink to="/about">
        <li>
          {" "}
          <Button color="cyan" className="btn pop">
            About Us
          </Button>
        </li>
      </NavLink>
      <NavLink to="/contact">
        <li>
          {" "}
          <Button color="cyan" className="btn pop">
            Contact Us
          </Button>
        </li>
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* <ThemeToggle /> */}

              {navItems}
            </ul>
          </div>
          <NavLink to="/">
            <span className="btn btn-ghost text-xl jost">
              The Wandering Fork
            </span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
          <div className="ml-8">{/* <ThemeToggle /> */}</div>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="Button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={
                      user?.photoURL ||
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Typography className="pop">
                    {user?.displayName || "User not found"}
                  </Typography>
                </li>
                <li>
                  <NavLink
                    to="/myaddedfooditems"
                    color="blue"
                    variant="outlined"
                  >
                    <span className="pop">My added food items</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/addfooditem" color="blue" variant="outlined">
                    <span className="pop">Add a food item</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/myorderedfooditems"
                    color="blue"
                    variant="outlined"
                  >
                    <span className="pop">My ordered food items</span>
                  </NavLink>
                </li>

                <li>
                  <Button color="blue" variant="outlined" onClick={logOut}>
                    <span className="pop">Logout</span>
                  </Button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login">
              <Button color="green" className="btn">
                Login
              </Button>
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
