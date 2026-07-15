import { useEffect, useState } from "react";
import { getMyApplications } from "../services/applicationService";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



function MyApplications() {

    const [applications, setApplications] = useState([]);

    useEffect(() => {
        loadApplications();
    }, []);

    const loadApplications = async () => {

        try {

            const data = await getMyApplications();

            setApplications(data);

        } catch (error) {

            console.log(error);

            alert("Failed to load applications");

        }

    };

    return (

      <>

       <Navbar />
        <div className="container mt-5">

            <h2 className="mb-4">
                My Applications
            </h2>

            <table className="table table-bordered">

                <thead>

                <tr>

                    <th>Job</th>

                    <th>Company</th>

                    <th>Status</th>

                </tr>

                </thead>

                <tbody>

                {

                    applications.map((application) => (

                        <tr key={application.id}>

                            <td>{application.job.title}</td>

                            <td>{application.job.company}</td>

                            <td>{application.status}</td>

                        </tr>

                    ))

                }

                </tbody>

            </table>

        </div>

        <Footer />

       </> 


    );

}

export default MyApplications;