import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ListBookmark from "./pages/ListBookmark";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRouter;
