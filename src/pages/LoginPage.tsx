import { ToastContainer } from "react-toastify";
import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import Login from "../components/Login/Login";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = (): JSX.Element => {
  return (
    <>
      <ToastContainer />
      <HeroSection
        text={heroTexts.signIn}
        srcImage={"images/singindarksouls.webp"}
      />
      <Login />;
    </>
  );
};

export default LoginPage;
