import axios from 'axios';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
// import { Store } from '../Store';
import { getError } from '../utils';

const AdduserComponent = () => {
    const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const {dispatch: ctxDispatch} = useContext(Store)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const signupSubmitHandler = async (e) => {
    e.preventDefault();
  if (password !== confirmPassword) {
    toast.error('Password do not match');
    return;
  }
  try {
      await axios.post('/api/users/signup', {
        username,
        email,
        password,
      });
      toast.success("User added successfully")
      setUsername("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      setShowPassword(false)
      setShowConfirmPassword(false)
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <div>
      <p className="text-black text-xl font-semibold">Add a user</p>
      <form className="text-gray-500" onSubmit={signupSubmitHandler}>
          <div className="text-sm py-2 mt-4">
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
              className="text-black border border-corekColor1 hover:bg-white bg-corekColor1 text-sm font-bold px-4 rounded py-2 duration-500 mb-2"
            >
              SUBMIT
            </button>
          </div>
        </form>
    </div>
  )
}

export default AdduserComponent
