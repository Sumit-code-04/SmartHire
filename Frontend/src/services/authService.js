import api from "../api/axios";

export const login = async (loginData) => {

    const response = await api.post("/auth/login", loginData);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("role", response.data.role);

    return response.data;

};

export const register = async (registerData) => {
    const response = await api.post("/auth/register", registerData);

    return response.data;
};

export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
};

export const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
};