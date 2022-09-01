import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import RegisterPage from "../../pages/RegisterPage";
const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
};

export default App;
