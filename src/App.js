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
import Resetpassword from "./pages/Resetpassword";
import Adminlogin from "./pages/Adminlogin";
import Otp from "./pages/Otp";
import Dashboard from "./pages/AdminDAshboard/Dashboard";
import Admin_careeelist from "./pages/AdminDAshboard/Admin_careeelist";
import Modal from "./pages/AdminDAshboard/Modal";
import Protectrouter from "./pages/Protectrouter";
import Blogs_admin from "./pages/AdminDAshboard/Blogs_admin";
import Service from "./pages/AdminDAshboard/Service";
import Blog_modal from "./pages/AdminDAshboard/Blog_modal";
import Service_modal from "./pages/AdminDAshboard/Service_modal";
import Editcarrer from "./pages/AdminDAshboard/Editcarrer";
import Edit_blog from "./pages/AdminDAshboard/Edit_blog";
import Edit_service from "./pages/AdminDAshboard/Edit_service";
import User_service from "./pages/User_service";
import Footer from "./pages/Footer";
import Faq from "./pages/Faq";
import Enquiry_list from "./pages/AdminDAshboard/Enquiry_list";
import Login_userlist from "./pages/AdminDAshboard/Login_userlist";
import Forgotpassword from "./pages/Forgotpassword";


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
          <Route
            path="/Career"
            element={<Protectrouter element={<Career />} />}
          />
          <Route
            path="/Carrerdetails/:id"
            element={<Protectrouter element={<Carrerdetails />} />}
          />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blogdetail/:id" element={<Blogdetail />} />

          <Route path="/resetpassword" element={<Resetpassword />} />
          <Route path="/Adminlogin" element={<Adminlogin />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/carrirer_list" element={<Admin_careeelist />} />
          <Route path="/Add_job" element={<Modal />} />
          <Route path="/edit-job/:id" element={<Editcarrer />} />
          <Route path="/blogs_admin" element={<Blogs_admin />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/blog_modal" element={<Blog_modal />} />
          <Route path="/service_modal" element={<Service_modal />} />
          <Route path="/edit-blog/:id" element={<Edit_blog />} />
          <Route path="/edit-service/:id" element={<Edit_service />} />
          <Route path="/userservice" element={<User_service />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/Enquiry_list" element={<Enquiry_list />} />
          <Route path="/Login_userlist" element={<Login_userlist />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
