import CreateGame from "../components/CreateGame/CreateGame";
import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import EditGamePageStyled from "./EditGamePageStyled";

const EditGamePage = (): JSX.Element => {
  return (
    <EditGamePageStyled>
      <HeroSection srcImage="/images/editGame.webp" text={heroTexts.editGame} />
      <h2 className="title">Edit Game</h2>
      <CreateGame />
    </EditGamePageStyled>
  );
};

export default EditGamePage;
