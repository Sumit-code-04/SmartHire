import { Link } from "react-router-dom";

function Home() {

    return (

        <div className="container text-center mt-5">

            <h1 className="display-3 fw-bold">

                SmartHire

            </h1>

            <p className="lead mt-4">

                Find your dream job with one click.

            </p>

            <div className="mt-4">

                <Link
                    className="btn btn-primary btn-lg me-3"
                    to="/login"
                >
                    Login
                </Link>

                <Link
                    className="btn btn-success btn-lg"
                    to="/register"
                >
                    Get Started
                </Link>

            </div>

            <div className="row mt-5">

                <div className="col-md-4">

                    <div className="card shadow">

                        <div className="card-body">

                            <h3>500+</h3>

                            <p>Jobs</p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow">

                        <div className="card-body">

                            <h3>100%</h3>

                            <p>Secure</p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card shadow">

                        <div className="card-body">

                            <h3>24/7</h3>

                            <p>Support</p>

                        </div>

                    </div>

                </div>

                <div className="mt-5">

                      <h2 className="fw-bold">

                          Why Choose SmartHire?

                      </h2>

                      <div className="row mt-4">

                          <div className="col-md-4">

                              <h4>🚀 Fast Hiring</h4>

                              <p>
                                  Apply to jobs within seconds.
                              </p>

                          </div>

                          <div className="col-md-4">

                              <h4>🔒 Secure Authentication</h4>

                              <p>
                                  JWT based authentication.
                              </p>

                          </div>

                          <div className="col-md-4">

                              <h4>💼 Trusted Companies</h4>

                              <p>
                                  Find jobs from top organizations.
                              </p>

                          </div>

                      </div>

                  </div>

            </div>

        </div>

    );

}

export default Home;