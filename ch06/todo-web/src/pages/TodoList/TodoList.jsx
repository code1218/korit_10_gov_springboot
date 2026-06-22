import { useTodoList } from "../../hooks/queries/useTodo";
import * as s from "./styles";

function TodoList() {

    const todoListQuery = useTodoList();

    console.log(todoListQuery.isLoading || todoListQuery.data.body);

    return (
        <>
            
        </>
    )
}

export default TodoList;