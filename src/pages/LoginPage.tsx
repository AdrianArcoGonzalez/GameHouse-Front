import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import Login from "../components/Login/Login";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const LoginPage = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <HeroSection
        text={heroTexts.signIn}
        srcImage={"images/singindarksouls.webp"}
      />
      <Login />;
    </>
  );
};

export default LoginPage;
