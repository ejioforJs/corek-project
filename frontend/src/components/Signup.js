import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Signup = ({ sidelogin, setSidelogin, sidesignup, setSidesignup }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loginSubmitHandler = () => {};

  return (
    <div
      className={`fixed flex items-center justify-center ${
        sidesignup ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } inset-0 bg-black duration-500 z-50 bg-opacity-60 overflow-y-auto h-full w-full`}
    >
      <div
        onClick={() => {
          setSidesignup(false);
          setSidelogin(false);
        }}
        className="absolute text-2xl font-bold text-white cursor-pointer nav-hover top-10 right-8"
      >
        <AiOutlineClose className="font-bold" />
      </div>
      <div className="w-1/3 bg-white py-7 px-10 text-gray-500 text-center">
        <p className="text-black text-xl font-semibold">
          Register a new account
        </p>
        <form className="text-gray-500" onSubmit={loginSubmitHandler}>
          <div className="text-sm py-2 mt-5">
            <input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
              name="username"
              type="text"
              placeholder="username or email"
            />
          </div>
          <div className="text-sm py-2">
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border py-2 w-full px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
              name="email"
              type="email"
              placeholder="email"
            />
          </div>
          <div className="text-sm py-2">
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border py-2 px-3 w-full outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
              name="password"
              type="password"
              placeholder="password"
            />
          </div>
          <div className="text-sm py-2">
            <input
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border py-2 px-3 w-full outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
              name="confirmPassword"
              type="confirmPassword"
              placeholder="confirm password"
            />
          </div>
          <div className="py-5">
            <button
              type="submit"
              className="w-full text-black border border-corekColor1 hover:bg-white bg-corekColor1 text-sm font-bold px-4 rounded py-2 duration-500 mb-2"
            >
              LOGIN
            </button>
            <div className="text-sm">
              Are you a member?{" "}
              <span
                onClick={() => {
                  setSidesignup(false);
                  setSidelogin(true);
                }}
                className="text-corekColor2 cursor-pointer hover:underline"
              >
                Login now
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
