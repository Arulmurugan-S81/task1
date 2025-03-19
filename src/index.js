import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blog";
import About from "./About";
import Contact from "./Contact";
import Fruniture from "./Fruniture";
import Login from "./Login";

import "./index.css";

export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs/>} />  {/* Pass cart & setCart */}
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="fruniture" element={<Fruniture />} />  {/* Pass cart & setCart */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
