import { useEffect } from "react";
import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import Register from "../components/Register/Register/Register";

const RegisterPage = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <HeroSection
        text={heroTexts.register}
        srcImage={"images/register.webp"}
      />
      <Register />;
    </>
  );
};

export default RegisterPage;
