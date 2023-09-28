import axios from "axios";
import React, { useContext, useEffect, useReducer, useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import courseHeroimg from "../assets/singleCourseHero.jpg";
import ShopCourse from "../components/ShopCourse";
// import Course from "../homeScreenComp/Course";
import { Store } from "../Store";
import { GiNextButton, GiPreviousButton } from "react-icons/gi";
import ReactPaginate from "react-paginate";
import { BsArrowUpRightSquare } from "react-icons/bs";
import LoadingBox from "../components/LoadingBox";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, courses: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "SORTAVERAGERATINGLTH":
      return {
        ...state,
        sortAverageRatingLTH: true,
        sortAverageRatingHTL: false,
        sortNewnessLTH: false,
        sortNewnessHTL: false,
        sortPriceLTH: false,
        sortPriceHTL: false,
      };
    case "SORTAVERAGERATINGHTL":
      return {
        ...state,
        sortAverageRatingLTH: false,
        sortAverageRatingHTL: true,
        sortNewnessLTH: false,
        sortNewnessHTL: false,
        sortPriceLTH: false,
        sortPriceHTL: false,
      };
    case "SORTNEWNESSLTH":
      return {
        ...state,
        sortAverageRatingLTH: false,
        sortAverageRatingHTL: false,
        sortNewnessLTH: true,
        sortNewnessHTL: false,
        sortPriceLTH: false,
        sortPriceHTL: false,
      };
    case "SORTNEWNESSHTL":
      return {
        ...state,
        sortAverageRatingLTH: false,
        sortAverageRatingHTL: false,
        sortNewnessLTH: false,
        sortNewnessHTL: true,
        sortPriceLTH: false,
        sortPriceHTL: false,
      };
    case "SORTPRICELTH":
      return {
        ...state,
        sortAverageRatingLTH: false,
        sortAverageRatingHTL: false,
        sortNewnessLTH: false,
        sortNewnessHTL: false,
        sortPriceLTH: true,
        sortPriceHTL: false,
      };
    case "SORTPRICEHTL":
      return {
        ...state,
        sortAverageRatingLTH: false,
        sortAverageRatingHTL: false,
        sortNewnessLTH: false,
        sortNewnessHTL: false,
        sortPriceLTH: false,
        sortPriceHTL: true,
      };
    case "ALL_SUCCESS":
      return {
        ...state,
        all: true,
        forex: false,
        cryptocurrency: false,
        stock_trading: false,
        digital_marketing: false,
      };
    case "FOREX_SUCCESS":
      return {
        ...state,
        all: false,
        forex: true,
        cryptocurrency: false,
        stock_trading: false,
        digital_marketing: false,
      };
    case "CRYPTOCURRENCY_SUCCESS":
      return {
        ...state,
        all: false,
        forex: false,
        cryptocurrency: true,
        stock_trading: false,
        digital_marketing: false,
      };
    case "STOCK_TRADING_SUCCESS":
      return {
        ...state,
        all: false,
        forex: false,
        cryptocurrency: false,
        stock_trading: true,
        digital_marketing: false,
      };
    case "DIGITAL_MARKETING_SUCCESS":
      return {
        ...state,
        all: false,
        forex: false,
        cryptocurrency: false,
        stock_trading: false,
        digital_marketing: true,
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        all: false,
        forex: false,
        cryptocurrency: false,
        stock_trading: false,
        digital_marketing: false,
      };
    default:
      return state;
  }
};

