import { createStore } from "redux";
import { todoReducer } from "./reducers/TodoReducer";

// Membuat store berdasarkan reducers yang telah dibuat
const store = createStore(todoReducer);

export default store;
