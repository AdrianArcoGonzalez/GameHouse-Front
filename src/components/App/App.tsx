import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import RegisterPage from "../../pages/RegisterPage";
import Footer from "../Footer/Footer";
import LoginPage from "../../pages/LoginPage";
import Games from "../Games/Games";
import { mockGameArray } from "../../mocks/mockGame";

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
      <Games games={mockGameArray} />
      <Footer />
    </>
  );
};

export default App;
