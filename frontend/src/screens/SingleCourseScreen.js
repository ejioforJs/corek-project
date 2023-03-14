import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { getError } from "../utils.js";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { AiOutlineRight } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// import teacherImg from "../assets/teacher.jpeg";
import SingleCourseInfo from "../singleCourseComp/SingleCourseInfo";
import SingleCourseRating from "../singleCourseComp/SingleCourseRating";
import LoadingBox from "../components/LoadingBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Course from "../homeScreenComp/Course";
import { BsArrowUpRightSquare } from "react-icons/bs";
import courseHeroimg from "../assets/singleCourseHero.jpg";
import { Store } from "../Store.js";
import { toast } from "react-toastify";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, course: action.payload };
    case "FETCH_COURSES_SUCCESS":
      return { ...state, loading: false, courses: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const SingleCourseScreen = () => {
  const params = useParams();
  const { slug } = params;
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
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

  const [{ loading, error, course, courses }, dispatch] = useReducer(reducer, {
    loading: true,
    error: "",
    course: [],
    courses: [],
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { cartItems },
  } = state;

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const results = await axios.get(`/api/courses/slug/${slug}`);
        dispatch({ type: "FETCH_SUCCESS", payload: results.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const results = await axios.get("/api/courses");
        dispatch({ type: "FETCH_COURSES_SUCCESS", payload: results.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, []);

  const filterCourses = courses.filter((latestcourse) => {
    if (latestcourse.name !== course.name) {
      return latestcourse;
    } else {
      return false;
    }
  });

  const likeCourses = filterCourses.filter((latestcourse) => {
    if (latestcourse.category === course.category) {
      return latestcourse;
    } else {
      return false;
    }
  });

  const latestCourses = filterCourses.filter((value, index, array) => {
    if (
      index === array.length - 1 ||
      index === array.length - 2 ||
      index === array.length - 3
    ) {
      return value;
    } else {
      return false;
    }
  });

  const orderHandler = async () => {
    if (!userInfo) {
      toast.error("Login to buy a course");
      return;
    }
    if (userInfo.email === "ejioforjames12@gmail.com") {
      toast.error("You are not permitted to do this as an admin");
      return;
    }
    const existItem = cartItems.find((x) => x._id === course._id);
    if (existItem) {
      toast.error("This course is already in your cart");
      return;
    }
    ctxDispatch({
      type: "CART_ADD_ITEM",
      payload: course,
    });
    navigate("/placeorder");
    console.log(cartItems);
  };

  // loading ? (
  //   <LoadingBox />
  // )
  // : error ? (
  //   <div>{error}</div>
  // )
  // :
  return loading ? (
    <LoadingBox />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div className="relative">
        <img
          className="h-[33vh] md:h-[55vh] w-full -mt-24"
          src={courseHeroimg}
          alt="hero"
        />
        <div className="absolute z-10 h-full top-0 w-full bg-gradient-to-t opacity-60 from-corekColor3 to-corekColor3"></div>
        <div className="z-20 absolute border-l-[3px] border-corekColor1 pl-4 md:pl-5 text-white text-2xl md:text-[38px] top-1/2 transform -translate-y-1/2 mt-8 md:mt-auto md:-translate-y-0 md:top-auto md:bottom-24 md:left-16">
          {course.category}
        </div>
      </div>
      <div className="ml-4 md:ml-16 mt-4 flex flex-row items-center space-x-3 text-xs">
        <Link to="/">
          <div className="flex flex-row items-center space-x-2 duration-300 hover:text-corekColor1">
            <span>Home</span>
            <span>{">"}</span>
          </div>
        </Link>
        <Link to="/courses">
          <div className="flex flex-row items-center space-x-2 duration-300  hover:text-corekColor1">
            <span>Courses</span>
            <span>{">"}</span>
          </div>
        </Link>
        <Link to="/">
          <div className="flex flex-row items-center space-x-2 duration-300  hover:text-corekColor1">
            <span>{course.category}</span>
            <span>{">"}</span>
          </div>
        </Link>
        <div className="flex flex-row items-center space-x-2">
          <span>{course.name}</span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row px-4 md:px-16 mt-16 md:space-x-7">
        <div className="basis-3/4 h-40">
          <h1 className="text-2xl md:text-3xl font-bold">{course.name}</h1>
          <div className="flex flex-col space-y-5 md:flex-row mt-8 w-full justify-between">
            <div className="flex flex-row space-x-4">
              <div className="flex flex-row space-x-2 items-center">
                <img
                  className="rounded-full"
                  src={course.instructorImg1}
                  alt="teacher"
                />
                <div className="flex flex-col space-y-1">
                  <p className="text-xs text-gray-400">Teacher</p>
                  <p className="text-sm">{course.author}</p>
                </div>
              </div>
              <div className="flex flex-col space-y-1 justify-center pl-3 border-l-2 ">
                <p className="text-xs text-gray-400">Category</p>
                <p className="text-sm">{course.category}</p>
              </div>
              <div className="flex flex-col space-y-1 justify-center pl-3 border-l-2 ">
                <p className="text-xs text-gray-400">Rating</p>
                <SingleCourseRating rating={course.rating} />
              </div>
            </div>
            <div className="flex flex-row justify-between space-x-3 items-center">
              <p className="text-xl md:text-3xl text-corekColor2 font-semibold">
                ${course.price}.00
              </p>
              <button
                onClick={orderHandler}
                className="px-5 py-2 border border-corekColor1 hover:bg-white duration-500 bg-corekColor1 rounded text-sm font-bold"
              >
                BUY NOW
              </button>
            </div>
          </div>
          <img
            className="mt-10 rounded h-68 md:h-96"
            src={course.image2}
            alt="courseImg"
          />
          <SingleCourseInfo course={course} />
          <div className="flex flex-row space-x-3.5 mt-10 items-center">
            <p>Share:</p>
            <div className="flex flex-row space-x-3">
              <span className="p-1.5 text-sm border hover:bg-[#3B5998] hover:text-white duration-300 cursor-pointer border-gray-500 text-gray-500 rounded-full">
                <FaFacebookF />
              </span>
              <span className="p-1.5 text-sm border hover:bg-[#00ACEE] hover:text-white duration-300 cursor-pointer border-gray-500 text-gray-500 rounded-full">
                <FaTwitter />
              </span>
              <span className="p-1.5 text-sm border hover:bg-[#3f729b] hover:text-white duration-300 cursor-pointer border-gray-500 text-gray-500 rounded-full">
                <FaInstagram />
              </span>
            </div>
          </div>
          <div className="mt-16">
            <div>
              <p className="text-2xl font-semibold">YOU MAY LIKE</p>
              <hr className="w-12 h-1 bg-corekColor1 mt-1.5" />
            </div>
            <Slider className="flex flex-row md:space-x-2 mt-6" {...settings}>
              {likeCourses.map((course) => (
                <div key={course._id}>
                  <Course course={course}></Course>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="basis-1/4 w-full mt-16">
          <div className="md:border-l md:pl-4">
            <p className="font-semibold -ml-4 pl-4 text-lg md:-ml-5 pb-4 border-l-4 border-corekColor1">
              ALL COURSES
            </p>
            <div className="flex flex-col space-y-3 text-sm">
              <Link
                onClick={() =>
                  ctxDispatch({ type: "ADD_SEARCH", payload: "forex" })
                }
                to="/courses"
                className="textHover"
              >
                Forex
              </Link>
              <Link
                onClick={() =>
                  ctxDispatch({ type: "ADD_SEARCH", payload: "cryptocurrency" })
                }
                to="/courses"
                className="textHover"
              >
                Cryptocurrency
              </Link>
              <Link
              onClick={() =>
                ctxDispatch({ type: "ADD_SEARCH", payload: "stock trading" })
              }
              to="/courses"
              className="textHover"
              >Stock Trading</Link>
              <Link
              onClick={() =>
                ctxDispatch({ type: "ADD_SEARCH", payload: "digital marketing" })
              }
              to="/courses"
              className="textHover"
              >Digital Marketing</Link>
            </div>
          </div>
          <div className="mt-12">
            <p className="font-semibold text-lg">LATEST COURSES</p>
            <div className="flex flex-col space-y-6 mt-6">
              {latestCourses.map((latestcourse) => (
                <div
                  className="flex flex-row space-x-4 items-center"
                  key={latestcourse._id}
                >
                  <Link to={`/course/${latestcourse.slug}`}>
                    <div className="w-24 h-20 group relative">
                      <img
                        className="w-full h-full rounded-md"
                        src={latestcourse.image}
                        alt={latestcourse._id}
                      />
                      <div className="absolute rounded-md top-0 bg-gradient-to-t opacity-0 group-hover:opacity-50 duration-500 w-full h-full from-corekColor3 to-corekColor3"></div>
                      <div className="absolute opacity-0 group-hover:opacity-100 duration-500 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-row space-x-3 text-white">
                        <span className="text-xl font-extrabold">
                          <BsArrowUpRightSquare />
                        </span>
                      </div>
                    </div>
                  </Link>
                  <div className="flex flex-col space-y-2">
                    <Link to={`/course/${latestcourse.slug}`}>
                      <p className="text-sm hover:underline">
                        {latestcourse.name}
                      </p>
                    </Link>
                    <p className="text-sm text-corekColor2 font-semibold">
                      ${latestcourse.price}.00
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 border-2 w-full h-96 advertise"></div>
          <div className="mt-12 border-2 w-full h-96 advertise"></div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseScreen;
