import { useMutation } from "@tanstack/react-query"
import { registerTodo } from "../../api/todoApis";

export const useTodoRegisterMutation = () => {

    return useMutation({
        mutationFn: (data) => registerTodo(data),
        onSuccess: (response) => {
            
        },
        onError: (error) => {
            alert(error.message);
        }
    });
}