import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import RegisterPage from "../../pages/RegisterPage";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";

const App = (): JSX.Element => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/home" element={<></>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<></>} />
        <Route path="/mycollection" element={<></>} />
        <Route path="/games" element={<></>} />
      </Routes>
      <Login />
      <Footer />
    </>
  );
};

export default App;
