import { axiosInstance } from "./axiosInstance";

export const registerTodo = async (data) => {
    try {
        const response = await axiosInstance.post("/api/todos", data);
        return response.data;
    } catch(error) {
        return error.response.data;
    }
}
