import React, { useState } from 'react';
import axios from 'axios';
import "../../assets/css/modal.css";
import {  useNavigate } from 'react-router-dom';

function ExampleForm() {
  const [formData, setFormData] = useState({
    position_name: '',
    job_description: '',
    location: '',
    responsibility: '',
    qualifications: '',
    job_mode: 'WFH',
    vacancy: '',
    salary: '',
    publish_date: ''
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
      [id]: value
    });
  };
  console.log(formData,'??????????????????/')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('jobapplication/', formData);
      if (response.status === 201) {
        navigate('/carrirer_list')
        console.log('Form submitted successfully:', response.data);
      } else {
        console.error('Unexpected response status:', response.status);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Server error:', error.response.data);
        if (error.response.data.Job_application) {
          console.error('Job Application errors:', error.response.data.Job_application);
        }
      } else if (error.request) {
        console.error('No response from server:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
    }
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="position_name">Position Name</label>
        <input type="text" id="position_name" value={formData.position_name} onChange={handleChange} />
      </div>
      position_name
      <div className="mb-5">
        <label htmlFor="job_description">Job Description</label>
        <textarea id="job_description" value={formData.job_description} onChange={handleChange}></textarea>
      </div>

      <div className="mb-5">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" value={formData.location} onChange={handleChange} />
      </div>

      <div className="mb-5">
        <label htmlFor="responsibility">Responsibility</label>
        <textarea id="responsibility" value={formData.responsibility} onChange={handleChange}></textarea>
      </div>

      <div className="mb-5">
        <label htmlFor="qualifications">Qualifications</label>
        <textarea id="qualifications" value={formData.qualifications} onChange={handleChange}></textarea>
      </div>

      <div className="mb-5">
        <label htmlFor="job_mode">Job Mode</label>
        <select id="job_mode" value={formData.job_mode} onChange={handleChange}>
          <option value="WFH">WFH</option>
          <option value="WFO">WFO</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="vacancy">Vacancy</label>
        <input type="number" id="vacancy" value={formData.vacancy} onChange={handleChange} />
      </div>

      <div className="mb-5">
        <label htmlFor="salary">Salary</label>
        <input type="number" id="salary" value={formData.salary} onChange={handleChange} />
      </div>

      <div className="mb-5">
        <label htmlFor="publish_date">Publish Date</label>
        <input type="date" id="publish_date" value={formData.publish_date} onChange={handleChange} />
      </div>

      <div className="mb-5">
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  );
}

export default ExampleForm;
