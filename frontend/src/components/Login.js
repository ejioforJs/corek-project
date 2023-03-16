import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toast } from 'react-toastify';
import { Store } from '../Store.js';
import { getError } from '../utils.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = ({ sidelogin, setSidelogin, setSidesignup, setSideforgotpassword }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const { dispatch: ctxDispatch } = useContext(Store);
  // const {userInfo} = state

  const loginSubmitHandler = async (e) => {
    e.preventDefault()
    try{
        const {data} = await axios.post('/api/users/login', {
            username,
            password
        })
        ctxDispatch({type: 'USER_SIGNIN', payload: data})
        localStorage.setItem('userInfo', JSON.stringify(data))
        setSidelogin(false)
        toast.success("login successfully")
        setUsername("")
        setPassword("")
        setShowPassword(false)
        navigate('/dashboardscreen')
    }
    catch(err){
        toast.error(getError(err))
    }
  };

  return (
    <div
      className={`fixed flex items-center justify-center ${
        sidelogin ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } inset-0 bg-black duration-500 z-50 bg-opacity-60 overflow-y-auto h-full w-full`}
    >
      <div
        onClick={() => {
          setSidelogin(false);
          setSidesignup(false);
        }}
        className="absolute text-2xl font-bold text-white cursor-pointer nav-hover top-10 right-8"
      >
        <AiOutlineClose className="font-bold" />
      </div>
      <div className="w-full md:w-1/3 bg-white px-4 md:px-10 py-7 text-gray-500 text-center">
        <p className="text-black text-xl font-semibold">
          Login with your site account
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
              placeholder="username"
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
          <div className="py-5">
            <div 
            onClick={() => {
              setSidelogin(false);
              setSideforgotpassword(true)
            }}
            className="text-red-500 font-semibold cursor-pointer text-right text-sm mb-2 hover:underline">
              forgot your password?
            </div>
            <button
              type="submit"
              className="w-full text-black border border-corekColor1 hover:bg-white bg-corekColor1 text-sm font-bold px-4 rounded py-2 duration-500 mb-2"
            >
              LOGIN
            </button>
            <div className="text-sm">
              Not a member yet?{" "}
              <span 
              onClick={() => {
                setSidelogin(false);
                setSidesignup(true);
              }}
              className="text-corekColor2 font-semibold cursor-pointer hover:underline">Register now</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
