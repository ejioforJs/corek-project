import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Store } from "../Store";
import { getError } from "../utils";
import AddcourseComponent from "./AddcourseComponent";
import AdduserComponent from "./AdduserComponent";
import RemovecourseComponent from "./RemovecourseComponent";
import RemoveuserComponent from "./RemoveuserComponent";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADDCOURSE_SUCCESS":
      return {
        ...state,
        addcourse: true,
        removecourse: false,
        adduser: false,
        removeuser: false,
      };
    case "REMOVECOURSE_SUCCESS":
      return {
        ...state,
        addcourse: false,
        removecourse: true,
        adduser: false,
        removeuser: false,
      };
    case "ADDUSER_SUCCESS":
      return {
        ...state,
        addcourse: false,
        removecourse: false,
        adduser: true,
        removeuser: false,
      };
    case "REMOVEUSER_SUCCESS":
      return {
        ...state,
        addcourse: false,
        removecourse: false,
        adduser: false,
        removeuser: true,
      };
    case "FETCH-REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        courses: action.payload,
        error: "",
      };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const AdminComponent = () => {
  const navigate = useNavigate();
  const [
    { addcourse, removecourse, adduser, removeuser, loading, error, courses },
    dispatch,
  ] = useReducer(reducer, {
    addcourse: true,
    removecourse: false,
    adduser: false,
    removeuser: false,
    loading: false,
    error: "",
    courses: [],
  });

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

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
    <div className="mt-24 flex flex-col sm:flex-row gap-6 px-2 sm:px-16">
      <div className="basis-1/4 flex flex-col gap-3">
        <div
          onClick={() => dispatch({ type: "ADDCOURSE_SUCCESS" })}
          className={`${
            addcourse ? "bg-corekColor1" : "bg-corekColor3 text-white"
          } py-2.5 text-sm pl-4 rounded font-bold hover:bg-corekColor1 hover:text-corekColor3 duration-500 cursor-pointer`}
        >
          ADD COURSE
        </div>
        <div
          onClick={() => dispatch({ type: "REMOVECOURSE_SUCCESS" })}
          className={`${
            removecourse ? "bg-corekColor1" : "bg-corekColor3 text-white"
          } py-2.5 text-sm pl-4 rounded font-bold hover:bg-corekColor1 hover:text-corekColor3 duration-500 cursor-pointer`}
        >
          REMOVE COURSE
        </div>
        <div
          onClick={() => dispatch({ type: "ADDUSER_SUCCESS" })}
          className={`${
            adduser ? "bg-corekColor1" : "bg-corekColor3 text-white"
          } py-2.5 text-sm pl-4 rounded font-bold hover:bg-corekColor1 hover:text-corekColor3 duration-500 cursor-pointer`}
        >
          ADD USER
        </div>
        <div
          onClick={() => dispatch({ type: "REMOVEUSER_SUCCESS" })}
          className={`${
            removeuser ? "bg-corekColor1" : "bg-corekColor3 text-white"
          } py-2.5 text-sm pl-4 rounded font-bold hover:bg-corekColor1 hover:text-corekColor3 duration-500 cursor-pointer`}
        >
          REMOVE USER
        </div>
      </div>
      <div className="basis-3/4">
        {addcourse ? (
          <AddcourseComponent />
        ) : removecourse ? (
          <RemovecourseComponent />
        ) : adduser ? (
          <AdduserComponent />
        ) : removeuser ? (
          <RemoveuserComponent />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default AdminComponent;
