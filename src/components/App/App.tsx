import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import RegisterPage from "../../pages/RegisterPage";
import Footer from "../Footer/Footer";
import heroTexts from "../HeroSection/heroData/heroData";

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <HeroSection
        text={heroTexts.register}
        srcImage={"images/form-background.png"}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/home" element={<></>} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<></>} />
        <Route path="/mycollection" element={<></>} />
        <Route path="/games" element={<></>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
