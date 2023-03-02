import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  addSearch: localStorage.getItem("search")
    ? JSON.parse(localStorage.getItem("search"))
    : null,
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  orderItems: localStorage.getItem("orderItems")
    ? JSON.parse(localStorage.getItem("orderItems"))
    : []
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_SEARCH":
      return { ...state, addSearch: action.payload };
    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };
    case "USER_SIGNOUT":
      return {...state, userInfo: null}
    case 'ORDER_ADD_ITEM':
      //Add to cart
      const newItem = action.payload;
      const existItem = state.orderItems.find(
        (item) => item._id === newItem._id
      );
      const orderItems = existItem
        ? state.orderItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.orderItems, newItem];
      localStorage.setItem('orderItems', JSON.stringify(orderItems));
      return { ...state, orderItems: orderItems };
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
