import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import RegisterPage from "../../pages/RegisterPage";
import Footer from "../Footer/Footer";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mycollection" element={<></>} />
        <Route path="/games" element={<></>} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
