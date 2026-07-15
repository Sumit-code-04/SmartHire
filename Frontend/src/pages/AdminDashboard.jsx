import { useEffect, useState } from "react";
import { getAllJobs } from "../services/jobService";

import {
    createJob,
    updateJob,
    deleteJob
} from "../services/adminService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";





function AdminDashboard() {

  const [jobs, setJobs] = useState([]);

const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: ""
});

    





const [editingId, setEditingId] = useState(null);




useEffect(() => {
    loadJobs();
}, []);

const loadJobs = async () => {
    const data = await getAllJobs();
    setJobs(data);
};




const handleChange = (e) => {

    setJob({
        ...job,
        [e.target.name]: e.target.value
    });

};



const handleSubmit = async (e) => {

    e.preventDefault();

    if (editingId) {

        await updateJob(editingId, job);

        alert("Job Updated");

    } else {

        await createJob(job);

        alert("Job Created");

    }

    setJob({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: ""
    });

    setEditingId(null);

    loadJobs();

};


const editJob = (job) => {

    setEditingId(job.id);

    setJob(job);

};



const removeJob = async (id) => {

    if (!window.confirm("Delete this job?")) {
        return;
    }

    await deleteJob(id);

    alert("Job Deleted");

    loadJobs();

};


return (

        <>
            <Navbar />

            <div className="container mt-5">

                <h2>Admin Dashboard</h2>

                <div className="card p-4">

                  

                    <div className="card p-4 mb-4">

                          <h4 className="mb-3">
                              {editingId ? "Update Job" : "Create New Job"}
                          </h4>

                          <form onSubmit={handleSubmit}>

                              <input
                                  type="text"
                                  className="form-control mb-3"
                                  placeholder="Job Title"
                                  name="title"
                                  value={job.title}
                                  onChange={handleChange}
                                  required
                              />

                              <input
                                  type="text"
                                  className="form-control mb-3"
                                  placeholder="Company"
                                  name="company"
                                  value={job.company}
                                  onChange={handleChange}
                                  required
                              />

                              <input
                                  type="text"
                                  className="form-control mb-3"
                                  placeholder="Location"
                                  name="location"
                                  value={job.location}
                                  onChange={handleChange}
                                  required
                              />

                              <input
                                  type="number"
                                  className="form-control mb-3"
                                  placeholder="Salary"
                                  name="salary"
                                  value={job.salary}
                                  onChange={handleChange}
                                  required
                              />

                              <textarea
                                  className="form-control mb-3"
                                  rows="4"
                                  placeholder="Description"
                                  name="description"
                                  value={job.description}
                                  onChange={handleChange}
                                  required
                              />

                              <button className="btn btn-success">

                                  {editingId ? "Update Job" : "Create Job"}

                              </button>

                          </form>
                          <h3 className="mb-3">All Jobs</h3>

                          <table className="table table-bordered table-striped">

                              <thead>

                                  <tr>

                                      <th>Title</th>
                                      <th>Company</th>
                                      <th>Location</th>
                                      <th>Salary</th>
                                      <th>Actions</th>

                                  </tr>

                              </thead>

                              <tbody>

                                  {jobs.map((item) => (

                                      <tr key={item.id}>

                                          <td>{item.title}</td>
                                          <td>{item.company}</td>
                                          <td>{item.location}</td>
                                          <td>₹ {item.salary}</td>

                                          <td>

                                              <button
                                                  className="btn btn-warning btn-sm me-2"
                                                  onClick={() => editJob(item)}
                                              >
                                                  Edit
                                              </button>

                                              <button
                                                  className="btn btn-danger btn-sm"
                                                  onClick={() => removeJob(item.id)}
                                              >
                                                  Delete
                                              </button>

                                          </td>

                                      </tr>

                                  ))}

                              </tbody>

                          </table>

                      </div>

                </div>

            </div>
            <Footer />
        </>

    );

}


export default AdminDashboard;