import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Career from "./pages/Career";
import Carrerdetails from "./pages/Carrerdetails";
import Blog from "./pages/Blog";
import Blogdetail from "./pages/Blogdetail";
import Home1 from "./pages/Home1";
import Home2 from "./pages/Home2";
import Resetpassword from "./pages/Resetpassword";
import Adminlogin from "./pages/Adminlogin";
import Otp from "./pages/Otp";
import Dashboard from "./pages/AdminDAshboard/Dashboard";
import Admin_careeelist from "./pages/AdminDAshboard/Admin_careeelist";
import Modal from "./pages/AdminDAshboard/Modal";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Carrerdetails" element={<Carrerdetails />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blogdetail" element={<Blogdetail />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/carrirer_list" element={<Admin_careeelist />} />
          <Route path="/Add_job" element={<Modal />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
