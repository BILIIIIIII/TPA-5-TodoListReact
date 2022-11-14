export const ADD_TODOLIST = "ADD_TODOLIST";
export const REMOVE_TODOLIST = "REMOVE_TODOLIST";
export const EDIT_TODOLIST = "EDIT_TODOLIST";
export const COMPLETED_TODOLIST = "COMPLETED_TODOLIST";

export function addTodo(title) {
  return {
    type: ADD_TODOLIST,
    title,
  };
}

export const removeTodo = (id) => ({
  type: REMOVE_TODOLIST,
  payload: id,
});

export function editTodo(id) {
  return {
    type: EDIT_TODOLIST,
    payload: {
      id: id,
      value: payload,
    },
  };
}

export function complete(id) {
  return {
    type: COMPLETED_TODOLIST,
    id,
  };
}
