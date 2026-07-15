import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/");

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">

            <div className="container">

                <span className="fw-bold fs-3">
                    SmartHire
                </span>

                <div>
                     {localStorage.getItem("role") === "ADMIN" && (
                          <Link className="btn btn-outline-light me-2" to="/admin">
                              Admin
                          </Link>
                      )}

                    <Link
                        className="btn btn-outline-light me-2"
                        to="/jobs">

                        Jobs

                    </Link>

                    <Link
                        className="btn btn-outline-light me-2"
                        to="/applications">

                        My Applications

                    </Link>

                    <button
                        className="btn btn-danger"
                        onClick={logout}>

                        Logout

                    </button>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;