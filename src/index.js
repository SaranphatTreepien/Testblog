import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout.js"; // Import the Layout component
import Dashbord from "./Dashbord/Dashbord.js"; 
import BlogSt1 from "./Blogstory/Blogst1.js"; 
import BlogSt2 from "./Blogstory/Blogst2.js"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* Main layout route */}
      <Route path="/" element={<Layout />}>
        {/* Nested routes for each page */}
        <Route index element={<Dashbord />} />
        <Route path="Blogstory1" element={<BlogSt1 />} />
        <Route path="Blogstory2" element={<BlogSt2 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
