import {
  ADD_TODOLIST,
  COMPLETED_TODOLIST,
  EDIT_TODOLIST,
  REMOVE_TODOLIST,
} from "../actions/TodoAction";
import initialState from "../State";

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODOLIST:
      return [...state, action.title];

    case REMOVE_TODOLIST:
      const indexTodo = state.findIndex((item) => item === action.payload);
      const removeTodo = state.splice(indexTodo, 1);
      return [...state];

    case EDIT_TODOLIST:
      const editTodoTask = state.map((item) => {
        if (item === action.payload.id) {
          return {
            ...item,
            title: action.payload.value,
          };
        } else {
          return item;
        }
      });
      return editTodoTask;

    case COMPLETED_TODOLIST:
      const completedTodo = state.map((item) => {
        if (item === action.id) {
          return {
            ...item,
            status: !item.status,
          };
        } else {
          return item;
        }
      });
      return completedTodo;
    default:
  }
  return state;
}
