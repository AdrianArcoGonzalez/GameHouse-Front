import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import Login from "../components/Login/Login";

const LoginPage = (): JSX.Element => {
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
