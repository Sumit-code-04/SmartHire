import api from "../api/axios";

export const getAllJobs = async () => {
    const response = await api.get("/jobs");
    return response.data;
};