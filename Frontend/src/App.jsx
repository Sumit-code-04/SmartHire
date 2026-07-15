import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Home from "./pages/Home";
import MyApplications from "./pages/MyApplications";
import AdminDashboard from "./pages/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoute from "./components/AdminRoute";



function App() {

    return (

        <BrowserRouter>

            <Routes>

                      <Route
                          path="/"
                          element={<Home />}
                      />

                      <Route
                          path="/login"
                          element={<Login />}
                      />
                      <Route
                          path="/register"
                          element={<Register />}
                      />

                      <Route
                            path="/jobs"
                            element={
                                <PrivateRoute>
                                    <Jobs />
                                </PrivateRoute>
                            }
                        />

                        <Route
                            path="/applications"
                            element={
                                <PrivateRoute>
                                    <MyApplications />
                                </PrivateRoute>
                            }
                        />

                        <Route
                            path="/admin"
                            element={
                                <AdminRoute>
                                    <AdminDashboard />
                                </AdminRoute>
                            }
                        />

                  </Routes>

        </BrowserRouter>

    );

}

export default App;