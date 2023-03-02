import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { Link } from "react-router-dom";
import courseHeroimg from "../assets/singleCourseHero.jpg";
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
        shipping: false,
        account: false,
        logout: false,
      };
    case "ORDERS_SUCCESS":
      return {
        ...state,
        dashboard: false,
        orders: true,
        favorites: false,
        shipping: false,
        account: false,
        logout: false,
      };
    case "SHIPPING_SUCCESS":
      return {
        ...state,
        dashboard: false,
        orders: false,
        favorites: false,
        shipping: true,
        account: false,
        logout: false,
      };
    case "ACCOUNT_SUCCESS":
      return {
        ...state,
        dashboard: false,
        orders: false,
        favorites: false,
        shipping: false,
        account: true,
        logout: false,
      };
    case "FETCH-REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, ordersList: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const DashboardScreen = () => {
  const [
    { dashboard, orders, shipping, account, loading, error, ordersList },
    dispatch,
  ] = useReducer(reducer, {
    dashboard: true,
    orders: false,
    shipping: false,
    account: false,
    loading: false,
    error: "",
    ordersList: [],
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/orders/mine`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <div>
      <div className="relative">
        <img
          className="h-[55vh] w-full -mt-24"
          src={courseHeroimg}
          alt="hero"
        />
        <div className="absolute z-10 h-full top-0 w-full bg-gradient-to-t opacity-60 from-corekColor3 to-corekColor3"></div>
        <div className="z-20 absolute border-l-[3px] border-corekColor1 pl-5 text-white text-[45px] bottom-24 left-16">
          Welcome {userInfo.username}
        </div>
      </div>
      <div className="ml-16 mt-4 flex flex-row items-center space-x-3 text-xs">
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
      <div className="mt-24 flex flex-col sm:flex-row gap-6 px-2 sm:px-16">
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
            onClick={() => dispatch({ type: "SHIPPING_SUCCESS" })}
            className={`${
              shipping ? "bg-corekColor1" : "bg-corekColor3 text-white"
            } py-2.5 text-sm pl-4 rounded font-bold hover:bg-corekColor1 hover:text-corekColor3 duration-500 cursor-pointer`}
          >
            CHECKOUT
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
                <span className="text-corekColor2 cursor-pointer">
                  recent orders,
                </span>
                <span className="text-corekColor2 cursor-pointer">
                  edit your password and account details
                </span>{" "}
                and{" "}
                <span className="text-corekColor2 cursor-pointer">
                  Checkout
                </span>
                !!
              </p>
            </div>
          ) : orders ? (
            <div
                >
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
                        {ordersList.map((course, index) => (
                          <tr className="text-sm">
                            <td className="border border-gray-300 text-center p-2">
                              {index + 1}
                            </td>
                            <td className="border text-center border-gray-300 p-2">
                              {course.orderItems.name}
                            </td>
                            <td className="border text-center border-gray-300 p-2">
                              ${course.orderItems.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="py-4">
                    <button 
                      onClick={() => dispatch({type: 'SHIPPING_SUCCESS'})}
                      className="bg-main-color float-right text-white text-sm font-bold px-4 rounded py-2 hover:bg-corekColborder-y-corekColor1 duration-500"
                    >
                      CHECKOUT
                    </button>
                  </div>
                  </div>
                  ) : (
                    <div>There are currently no orders</div>
                  )}
                </div>
          ): (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
