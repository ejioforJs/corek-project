import axios from "axios";
import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Store } from '../Store.js';
import { getError } from '../utils.js';

const Signup = ({ setSidelogin, sidesignup, setSidesignup }) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {state, dispatch: ctxDispatch} = useContext(Store)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const signupSubmitHandler = async (e) => {
    e.preventDefault();
  if (password !== confirmPassword) {
    toast.error('Password do not match');
    return;
  }
  try {
      const { data } = await axios.post('/api/users/signup', {
        username,
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      setSidesignup(false)
      toast.success("Sign up successfully")
      setUsername("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      setShowPassword(false)
      setShowConfirmPassword(false)
      navigate('/dashboardscreen');
    } catch (err) {
      toast.error(getError(err));
    }
  };
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
        <form className="text-gray-500" onSubmit={signupSubmitHandler}>
          <div className="text-sm py-2 mt-5">
            <input
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
              name="username"
              type="text"
              placeholder="username"
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
          <div className="text-sm py-2 relative">
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border py-2 px-3 w-full outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
            />
            <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEye className="h-6 font-semibold" />
                  ) : (
                    <FaEyeSlash className="h-6 font-semibold" />
                  )}
                </div>
          </div>
          <div className="text-sm py-2 relative">
            <input
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border py-2 px-3 w-full outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="confirm password"
            />
            <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <FaEye className="h-6 font-semibold" />
                  ) : (
                    <FaEyeSlash className="h-6 font-semibold" />
                  )}
                </div>
          </div>
          <div className="py-5">
            <button
              type="submit"
              className="w-full text-black border border-corekColor1 hover:bg-white bg-corekColor1 text-sm font-bold px-4 rounded py-2 duration-500 mb-2"
            >
              SIGN UP
            </button>
            <div className="text-sm">
              Are you a member?{" "}
              <span
                onClick={() => {
                  setSidesignup(false);
                  setSidelogin(true);
                }}
                className="text-corekColor2 font-semibold cursor-pointer hover:underline"
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
