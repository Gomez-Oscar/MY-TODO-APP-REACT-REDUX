import axios from "axios";
import { fillTodoList, createTask, setError } from "./todoListSlice";

const URL_API = "https://todolist-back-dev-xefk.4.us-1.fl0.io/todoList";



export const fillTodoListAsync = () =>{
    
    return async (dispatch) => {
        try {
            const {data} = await axios.get(URL_API);
            dispatch(fillTodoList(data));
        } catch (error) {
            console.log(error);
            dispatch(setError(true))
        }
    }
}

export const createTaskAsync = (newTask) => async (dispatch) =>{
    try {
        const response = await axios.post(URL_API, newTask);
        console.log(response);
        dispatch(createTask(response.data))
    } catch (error) {
        console.log(error);
        dispatch(setError(true))
    }
}