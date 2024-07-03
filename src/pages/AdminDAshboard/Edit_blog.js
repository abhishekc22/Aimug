import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Edit_blog = () => {
  const basurl = "http://127.0.0.1:8000/";

  const axioinstamce = axios.create({
    baseURL: basurl,
  });

  const navigate = useNavigate();

  const { id } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    author: "",
  });

  useEffect(() => {
    const fetchblogDetails = async () => {
      try {
        const response = await axioinstamce.get(`blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchblogDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axioinstamce.patch(`blogs/${id}/`, blog);
      console.log("Job updated successfully");
      navigate("/blogs_admin");
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  return (
    <div>
      <h2>Edit Blog: {id}</h2>
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
            value={blog.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            name="content"
            value={blog.content}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            name="author"
            value={blog.author}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update Job
        </button>
      </form>
    </div>
  );
};

export default Edit_blog;
