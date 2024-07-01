import React, { useState } from "react";
import axios from "axios";
import "../../assets/css/modal.css";
import { useNavigate } from "react-router-dom";

function Service_modal() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: null,
  });
  const navigate = useNavigate();

  const basurl = "http://127.0.0.1:8000/";

  const axiosInstance = axios.create({
    baseURL: basurl,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "image" && files) {
      setFormData({
        ...formData,
        [id]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("content", formData.content);
    data.append("image", formData.image);

    try {
      const response = await axiosInstance.post("services/", data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.status === 201) {
        navigate("/Service");
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
      <div className="mb-5">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="mb-5">
        <label htmlFor="content">Content</label>
        <input
          type="text"
          id="content"
          value={formData.content}
          onChange={handleChange}
        />
      </div>
      <div className="mb-5">
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
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

export default Service_modal;
