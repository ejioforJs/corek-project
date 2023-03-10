import axios from "axios";
import React, { useEffect, useReducer } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Course from "./Course";
import {AiOutlineRight} from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, courses: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const TopCoursesComponent = () => {
  const [{ loading, error, courses }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    courses: [],
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const results = await axios.get("/api/courses");
        dispatch({ type: "FETCH_SUCCESS", payload: results.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);
  return (
    <div className="mt-16 px-4 md:px-16">
      <div 
      data-aos="fade-up"
      data-aos-duration="1000"
      className="text-center">
        <p className="text-2xl font-semibold mb-2">Browse Our Top Courses</p>
        <p className="text-sm text-gray-500">
          Learn Blockchain - Blockchain Courses and Training - Success starts
          here
        </p>
      </div>
      <div>
        {loading ? (
          <div>loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Slider className="flex flex-row space-x-2 mt-8" {...settings}>
            {courses.map((course) => (
              <div key={course.image}>
                <Course course={course}></Course>
              </div>
            ))}
          </Slider>
        )}
      </div>
      <div 
      data-aos="fade-up"
      data-aos-duration="1000"
      className="justify-center flex mt-8">
        <Link to="/courses" className="flex flex-row border border-corekColor1 hover:bg-white duration-500 space-x-3 items-center text-black py-3 px-7 rounded-md bg-corekColor1">
          <span className="text-sm">VIEW ALL COURSES</span> <span className="font-extrabold text-sm"><AiOutlineRight /></span>
        </Link>
      </div>
    </div>
  );
};

export default TopCoursesComponent;
