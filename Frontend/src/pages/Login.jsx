import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await login(formData);

            alert("Login Successful");

            navigate("/jobs");

        } catch (error) {

            alert("Invalid Credentials");

        }
    };

    return (
    <div
        className="d-flex justify-content-center align-items-center"
        style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #4f46e5, #3b82f6)"
        }}
    >
        <div
            className="card shadow-lg p-4"
            style={{ width: "400px", borderRadius: "15px" }}
        >
            <h2 className="text-center mb-4 text-primary">
                SmartHire Login
            </h2>

            <form onSubmit={handleSubmit}>

                <input
                    className="form-control mb-3"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    className="form-control mb-3"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />

                <button
                    className="btn btn-primary w-100"
                    type="submit"
                >
                    Login
                </button>

            </form>

            <p className="text-center mt-3">

                Don't have an account?{" "}

                <Link to="/register">
                    Register
                </Link>

            </p>

        </div>
    </div>
);
}

export default Login;