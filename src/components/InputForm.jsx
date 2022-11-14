import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, editTodo } from "../store/actions/TodoAction";
import "../assets/css/inputForm.css";

function InputForm() {
  const [input, setInput] = useState(" ");
  const [editinput, setEditInput] = useState(" ");

  const dispatch = useDispatch();
  const todosData = useSelector((state) => state);

  console.log(todosData);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
  };

  const editData = (e) => {
    e.preventDefault();
    dispatch(editTodo());
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          placeholder="Add a todo"
          type="text"
          value={input}
          name="text"
          className="todo-input"
          onChange={handleChange}
          autoComplete="off"
        />
        <button id="btn-addTodo">
          <i onClick={handleSubmit} className="bx bx-plus-circle"></i>
        </button>
      </form>
    </div>
  );
}

export default InputForm;
