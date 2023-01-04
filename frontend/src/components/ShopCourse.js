import React from 'react'
import { BsArrowUpRightSquare } from "react-icons/bs";
import { Link } from "react-router-dom";

const ShopCourse = (props) => {
    const {course} = props
  return (
    <div className="flex flex-col space-y-2">
      <Link to={`/course/${course.slug}`}>
        <div className="group relative flex-1">
          <img
            className="rounded-md"
            src={course.image}
            alt={course.name}
          />
          <div className="absolute rounded-md top-0 bg-gradient-to-t opacity-0 group-hover:opacity-50 duration-500 w-full h-full from-corekColor3 to-corekColor3"></div>
          <div className="absolute opacity-0 group-hover:opacity-100 duration-500 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row space-x-3 text-white">
            <span className="text-3xl font-extrabold">
              <BsArrowUpRightSquare />
            </span>
          </div>
        </div>
      </Link>
      <p className="text-xs text-gray-500">{course.author}</p>
      <Link to={`/course/${course.slug}`}>
        <p className="text-sm cursor-pointer hover:underline duration-500 text-black font-semibold flex-1">
          {course.name}
        </p>
      </Link>
      <div className="flex flex-row items-center justify-between">
        <p className="font-semibold text-corekColor2">${course.price}.00</p>
        <div className="border px-4 py-1 cursor-pointer rounded border-corekColor1 bg-corekColor1 hover:bg-white duration-500">
          Buy
        </div>
      </div>
    </div>
  )
}

export default ShopCourse
