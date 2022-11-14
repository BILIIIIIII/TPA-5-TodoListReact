export const ADD_TODOLIST = "ADD_TODOLIST";
export const REMOVE_TODOLIST = "REMOVE_TODOLIST";
export const EDIT_TODOLIST = "EDIT_TODOLIST";

export function addTodo(title) {
  return {
    type: ADD_TODOLIST,
    title,
  };
}

export const removeTodo = (id) => ({
  type: REMOVE_TODOLIST,
  id,
});

export function editTodo(title) {
  return {
    type: EDIT_TODOLIST,
    title,
  };
}
