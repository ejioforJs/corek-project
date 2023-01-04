import React from "react";
import instructor from "../assets/instructor.png";
import user from "../assets/user.png";
import { FaFacebookF, FaTwitter, FaYoutube} from "react-icons/fa";
import {AiFillInstagram} from 'react-icons/ai'

const SkillInstructorComponent = () => {
  return (
    <div className="mt-16 px-16">
      <div className="text-center">
        <p className="text-2xl font-semibold mb-2">Our Skill Instructor</p>
        <p className="text-sm text-gray-700">
          Get to converse with our skill instructor via his social media handles
        </p>
      </div>
      <div className="mt-8 flex flex-col space-y-2 items-center justify-center">
        <div className="w-full flex flex-row items-center justify-between">
          <img className="rounded-full h-52 w-52" src={user} alt="user" />
          <img className="rounded-full h-52 w-52" src={user} alt="user" />
          <div className="group relative h-64 w-64">
            <img
              className="rounded-full w-full h-full"
              src={instructor}
              alt="instructor"
            />
            <div className="absolute rounded-full top-0 bg-gradient-to-t opacity-0 group-hover:opacity-30 duration-500 w-full h-full from-corekColor3 to-corekColor3"></div>
            <div className="absolute opacity-0 group-hover:opacity-100 duration-500 left-1/2 transform -translate-x-1/2 bottom-12 flex flex-row space-x-3 text-white">
                <span className="text-xl cursor-pointer hover:text-corekColor1 duration-500"><FaFacebookF /></span>
                <span className="text-xl cursor-pointer hover:text-corekColor1 duration-500"><FaTwitter /></span>
                <span className="text-xl cursor-pointer hover:text-corekColor1 duration-500"><AiFillInstagram /></span>
                <span className="text-xl cursor-pointer hover:text-corekColor1 duration-500"><FaYoutube /></span>
              </div>
          </div>
          <img className="rounded-full h-52 w-52" src={user} alt="user" />
          <img className="rounded-full h-52 w-52" src={user} alt="user" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">Stevan kate</p>
          <p className="text-gray-700 text-sm">Creative Director</p>
        </div>
      </div>
    </div>
  );
};

export default SkillInstructorComponent;
