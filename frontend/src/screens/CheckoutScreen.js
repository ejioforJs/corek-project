import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import courseHeroimg from "../assets/singleCourseHero.jpg";
import stripeimg from "../assets/Stripe.png";
import LoadingBox from "../components/LoadingBox";
import { Store } from "../Store";
import { getError } from "../utils";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH-REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.payload,
        error: "",
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const CheckoutScreen = () => {
  const [{ orders, loading, error }, dispatch] = useReducer(reducer, {
    orders: [],
    loading: false,
    error: "",
  });
  const navigate = useNavigate()

  const { state } = useContext(Store);
  const { userInfo } = state;

  const checkoutHandler = () => {
    navigate("/comingsoon")
  };

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
          CHECKOUT
        </div>
      </div>
      <div className="ml-4 md:ml-16 mt-4 flex flex-row items-center space-x-1.5 text-xs">
        <div className="flex flex-row items-center space-x-2">
          You are logged in as
        </div>
        <Link to="/dashboardscreen">
          <div className="flex flex-row items-center space-x-2 text-corekColor1">
            <span>{userInfo.username}</span>
            <span>{">"}</span>
          </div>
        </Link>
      </div>
      <div className="mt-8 md:mt-12 px-4 md:px-16">
        <div className="text-2xl font-bold text-black">COURSES ORDERED</div>
        <table className="border-collapse w-full mt-8">
          <thead className="bg-[rgb(230,230,230)]">
            <tr>
              <th className="border-y-corekColor1 text-start pl-2 md:pl-8 py-2 border-gray-300">
                Course
              </th>
              <th className="border-y-corekColor1 border-gray-300">Price</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) =>
              order.orderItems.map((product) => (
                <tr className="text-sm">
                  <td className="py-3">
                    <div className="flex flex-row items-center space-x-2 md:space-x-8">
                      <img
                        className="w-20 h-16 rounded-md"
                        src={product.image}
                        alt={product.name}
                      />
                      <p className="font-semibold">{product.name}</p>
                    </div>
                  </td>
                  <td className="text-center font-semibold">
                    ${product.price}.00
                  </td>
                </tr>
              ))
            )}
            {/* {orders.map((order, index) => ( */}
            <tr className="">
              <td className="font-semibold py-4">Total</td>
              <td className="text-center font-semibold">
                {" "}
                {orders.map((orderitem) => (
                  <div key={orderitem._id}>
                    ${orderitem.orderItems.reduce((a, c) => a + c.price, 0)}.00
                  </div>
                ))}{" "}
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
      <div className="mt-8 md:mt-12 px-4 md:px-16">
        <div className="text-xl font-bold text-black">PAYMENT</div>
        <div className="mt-5 bg-[rgb(220,220,220)]">
          <img className="w-20 h-12" src={stripeimg} alt="stripe" />
        </div>
        <button
          onClick={checkoutHandler}
          disabled={orders.length === 0}
          className="bg-corekColor1 border-2 border-corekColor1 text-sm px-7 py-3 mt-8 font-semibold rounded hover:bg-white duration-300"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CheckoutScreen;
