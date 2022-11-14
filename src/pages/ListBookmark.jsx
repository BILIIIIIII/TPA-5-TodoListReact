import { useSelector } from "react-redux";

const ListBookmark = () => {
  const { news } = useSelector((state) => state);

  return (
    <div id="container">
      <div id="cards">
        {news.map((item) => (
          <div className="card">
            <div className="desc">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBookmark;
