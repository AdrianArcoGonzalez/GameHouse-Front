import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import RegisterPage from "../../pages/RegisterPage";
import Footer from "../Footer/Footer";
import LoginPage from "../../pages/LoginPage";
import Game from "../Game/Game";
import { Game as IGame } from "../../interfaces/interfaces";

const fakeGame: IGame = {
  title: "Dark Souls",
  category: "Adventure",
  image: "/images/singindarksouls.webp",
  company: "",
  dislikes: 0,
  likes: 0,
  owner: "",
  sinopsis: "",
  reviews: [""],
};
const App = (): JSX.Element => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/home" element={<></>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mycollection" element={<></>} />
        <Route path="/games" element={<></>} />
      </Routes>
      <Game game={fakeGame} />
      <Footer />
    </>
  );
};

export default App;
