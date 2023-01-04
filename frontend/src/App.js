import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homescreen from "./screens/Homescreen";
import Navbar from "./components/Navbar";
import SingleCourseScreen from "./screens/SingleCourseScreen";
import CoursesScreen from "./screens/CoursesScreen";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="globalFont text-gray-800">
        <Navbar />
        <div className="relative">
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/course/:slug" element={<SingleCourseScreen />} />
            <Route path="/courses" element={<CoursesScreen itemsPerPage={9} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
