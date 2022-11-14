// import Cards from "../components/Cards";
import Cards from "../components/Cards";
import Filter from "../components/Filter";
// import InputForm from "../components/InputForm";

function Home() {
  return (
    <div id="container">
      <Filter />
      {/* <InputForm /> */}
      <Cards />
    </div>
  );
}

export default Home;
