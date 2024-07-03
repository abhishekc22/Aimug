import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Editcarrer = () => {
  const basurl = "http://127.0.0.1:8000/";

  const axioinstamce = axios.create({
    baseURL: basurl,
  });

  const navigate = useNavigate();


  const { id } = useParams(); 
  const [job, setJob] = useState({
    position_name: "",
    job_description: "",
    location: "",
    responsibility: "",
    qualifications: "",
    job_mode: "",
    vacancy: "",
    salary: "",
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axioinstamce.get(`jobupdate/${id}`);
        setJob(response.data); 
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails(); 
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axioinstamce.put(`jobupdate/${id}/`, job);
      console.log("Job updated successfully");
      navigate('/carrirer_list');
      
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  return (
    <div>
      <h2>Edit Career: {id}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="position_name" className="form-label">Position Name</label>
          <input
            type="text"
            className="form-control"
            id="position_name"
            name="position_name"
            value={job.position_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="job_description" className="form-label">Job Description</label>
          <textarea
            className="form-control"
            id="job_description"
            name="job_description"
            value={job.job_description}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="location" className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={job.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="responsibility" className="form-label">Responsibility</label>
          <textarea
            className="form-control"
            id="responsibility"
            name="responsibility"
            value={job.responsibility}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="qualifications" className="form-label">Qualifications</label>
          <textarea
            className="form-control"
            id="qualifications"
            name="qualifications"
            value={job.qualifications}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="job_mode" className="form-label">Job Mode</label>
          <input
            type="text"
            className="form-control"
            id="job_mode"
            name="job_mode"
            value={job.job_mode}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="vacancy" className="form-label">Vacancy</label>
          <input
            type="text"
            className="form-control"
            id="vacancy"
            name="vacancy"
            value={job.vacancy}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">Salary</label>
          <input
            type="text"
            className="form-control"
            id="salary"
            name="salary"
            value={job.salary}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Update Job</button>
      </form>
    </div>
  );
};

export default Editcarrer;
