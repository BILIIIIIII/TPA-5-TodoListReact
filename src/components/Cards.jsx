import { editTodo, removeTodo } from "../store/actions/TodoAction";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/cards.css";

function Cards() {
  const dispatch = useDispatch();

  const todo = useSelector((state) => state);
  // console.log(todo);

  return (
    <div id="cards">
      {todo.map((item, index) => (
        <div key={index} className="card">
          <div className="top">
            <div className="checkbox">
              <input type="checkbox" />
            </div>
            <div className="desc">
              <p>{item}</p>
            </div>
          </div>
          <div className="bottom">
            <i
              onClick={() => dispatch(removeTodo(item))}
              className="bx bxs-trash"
            ></i>
            <i
              onClick={() => dispatch(editTodo(item))}
              className="bx bxs-pencil"
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
