import React from 'react';
import "../../assets/css/modal.css";

function ExampleForm() {
  return (
    <form>
      <div className="mb-5">
        <label htmlFor="position-name">Position Name</label>
        <input type="text" id="position-name" />
      </div>

      <div className="mb-5">
        <label htmlFor="job-description">Job Description</label>
        <textarea id="job-description"></textarea>
      </div>

      <div className="mb-5">
        <label htmlFor="location">Location</label>
        <input type="text" id="location" />
      </div>

      <div className="mb-5">
        <label htmlFor="responsibility">Responsibility</label>
        <textarea id="responsibility"></textarea>
      </div>

      <div className="mb-5">
        <label htmlFor="qualifications">Qualifications</label>
        <textarea id="qualifications"></textarea>
      </div>

      <div className="mb-5">
        <label htmlFor="job-mode">Job Mode</label>
        <select id="job-mode">
          <option value="WFH">WFH</option>
          <option value="WFO">WFO</option>
          <option value="Hybrid">Hybrid</option>
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="vacancy">Vacancy</label>
        <input type="number" id="vacancy" />
      </div>

      <div className="mb-5">
        <label htmlFor="salary">Salary</label>
        <input type="number" id="salary" />
      </div>

      <div className="mb-5">
        <label htmlFor="publish-date">Publish Date</label>
        <input type="date" id="publish-date" />
      </div>
    </form>
  );
}

export default ExampleForm;
