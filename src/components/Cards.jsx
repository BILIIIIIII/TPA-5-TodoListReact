import { editTodo, removeTodo } from "../store/actions/TodoAction";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/cards.css";

function Cards() {
  const dispatch = useDispatch();

  // const [checked, setChecked] = useState(false);

  const remove = () => {
    dispatch(removeTodo);
    console.log();
  };

  const edit = () => {
    dispatch(editTodo);
  };

  const Todo = useSelector((state) => state);
  console.log(Todo);

  return (
    <div id="cards">
      {Todo.map((item) => (
        <div key={item.id} className="card">
          <div className="top">
            <div className="checkbox">
              <input type="checkbox" />
            </div>
            <div className="desc">
              <p>{item.title}</p>
            </div>
          </div>
          <div className="bottom">
            <i onClick={remove} className="bx bxs-trash"></i>
            <i onClick={edit} className="bx bxs-pencil"></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
