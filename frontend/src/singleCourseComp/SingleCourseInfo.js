import React, { useReducer } from "react";
import {
  FaBookmark,
  FaCube,
  FaUserAlt,
  FaComments,
  FaRegClock,
  FaLevelUpAlt,
  FaLanguage,
} from "react-icons/fa";
import instructorImg from "../assets/instructorImg2.jpeg";
import SingleCourseRating from "./SingleCourseRating";

const reducer = (state, action) => {
  switch (action.type) {
    case "TOPIC_OVERVIEW_SUCCESS":
      return {
        ...state,
        topicOverview: true,
        topicInstructor: false,
      };
    case "TOPIC_INSTRUCTOR_SUCCESS":
      return {
        ...state,
        topicOverview: false,
        topicInstructor: true,
      }
    default:
      return state;
  }
};

const SingleCourseInfo = (props) => {
  const {course} = props
  const [{ topicOverview, topicInstructor }, dispatch] =
    useReducer(reducer, {
      topicOverview: true,
      topicInstructor: false,
    });

    // const initialRating = course.rating.reduce((a,c) => a + c, 0)
    // const averageRating = initialRating/course.rating.length
    // const rating =
    // averageRating === 0.5 || 1.5 || 2.5 || 3.5 || 4.5
    //   ? averageRating
    //   : Math.ceil(averageRating); 

    const rating = course.review

  return (
    <div className="border w-full mt-10">
      <div className="flex flex-row w-full">
        <div
          onClick={() => dispatch({ type: "TOPIC_OVERVIEW_SUCCESS" })}
          className={`courseInfos ${
            topicOverview ? "border-t-4 border-t-corekColor1" : ""
          }`}
        >
          <span className={topicOverview ? "text-corekColor1" : ""}>
            <FaBookmark />
          </span>
          <span className="hidden md:block">Overview</span>
        </div>
        <div
          onClick={() => dispatch({ type: "TOPIC_INSTRUCTOR_SUCCESS" })}
          className={`courseInfos ${
            topicInstructor ? "border-t-4 border-t-corekColor1" : ""
          }`}
        >
          <span className={topicInstructor ? "text-corekColor1" : ""}>
            <FaUserAlt />
          </span>
          <span className="hidden md:block">Instructor</span>
        </div>
      </div>
      {topicOverview ? (
        <div className="px-5 py-8 flex flex-row justify-between">
          <div className="basis-[55%]">
            <p className="font-semibold text-lg">COURSE DESCRIPTION</p>
            <p className="text-sm mt-4 leading-7">
              {course.description}
            </p>
          </div>
          <div className="pl-6 border-l-2 basis-[40%]">
            <p className="font-semibold text-lg">COURSE FEATURES</p>
            <div className="flex flex-col text-sm mt-4">
              <div className="flex flex-row justify-between pb-4 border-b border-corekColor1">
                <div className="flex flex-row items-center space-x-2">
                  <span className="text-corekColor1">
                    <FaRegClock />
                  </span>
                  <span>Duration</span>
                </div>
                <p className="font-semibold">{course.duration}</p>
              </div>
              <div className="flex flex-row justify-between py-4 border-b border-corekColor1">
                <div className="flex flex-row items-center space-x-2">
                  <span className="text-corekColor1">
                    <FaLevelUpAlt />
                  </span>
                  <span>Skill level</span>
                </div>
                <p className="font-semibold">{course.skill_level}</p>
              </div>
              <div className="flex flex-row justify-between py-4 border-b border-corekColor1">
                <div className="flex flex-row items-center space-x-2">
                  <span className="text-corekColor1">
                    <FaLanguage />
                  </span>
                  <span>Language</span>
                </div>
                <p className="font-semibold">{course.language}</p>
              </div>
            </div>
          </div>
        </div>
      ) : topicInstructor ? (
        <div className="px-5 py-8">
          <div className="px-5 py-8 flex flex-row space-x-8 items-start border">
            <img className="rounded-full" src={course.instructorImg2} alt="" />
            <div>
              <p className="text-sm font-semibold">{course.author}</p>
              <p className="text-xs text-gray-500 mt-1">{course.aka}</p>
              <p className="text-sm mt-4 leading-7">
                {course.instructorInfo}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SingleCourseInfo;
