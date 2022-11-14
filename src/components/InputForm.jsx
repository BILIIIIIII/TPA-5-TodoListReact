import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/actions/TodoAction";
import "../assets/css/inputForm.css";

function InputForm() {
  // const add = () => {
  //   dispatch(addTodo());
  // };

  const [input, setInput] = useState(" ");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: Math.floor(Math.random() * 100),
        input,
      })
    );
    setInput("");
  };

  return (
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
  );
}

export default InputForm;
