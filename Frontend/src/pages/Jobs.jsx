import { useEffect, useState } from "react";
import { getAllJobs } from "../services/jobService";
import { applyJob } from "../services/applicationService";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Footer from "../components/Footer";





function Jobs() {

    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadJobs();
    }, []);

    const loadJobs = async () => {
    try {
        const data = await getAllJobs();
        setJobs(data);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};

    const handleApply = async (jobId) => {

    try {

        await applyJob(jobId);

        Swal.fire({
                      icon: "success",
                      title: "Success!",
                      text: "Application submitted successfully.",
                      timer: 1800,
                      showConfirmButton: false
                  });

    } catch (error) {

        if (error.response) {
            alert(error.response.data);
        } else {
           Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to apply."
                    });
        }

    }

};

if (loading) {
    return <Loading />;
}



   return (
    <>
        <Navbar />

        <div className="container mt-5">

            <div className="mb-3">

                <button
                    className="btn btn-primary"
                    onClick={() => window.location.href = "/applications"}
                >
                    My Applications
                </button>

            </div>
            <input
                    type="text"
                    className="form-control mb-4"
                    placeholder="🔍 Search by job title or company..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            <h2 className="mb-4">Available Jobs</h2>

            {
                jobs.length === 0 ? (
                    <p>No Jobs Available</p>
                ) : (
                    <div className="row">

                    {jobs.filter(
                              (job) =>
                                  job.title.toLowerCase().includes(search.toLowerCase()) ||
                                  job.company.toLowerCase().includes(search.toLowerCase())
                          )
                          .map((job) => (

                        <div className="col-md-6 mb-4" key={job.id}>

                            <div
                                className="card shadow border-0 h-100"
                                style={{
                                    borderRadius: "15px",
                                    transition: "0.3s"
                                }}
                            >

                                <div className="card-body">

                                    <h4 className="fw-bold text-primary">
                                        {job.title}
                                    </h4>

                                    <h6 className="text-secondary">
                                        🏢 {job.company}
                                    </h6>

                                    <p className="mb-2">
                                        📍 {job.location}
                                    </p>

                                    <span className="badge bg-success fs-6 mb-3">
                                        ₹ {job.salary}
                                    </span>

                                    <p className="mt-3">
                                        {job.description}
                                    </p>

                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={() => handleApply(job.id)}
                                    >
                                        Apply Now
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>
                                )
            }

        </div>
        <Footer />
    </>
);
}
export default Jobs;