const CoursesScreen = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);

  const [
    {
      loading,
      error,
      courses,
      sortAverageRatingLTH,
      sortAverageRatingHTL,
      sortNewnessLTH,
      sortNewnessHTL,
      sortPriceLTH,
      sortPriceHTL,
      all,
      forex,
      cryptocurrency,
      stock_trading,
      digital_marketing,
    },
    dispatch,
  ] = useReducer(reducer, {
    courses: [],
    loading: true,
    error: "",
    sortAverageRatingLTH: false,
    sortAverageRatingHTL: false,
    sortNewnessLTH: true,
    sortNewnessHTL: false,
    sortPriceLTH: false,
    sortPriceHTL: false,
    all: false,
    forex: false,
    cryptocurrency: false,
    stock_trading: false,
    digital_marketing: false,
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { addSearch } = state;

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

  useEffect(() => {
    if (addSearch) {
      dispatch({ type: "SEARCH_SUCCESS" });
    }
  }, [addSearch]);

  const filteredCourses = courses.filter((course) => {
    if (addSearch) {
      if (
        course.category.toLowerCase().includes(addSearch) ||
        course.name.toLowerCase().includes(addSearch)
      ) {
        return course;
      }
    }
    if (all) {
      return course;
    }
    if (forex) {
      if (course.category.toLowerCase().includes("forex")) {
        return course;
      }
    }
    if (cryptocurrency) {
      if (course.category.toLowerCase().includes("cryptocurrency")) {
        return course;
      }
    }
    if (stock_trading) {
      if (course.category.toLowerCase().includes("stock trading")) {
        return course;
      }
    }
    if (digital_marketing) {
      if (course.category.toLowerCase().includes("digital marketing")) {
        return course;
      }
    }
    if (
      !addSearch &&
      !all &&
      !forex &&
      !cryptocurrency &&
      !stock_trading &&
      !digital_marketing
    ) {
      return course;
    } else {
      return false;
    }
  });

  const sortedCourses = sortNewnessLTH
    ? filteredCourses
    : sortNewnessHTL
    ? filteredCourses.reverse()
    : sortPriceLTH
    ? filteredCourses.sort(function (a, b) {
        return a.price - b.price;
      })
    : sortPriceHTL
    ? filteredCourses
        .sort(function (a, b) {
          return a.price - b.price;
        })
        .reverse()
    : sortAverageRatingLTH
    ? filteredCourses.sort(function (a, b) {
        return a.rating - b.rating;
      })
    : sortAverageRatingHTL
    ? filteredCourses.sort(function (a, b) {
        return b.rating - a.rating;
      })
    : null;

    const latestCourses = courses.filter((value, index, array) => {
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

  const endOffset = itemOffset + itemsPerPage;
  const currentCourses = sortedCourses.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(sortedCourses.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % sortedCourses.length;
    setItemOffset(newOffset);
  };

  return loading ? (
    <LoadingBox />
  ): error ? (
    <div>{error}</div>
  ):
    (
    <div>
      <div className="relative">
        <img
          className="h-[33vh] md:h-[55vh] w-full -mt-24"
          src={courseHeroimg}
          alt="hero"
        />
        <div className="absolute z-10 h-full top-0 w-full bg-gradient-to-t opacity-60 from-corekColor3 to-corekColor3"></div>
        <div className="z-20 absolute border-l-[3px] border-corekColor1 pl-4 md:pl-5 text-white text-2xl md:text-[38px] top-1/2 transform -translate-y-1/2 mt-8 md:mt-auto md:-translate-y-0 md:top-auto md:bottom-24 md:left-16">
          Courses
        </div>
      </div>
      <div className="ml-4 md:ml-16 mt-4 flex flex-row items-center space-x-3 text-xs">
        <Link to="/">
          <div className="flex flex-row items-center space-x-2 duration-300 hover:text-corekColor1">
            <span>Home</span>
            <span>{">"}</span>
          </div>
        </Link>
        <div className="flex flex-row items-center space-x-2 duration-300">
          <span>Courses</span>
          <span>{">"}</span>
        </div>
        <Link to="/">
          <div className="flex flex-row items-center space-x-2 duration-300  hover:text-corekColor1">
            {
              forex || addSearch === "forex" ? (<span>Forex</span>) : cryptocurrency || addSearch === "cryptocurrency" ? (<span>Cryptocurrency</span>): 
              stock_trading || addSearch === "stock trading" ? (<span>Stock Trading</span>) :
              digital_marketing || addSearch === "digital marketing" ? (<span>Digital Marketing</span>) : 
              (<span></span>)
            }
          </div>
        </Link>
      </div>
      <div className="flex md:flex-row flex-col px-4 md:px-16 mt-16 md:space-x-7">
        <div className="basis-[75%]">
          <div className="mb-6 flex flex-col gap-y-5 sm:flex-row w-full justify-between items-center">
            <p className="flex flex-row gap-2 items-center text-gray-500">
              <span className="bg-corekColor1 p-2 rounded-full text-white text-2xl">
                <AiOutlineUnorderedList />
              </span>{" "}
              <span className="text-sm">
                showing {itemOffset} - {endOffset} of {sortedCourses.length}{" "}
                results
              </span>
            </p>
            <div className="text-sm text-gray-500 flex flex-row gap-2 items-center z-40">
              <span>Sort By:</span>
              <div className="relative">
                <div
                  onClick={() =>
                    dropdownPopoverShow
                      ? setDropdownPopoverShow(false)
                      : setDropdownPopoverShow(true)
                  }
                  className="border border-gray-400 py-2 px-3 rounded-md cursor-pointer flex flex-row items-center gap-2"
                >
                  {sortAverageRatingLTH
                    ? "Sort by average rating: low to high"
                    : sortAverageRatingHTL
                    ? "Sort by average rating: high to low"
                    : sortNewnessLTH
                    ? "Sort by newness: old to new"
                    : sortNewnessHTL
                    ? "Sort by newness: new to old"
                    : sortPriceLTH
                    ? "Sort by price: low to high"
                    : sortPriceHTL
                    ? "Sort by price: high to low"
                    : null}
                  <span>
                    <FaAngleDown />
                  </span>
                </div>
                <div
                  className={`bg-white absolute overflow-hidden duration-300 rounded shadow-2xl mb-1
          ${dropdownPopoverShow ? "opacity-100 py-5 px-6" : "opacity-0"}`}
                >
                  <ul className="flex flex-col gap-3 text-sm">
                    <li
                      onClick={() => {
                        dispatch({ type: "SORTAVERAGERATINGLTH" });
                        setDropdownPopoverShow(false);
                      }}
                      className="cursor-pointer hover:text-corekColor1 duration-300"
                    >
                      Sort by average rating: low to high
                    </li>
                    <li
                      onClick={() => {
                        dispatch({ type: "SORTAVERAGERATINGHTL" });
                        setDropdownPopoverShow(false);
                      }}
                      className="cursor-pointer hover:text-corekColor1 duration-300"
                    >
                      Sort by average rating: high to low
                    </li>
                    <li
                      onClick={() => {
                        dispatch({ type: "SORTNEWNESSLTH" });
                        setDropdownPopoverShow(false);
                      }}
                      className="cursor-pointer hover:text-corekColor1 duration-300"
                    >
                      Sort by newness: old to new
                    </li>
                    <li
                      onClick={() => {
                        dispatch({ type: "SORTNEWNESSHTL" });
                        setDropdownPopoverShow(false);
                      }}
                      className="cursor-pointer hover:text-corekColor1 duration-300"
                    >
                      Sort by newness: new to old
                    </li>
                    <li
                      onClick={() => {
                        dispatch({ type: "SORTPRICELTH" });
                        setDropdownPopoverShow(false);
                      }}
                      className="cursor-pointer hover:text-corekColor1 duration-300"
                    >
                      Sort by price: low to high
                    </li>
                    <li
                      onClick={() => {
                        dispatch({ type: "SORTPRICEHTL" });
                        setDropdownPopoverShow(false);
                      }}
                      className="cursor-pointer hover:text-corekColor1 duration-300"
                    >
                      Sort by price: high to low
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <ul className="flex flex-wrap space-y-4 items-center justify-between mt-8 mb-10"> */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mb-10">
            {currentCourses.map((course) => (
              <li key={course._id} className="">
                <ShopCourse course={course} />
              </li>
            ))}
          </ul>
          <ReactPaginate
            previousLabel={<GiPreviousButton />}
            nextLabel={<GiNextButton />}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={3}
            pageRangeDisplayed={6}
            onPageChange={handlePageClick}
            containerClassName={"flex flex-row gap-3 justify-center"}
            pageClassName={
              "w-7 text-center rounded-full py-1 text-sm font-bold hover:bg-corekColor1 hover:text-white duration-500 border border-corekColor1"
            }
            pageLinkClassName={""}
            previousClassName={
              "w-7 flex rounded-full justify-center items-center py-1 text-sm font-bold hover:bg-corekColor1 hover:text-white duration-500 border border-corekColor1"
            }
            previousLinkClassName={""}
            nextClassName={
              "w-7 flex justify-center rounded-full items-center py-1 text-sm font-bold hover:bg-corekColor1 hover:text-white duration-500 border border-corekColor1"
            }
            nextLinkClassName={""}
            breakClassName={
              "w-7 flex justify-center items-center py-1 text-sm font-bold hover:bg-corekColor1 hover:text-white duration-500 border border-corekColor1"
            }
            breakLinkClassName={""}
            activeClassName={"bg-corekColor1 text-white"}
          />
        </div>
        <div className="basis-[25%] w-full mt-16">
          <div className="md:border-l md:pl-4">
            <p className="font-semibold -ml-4 pl-4 text-lg md:-ml-5 pb-4 border-l-4 border-corekColor1">
              CATEGORIES
            </p>
            <div className="flex flex-col space-y-3 text-sm">
              <p
                onClick={() => {
                  ctxDispatch({ type: "ADD_SEARCH", payload: "" });
                  dispatch({ type: "ALL_SUCCESS" });
                }}
                className={`${
                  all ? "text-corekColor1" : ""
                } cursor-pointer textHover`}
              >
                All
              </p>
              <p 
              onClick={() => {
                ctxDispatch({ type: "ADD_SEARCH", payload: "" });
                dispatch({ type: "FOREX_SUCCESS" });
              }}
              className={`${
                forex || addSearch==="forex" ? "text-corekColor1" : ""
              } cursor-pointer textHover`}
              >
                Forex
              </p>
              <p 
              onClick={() => {
                ctxDispatch({ type: "ADD_SEARCH", payload: "" });
                dispatch({ type: "CRYPTOCURRENCY_SUCCESS" });
              }}
              className={`${
                cryptocurrency || addSearch==="cryptocurrency" ? "text-corekColor1" : ""
              } cursor-pointer textHover`}
              >
                Cryptocurrency
              </p>
              <p 
              onClick={() => {
                ctxDispatch({ type: "ADD_SEARCH", payload: "" });
                dispatch({ type: "STOCK_TRADING_SUCCESS" });
              }}
              className={`${
                stock_trading || addSearch==="stock trading" ? "text-corekColor1" : ""
              } cursor-pointer textHover`}
              >
                Stock Trading
              </p>
              <p 
              onClick={() => {
                ctxDispatch({ type: "ADD_SEARCH", payload: "" });
                dispatch({ type: "DIGITAL_MARKETING_SUCCESS" });
              }}
              className={`${
                digital_marketing || addSearch==="digital marketing" ? "text-corekColor1" : ""
              } cursor-pointer textHover`}
              >
                Digital Marketing
              </p>
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
          {/* <div className="mt-16 border-2 w-full h-96 advertise"></div> */}
          <div className="mt-12 border-2 w-full h-96 advertise"></div>
        </div>
      </div>
    </div>
  );
};

export default CoursesScreen;
