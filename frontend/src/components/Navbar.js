import React, { useContext, useEffect, useReducer, useState } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { Link, useLocation, useParams } from "react-router-dom";
import image from "../assets/corek.png";
import { Store } from "../Store";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";
import { IoIosArrowDown } from "react-icons/io";

const reducer = (state, action) => {
  switch (action.type) {
    case "HOME_SUCCESS":
      return {
        ...state,
        home: true,
        courses: false,
        aboutus: false,
        contactus: false,
      };
    case "COURSES_SUCCESS":
      return {
        ...state,
        home: false,
        courses: true,
        aboutus: false,
        contactus: false,
      };
    case "ABOUTUS_SUCCESS":
      return {
        ...state,
        home: false,
        courses: false,
        aboutus: true,
        contactus: false,
      };
    case "CONTACTUS_SUCCESS":
      return {
        ...state,
        home: false,
        courses: false,
        aboutus: false,
        contactus: true,
      };
    case "CASES_FALSE":
      return {
        ...state,
        home: false,
        courses: false,
        aboutus: false,
        contactus: false,
      };
    default:
      return state;
  }
};

export default function Navbar() {
  const [{ home, courses, aboutus, contactus }, dispatch] = useReducer(
    reducer,
    {
      home: true,
      courses: false,
      aboutus: false,
      contactus: false,
    }
  );
  const [accountdropdown, setAccountdropdown] = useState(false);

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { addSearch, userInfo } = state;

  const [sidesearch, setSidesearch] = useState(false);
  const [sidelogin, setSidelogin] = useState(false);
  const [sidesignup, setSidesignup] = useState(false);
  const [sideforgotpassword, setSideforgotpassword] = useState(false);
  const [sideresetpassword, setSideresetpassword] = useState(false);
  const [search, setSearch] = useState("");
  const [dashboard, setDashboard] = useState(false);

  const location = useLocation();
  const [hash, setHash] = useState(null);
  const params = useParams();
  const { slug } = params;

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const singlevalue = queryParams.get("hash");
    if (!singlevalue) return;
    setSidesearch(false);
    setSidelogin(false);
    setSidesignup(false);
    setSideforgotpassword(false);
    setHash(singlevalue);
    setSideresetpassword(true);
  }, [location.search]);

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch({ type: "HOME_SUCCESS" });
    } else if (location.pathname === "/courses") {
      dispatch({ type: "COURSES_SUCCESS" });
    } else if (location.pathname === "/aboutus") {
      dispatch({ type: "ABOUTUS_SUCCESS" });
    } else if (location.pathname === "/contactus") {
      dispatch({ type: "CONTACTUS_SUCCESS" });
    } else if (location.pathname === "/dashboardscreen") {
      setDashboard(true);
    } else {
      dispatch({ type: "CASES_FALSE" });
    }
  }, [location, slug]);
  console.log(location.pathname);

  return (
    <nav className="bg-transparent z-40 border-gray-200 px-2 sm:px-16 py-6 dark:bg-gray-900">
      <Login
        sidelogin={sidelogin}
        setSidelogin={setSidelogin}
        setSidesignup={setSidesignup}
        setSideforgotpassword={setSideforgotpassword}
      />
      <Signup
        setSidelogin={setSidelogin}
        sidesignup={sidesignup}
        setSidesignup={setSidesignup}
      />
      <ForgotPassword
        sideforgotpassword={sideforgotpassword}
        setSideforgotpassword={setSideforgotpassword}
        sideresetpassword={sideresetpassword}
        setSideresetpassword={setSideresetpassword}
      />
      <ResetPassword
        sideforgotpassword={sideforgotpassword}
        setSideforgotpassword={setSideforgotpassword}
        sideresetpassword={sideresetpassword}
        setSideresetpassword={setSideresetpassword}
        hash={hash}
      />
      <div
        className={`fixed flex items-center justify-center ${
          sidesearch
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        } inset-0 bg-black duration-500 z-50 bg-opacity-60 overflow-y-auto h-full w-full`}
      >
        <div
          onClick={() => setSidesearch(false)}
          className="absolute text-2xl font-bold text-white cursor-pointer nav-hover top-10 right-8"
        >
          <AiOutlineClose className="font-bold" />
        </div>
        <div className="w-full text-gray-500">
          <div className="flex flex-col justify-center w-full gap-3 py-4 text-sm">
            <input
              required
              autoFocus
              value={search}
              onChange={(e) => {
                setSearch(e.target.value.toLowerCase());
                ctxDispatch({ type: "ADD_SEARCH", payload: search });
              }}
              className="w-4/5 py-2 mx-auto text-xl text-center text-white duration-500 bg-transparent border-2 border-transparent outline-none border-b-white focus:border-b-corekColor1"
              name="search"
              type="text"
              placeholder="type keyword(s) here"
            />
          </div>
          <div
            onClick={() => setSidesearch(false)}
            className="flex flex-col justify-center w-full gap-3 py-4 text-sm"
          >
            <Link
              to="/courses"
              className="py-3 mx-auto text-sm font-bold text-black duration-500 rounded outline-none bg-corekColor1 px-7 hover:bg-transparent hover:border-2 hover:border-corekColor1"
            >
              SEARCH
            </Link>
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
          <img src={image} className="h-6 mr-3 sm:h-10 z-40" alt="Corek Logo" />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden bg-transparent z-40 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden md:flex flex-row md:w-auto" id="navbar-default">
          <ul className="flex flex-row items-center space-x-8 text-sm font-medium px-4 border-r bg-transparent z-40">
            <li
              className={home ? "text-corekColor1" : "textHover text-white"}
              onClick={() => dispatch({ type: "HOME_SUCCESS" })}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={courses ? "text-corekColor1" : "textHover text-white"}
              onClick={() => dispatch({ type: "COURSES_SUCCESS" })}
            >
              <Link to="/courses">Courses</Link>
            </li>
            <li
              className={aboutus ? "text-corekColor1" : "textHover text-white"}
              onClick={() => dispatch({ type: "ABOUTUS_SUCCESS" })}
            >
              <Link to="/aboutus">About Us</Link>
            </li>
            <li
              className={
                contactus ? "text-corekColor1" : "textHover text-white"
              }
              onClick={() => dispatch({ type: "CONTACTUS_SUCCESS" })}
            >
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
          <ul className="flex flex-row items-center space-x-6 text-sm font-medium pl-8 bg-transparent z-40">
            <li
              className="cursor-pointer"
              onClick={() => setSidesearch(!sidesearch)}
            >
              <span
                className="text-white flex items-center text-xl textHover"
                aria-current="page"
              >
                <AiOutlineSearch />
              </span>
            </li>
            {userInfo ? (
              <li
                onMouseLeave={() => {
                  setAccountdropdown(false);
                }}
              >
                <li
                  onMouseEnter={() => {
                    setAccountdropdown(true);
                  }}
                  className="flex flex-row items-center gap-1 cursor-pointer text-black bg-corekColor1 px-4 py-1.5 rounded-md hover:bg-transparent border border-corekColor1 hover:text-white duration-300"
                >
                  <span>PROFILE</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </li>
                <div
                  className={`bg-white text-base absolute z-0 overflow-hidden duration-500 rounded shadow-xl mb-1
          ${accountdropdown ? "max-h-40 py-4 px-6" : "max-h-0"}`}
                >
                  <ul className="flex flex-col gap-3 text-sm">
                    <li
                      className={`textHover ${
                        dashboard ? "text-corekColor1" : ""
                      }`}
                    >
                      <Link to="/dashboardscreen">Dashboard</Link>
                    </li>
                    <li className="textHover">
                      <Link
                        onClick={() => {ctxDispatch({ type: "USER_SIGNOUT" });
                      setAccountdropdown(false)
                      }}
                        to="/"
                      >
                        Log Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <li>
                <button
                  onClick={() => setSidelogin(true)}
                  className="text-black bg-corekColor1 px-4 py-1.5 rounded-md hover:bg-transparent border border-corekColor1 hover:text-white duration-500"
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
