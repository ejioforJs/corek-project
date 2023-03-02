import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Navbar from "./components/Navbar";
import SingleCourseScreen from "./screens/SingleCourseScreen";
import CoursesScreen from "./screens/CoursesScreen";
import Footer from "./components/Footer";
import DashboardScreen from "./screens/DashboardScreen";
import {ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="globalFont text-gray-800">
      <ToastContainer
          position="top-center"
          autoClose={10000}
          theme="colored"
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={1}
        ></ToastContainer>
        <Navbar />
        <div className="relative">
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/course/:slug" element={<SingleCourseScreen />} />
            <Route path="/courses" element={<CoursesScreen itemsPerPage={9} />} />
            <Route path="/dashboardscreen" element={<DashboardScreen />} />
            <Route path="/order/:id" element={<OrderScreen />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
