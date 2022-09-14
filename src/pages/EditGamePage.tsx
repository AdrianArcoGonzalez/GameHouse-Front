import { useEffect } from "react";
import EditGame from "../components/EditGame/EditGame";
import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import EditGamePageStyled from "./EditGamePageStyled";

const EditGamePage = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <EditGamePageStyled>
      <HeroSection srcImage="/images/editGame.webp" text={heroTexts.editGame} />
      <h2 className="title">Edit Game</h2>
      <EditGame />
    </EditGamePageStyled>
  );
};

export default EditGamePage;
