import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import courseHeroimg from "../assets/singleCourseHero.jpg";
import AdminComponent from "../components/AdminComponent";
import LoadingBox from "../components/LoadingBox";
import { Store } from "../Store";
import { getError } from "../utils";

const reducer = (state, action) => {
  switch (action.type) {
    case "DASHBOARD_SUCCESS":
      return {
        ...state,
        dashboard: true,
        orders: false,
        favorites: false,
        courses: false,
        account: false,
        logout: false,
      };
    case "ORDERS_SUCCESS":
      return {
        ...state,
        dashboard: false,
        orders: true,
        favorites: false,
        courses: false,
        account: false,
        logout: false,
      };
    case "COURSES_SUCCESS":
      return {
        ...state,
        dashboard: false,
        orders: false,
        favorites: false,
        courses: true,
        account: false,
        logout: false,
      };
    case "ACCOUNT_SUCCESS":
      return {
        ...state,
        dashboard: false,
        orders: false,
        favorites: false,
        courses: false,
        account: true,
        logout: false,
      };
    case "FETCH-REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        ordersList: action.payload,
        error: "",
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const DashboardScreen = () => {
  const navigate = useNavigate();
  const [
    { dashboard, orders, courses, account, loading, error, ordersList },
    dispatch,
  ] = useReducer(reducer, {
    dashboard: true,
    orders: false,
    courses: false,
    account: false,
    loading: false,
    error: "",
    ordersList: [],
  });

  const { state } = useContext(Store);
  const { userInfo } = state;
  console.log(userInfo)

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/orders/mine`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };
    fetchData();
  }, [userInfo]);

  const checkoutHandler = () => {
    navigate("/checkout");
  };

  console.log(ordersList);

  return loading ? (
    <LoadingBox />
  ): error ? (
    <div>{error}</div>
  ):
  (
    <div>
      <div className="relative">
        <img
          className="h-[55vh] w-full -mt-24"
          src={courseHeroimg}
          alt="hero"
        />
        <div className="absolute z-10 h-full top-0 w-full bg-gradient-to-t opacity-60 from-corekColor3 to-corekColor3"></div>
        <div className="z-20 absolute border-l-[3px] border-corekColor1 pl-4 md:pl-5 text-white text-2xl md:text-[38px] bottom-24 md:left-16">
          Welcome {userInfo.username}
        </div>
      </div>
      <div className="ml-4 md:ml-16 mt-4 flex flex-row items-center space-x-3 text-xs">
        <Link to="/">
          <div className="flex flex-row items-center space-x-2 duration-300 hover:text-corekColor1">
            <span>Home</span>
            <span>{">"}</span>
          </div>
        </Link>
        <div>
          <div className="flex flex-row items-center space-x-2 duration-300 hover:text-corekColor1">
            <span>Dashboard</span>
          </div>
        </div>
      </div>
      {userInfo.email === "ejioforjames12@gmail.com" ? (
        <AdminComponent />
      ) : (
        <div className="mt-16 flex flex-col sm:flex-row gap-6 px-2 sm:px-16">
          <div className="basis-1/4 flex flex-col gap-3">
            <div
              onClick={() => dispatch({ type: "DASHBOARD_SUCCESS" })}
              className={`${
                dashboard ? "bg-corekColor1" : "bg-corekColor3 text-white"
              } py-2.5 text-sm pl-4 rounded font-bold hover:bg-corekColor1 hover:text-corekColor3 duration-500 cursor-pointer`}
            >
              DASHBOARD
            </div>
            <div
              onClick={() => dispatch({ type: "ORDERS_SUCCESS" })}
              className={`${
                orders ? "bg-corekColor1" : "bg-corekColor3 text-white"
              } py-2.5 text-sm pl-4 rounded font-bold hover:bg-corekColor1 hover:text-corekColor3 duration-500 cursor-pointer`}
            >
              ORDERS
            </div>
            <div
              onClick={() => dispatch({ type: "COURSES_SUCCESS" })}
              className={`${
                courses ? "bg-corekColor1" : "bg-corekColor3 text-white"
              } py-2.5 text-sm pl-4 rounded font-bold hover:bg-corekColor1 hover:text-corekColor3 duration-500 cursor-pointer`}
            >
              COURSES
            </div>
            <div
              onClick={() => dispatch({ type: "ACCOUNT_SUCCESS" })}
              className={`${
                account ? "bg-corekColor1" : "bg-corekColor3 text-white"
              } py-2.5 text-sm pl-4 rounded font-bold hover:bg-corekColor1 hover:text-corekColor3 duration-500 cursor-pointer`}
            >
              ACCOUNT DETAILS
            </div>
          </div>
          <div className="basis-3/4">
            {dashboard ? (
              <div data-aos="fade-up" data-aos-duration="1500">
                <h1 className="font-bold text-2xl">Dashboard</h1>
                <p className="text-sm text-gray-500 mt-2">
                  From your account dashboard. you can easily check & view your{" "}
                  <span
                    onClick={() => dispatch({ type: "ORDERS_SUCCESS" })}
                    className="text-corekColor2 cursor-pointer underline"
                  >
                    recent orders,
                  </span>
                  <span
                    onClick={() => dispatch({ type: "ACCOUNT_SUCCESS" })}
                    className="text-corekColor2 cursor-pointer underline"
                  >
                    check your account details
                  </span>{" "}
                  and{" "}
                  <span
                    onClick={() => dispatch({ type: "COURSES_SUCCESS" })}
                    className="text-corekColor2 cursor-pointer underline"
                  >
                    learn various branches of crypto using your purchased
                    courses
                  </span>
                  !!
                </p>
              </div>
            ) : orders ? (
              <div>
                {ordersList ? (
                  <div>
                    <table className="border-collapse w-full">
                      <thead className="bg-[rgb(230,230,230)]">
                        <tr>
                          <th className="border-y-corekColor1 py-2.5 ...">
                            Order
                          </th>
                          <th className="border-y-corekColor1 border-gray-300 ...">
                            Course
                          </th>
                          <th className="border-y-corekColor1 border-gray-300 ...">
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {ordersList.map((product) =>
                          product.orderItems.map((course, index) => (
                            <tr className="text-sm">
                              <td className="border border-gray-300 text-center p-2">
                                {index + 1}
                              </td>
                              <td className="border text-center border-gray-300 p-2">
                                {course.name}
                              </td>
                              <td className="border text-center border-gray-300 p-2">
                                ${course.price}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                    <div className="py-4">
                      <button
                        onClick={checkoutHandler}
                        className="bg-corekColor1 float-right text-black border-2 border-corekColor1 text-sm font-bold px-4 rounded py-2 hover:bg-white duration-500"
                      >
                        CHECKOUT
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>There are currently no orders</div>
                )}
              </div>
            ) : courses ? (
              <div>
                <h1 className="font-bold text-2xl">Courses</h1>
                <p className="text-sm text-gray-500 mt-2">
                  you have not bought any course yet,{" "}
                  <span className="text-corekColor2 underline cursor-pointer">
                    <Link to="/courses">click here</Link>
                  </span>{" "}
                  to buy a course.
                </p>
              </div>
            ) : account ? (
              <div>
                <table className="border-collapse w-full">
                  <thead className="bg-about-color">
                    <tr>
                      <th className="border-y-main2-color py-2.5 ...">
                        Username
                      </th>
                      <th className="border-y-main2-color border-gray-300 ...">
                        Email Address
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-sm">
                      <td className="border border-gray-300 text-center p-2">
                        {userInfo.username}
                      </td>
                      <td className="border text-center border-gray-300 p-2">
                        {userInfo.email}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardScreen;
