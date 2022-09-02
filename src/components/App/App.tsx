import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import RegisterPage from "../../pages/RegisterPage";
import Footer from "../Footer/Footer";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
