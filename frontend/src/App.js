import React, {  } from "react";
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
import CheckoutScreen from "./screens/CheckoutScreen";
import ComingsoonScreen from "./screens/ComingsoonScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import FaqScreen from "./screens/FaqScreen";
import ActivateRegisterComponent from "./components/ActivateRegisterComponent";
import ActivatedAccountComponent from "./components/ActivatedAccountComponent";

function App() {
  // useEffect(() => {
  //   localStorage.clear()
  // })
  return (
    <BrowserRouter>
      <div className="globalFont text-gray-800 overflow-hidden">
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
            <Route path="/placeorder" element={<OrderScreen />} />
            <Route path="/checkout" element={<CheckoutScreen />} />
            <Route path="/comingsoon" element={<ComingsoonScreen />} />
            <Route path="/aboutus" element={<AboutScreen />} />
            <Route path="contactus" element={<ContactScreen />} />
            <Route path="/faq" element={<FaqScreen />} />
            <Route path="/register/activate" element={<ActivateRegisterComponent />} />
            <Route path="/users/activated" element={<ActivatedAccountComponent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
