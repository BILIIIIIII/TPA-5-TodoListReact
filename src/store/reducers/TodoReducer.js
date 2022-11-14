import {
  ADD_TODOLIST,
  EDIT_TODOLIST,
  REMOVE_TODOLIST,
} from "../actions/TodoAction";
import initialState from "../State";

export function todoReducer(state = initialState, action) {
  let newTodos;
  switch (action.type) {
    case ADD_TODOLIST:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;

    case REMOVE_TODOLIST:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;

    case EDIT_TODOLIST:
      return { state };
    default:
  }
  return state;
}
