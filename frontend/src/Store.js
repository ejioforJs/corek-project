import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  addSearch: localStorage.getItem("search")
    ? JSON.parse(localStorage.getItem("search"))
    : null,
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_SEARCH":
      return { ...state, addSearch: action.payload };
    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };
    case "USER_SIGNOUT":
        return {...state, userInfo: null}
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
