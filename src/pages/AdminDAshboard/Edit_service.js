import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Edit_service = () => {
  const basurl = "http://127.0.0.1:8000/";

  const axiosInstance = axios.create({
    baseURL: basurl,
  });

  const navigate = useNavigate();

  const { id } = useParams();
  const [service, setService] = useState({
    title: "",
    description: "",
    content: "",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axiosInstance.get(`services/${id}`);
        setService(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", service.title);
    formData.append("description", service.description);
    formData.append("content", service.content);
    // Append other fields...
    if (image) {
      formData.append("image", image);
    }

    try {
      await axiosInstance.patch(`services/${id}/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Job updated successfully");
      navigate("/Service");
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  return (
    <div>
      <h2>Edit service: {id}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={service.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={service.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <input
            type="text"
            className="form-control"
            id="content"
            name="content"
            value={service.content}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update Job
        </button>
      </form>
    </div>
  );
};

export default Edit_service;
