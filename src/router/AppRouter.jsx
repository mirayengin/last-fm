import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Details from "../pages/Details";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
        {/* Absolute */}
        {/* <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details/>} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
