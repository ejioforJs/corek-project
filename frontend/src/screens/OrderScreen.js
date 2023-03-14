import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import courseHeroimg from "../assets/singleCourseHero.jpg";
import LoadingBox from "../components/LoadingBox";
import { Store } from "../Store";
import { getError } from "../utils";

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, loading: true, error: false };
    case 'CREATE_SUCCESS':
      return { ...state, loading: false, error: false };
    case 'CREATE_FAIL':
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

const OrderScreen = () => {
  const navigate = useNavigate();
  const [{ loading, error }, dispatch] = useReducer(reducer, {
    loading: false,
    error: false
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { cartItems },
  } = state;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    }
  });

  const placeOrderHandler = async () => {
    try {
      dispatch({ type: 'CREATE_REQUEST' });
      await axios.post(
        '/api/orders',
        {
          orderItems: cartItems,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      ctxDispatch({ type: 'CART_CLEAR' });
      dispatch({ type: 'CART_SUCCESS' });
      localStorage.removeItem('cartItems');
      navigate("/checkout");
    } catch (err) {
      dispatch({ type: 'CREATE_FAIL' });
      toast.error(getError(err));
    }
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
          PLACE ORDER HERE
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
      <div className="mt-8 px-4 md:px-16">
        <div className="text-2xl font-bold text-black">COURSES SELECTED</div>
        <table className="border-collapse w-full mt-8">
          <thead className="bg-[rgb(230,230,230)]">
            <tr>
              <th className="border-y-corekColor1 text-start pl-2 md:pl-8 py-2 border-gray-300">
                Course
              </th>
              <th className="border-y-corekColor1 border-gray-300">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
          {cartItems.map((product, index) => (
            <tr className="text-sm">
              <td className="py-3">
                <div className="flex flex-row items-center space-x-2 md:space-x-8">
                  <img className="w-20 h-16 rounded-md" src={product.image} alt={product.name} />
                  <p className="font-semibold">{product.name}</p>
                </div>
              </td>
              <td className="text-center font-semibold">${product.price}.00</td>
            </tr>
            ))}
            <tr className="">
              <td className="font-semibold py-4">Total</td>
              <td className="text-center font-semibold"> ${cartItems.reduce((a,c) => a + c.price,0)}.00 </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8 px-4 md:px-16">
        <button
        onClick={placeOrderHandler}
        disabled={cartItems.length === 0}
        className="bg-corekColor1 border-2 border-corekColor1 text-sm px-7 py-3 font-semibold rounded hover:bg-white duration-300">Place Order</button>
      </div>
    </div>
  );
};

export default OrderScreen;
