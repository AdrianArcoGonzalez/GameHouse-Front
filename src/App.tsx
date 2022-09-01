import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import RegisterPage from "./pages/RegisterPage";
const App = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
