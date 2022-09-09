import CreateGame from "../components/CreateGame/CreateGame";
import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import CreateGamePageStyled from "./CreateGamePageStyled";

const CreateGamePage = (): JSX.Element => {
  return (
    <>
      <HeroSection srcImage="/images/addGame.webp" text={heroTexts.addGame} />
      <CreateGamePageStyled>
        <h2 className="title">Add New Game</h2>
        <CreateGame />
      </CreateGamePageStyled>
    </>
  );
};

export default CreateGamePage;
