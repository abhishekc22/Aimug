import React, { useState } from "react";
import axios from "axios";
import "../../assets/css/modal.css";
import { useNavigate } from "react-router-dom";

function Blog_modal() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });
  const navigate = useNavigate();

  const basurl = "http://127.0.0.1:8000/";

  const axiosInstance = axios.create({
    baseURL: basurl,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };
  console.log(formData, "??????????????????/");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("blogs/", formData);
      if (response.status === 201) {
        navigate("/blogs_admin");
        console.log("Form submitted successfully:", response.data);
      } else {
        console.error("Unexpected response status:", response.status);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error("Server error:", error.response.data);
        if (error.response.data.Job_application) {
          console.error(
            "Job Application errors:",
            error.response.data.Job_application
          );
        }
      } else if (error.request) {
        console.error("No response from server:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      position_name
      <div className="mb-5">
        <label htmlFor="content"> Content</label>
        <textarea
          id="content"
          value={formData.content}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-5">
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={formData.author}
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Blog_modal;
