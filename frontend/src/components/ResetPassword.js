import axios from 'axios'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getError } from '../utils'

const Reset_password = ({sideforgotpassword, setSideforgotpassword, sideresetpassword, setSideresetpassword, hash}) => {
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const resetPasswordSubmitHandler = async (e) => {
    e.preventDefault()
    console.log(hash)
    try {
      const {data} = await axios.post('/api/users/reset-password/confirmation', {
        hash: hash,
        password: password
      })
      toast.success(data.message)
      navigate('/')
      setSideresetpassword()
    } catch (error) {
      toast.error(getError(error))
    }
  }
  return (
    <div
      className={`fixed flex items-center justify-center ${
        sideresetpassword ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } inset-0 bg-black duration-500 z-50 bg-opacity-60 overflow-y-auto h-full w-full`}
    >
      <div
        onClick={() => setSideresetpassword(false) }
        className="absolute text-2xl font-bold text-white cursor-pointer nav-hover top-10 right-8"
      >
        <AiOutlineClose className="font-bold" />
      </div>
      <div className="w-full md:w-1/3 bg-white px-4 md:px-10 py-7 text-gray-500 text-center">
        <p className="text-black text-xl font-semibold">
          Reset Password
        </p>
        <form className="text-gray-500" onSubmit={resetPasswordSubmitHandler}>
          <div className="text-sm py-2 mt-5">
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border w-full py-2 px-3 outline-none border-gray-400 rounded duration-500 focus:border-corekColor1"
              name="password"
              type="password"
              placeholder="Enter new password"
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
            <button
              type="submit"
              className="w-full text-black border border-corekColor1 hover:bg-white bg-corekColor1 text-sm font-bold px-4 rounded py-2 duration-500 mb-2"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Reset_password
