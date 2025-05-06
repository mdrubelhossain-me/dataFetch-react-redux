//import axios from 'axios';
import axios from "axios";
import {
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/todosConstant";
import type { Dispatch } from "redux";

//action create
export const getAllTodos = () => async (dispatch: Dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    dispatch({ type: GET_TODOS_SUCCESS, payload: response.data });
  } catch (error) {
    if (error instanceof Error) {
      dispatch({ type: GET_TODOS_FAILURE, payload: error.message });
    } else {
      dispatch({
        type: GET_TODOS_FAILURE,
        payload: "An unknown error occurred",
      });
    }
  }
};

export default getAllTodos;
