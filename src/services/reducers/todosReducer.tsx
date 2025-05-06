import {
  GET_TODOS_FAILURE,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/todosConstant";

//Initial state
const initialState = {
  todos: [],
  loading: false,
  error: null,
};

//Reducer function
interface Action {
  type: string;
  payload?: { id: number; title: string; completed: boolean }[] | string;
}

const todosReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case GET_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todosReducer;
