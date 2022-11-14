// import { Link } from "react-router-dom";
import InputForm from "./InputForm";
import "../assets/css/nav.css";

function Navbar() {
  return (
    <nav>
      <div id="logo">
        <img src="./public/book.svg" alt="" />
        <h3 className="logo">
          Nyoba<span>Bookmark</span>
        </h3>
      </div>
      <InputForm />
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list-bookmark">Bookmark</Link>
        </li>
      </ul> */}
    </nav>
  );
}

export default Navbar;
