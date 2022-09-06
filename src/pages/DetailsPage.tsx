import GameDetails from "../components/GameDetails/GameDetails";
import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import useDetails from "../hooks/useDetails";

const DetailsPage = (): JSX.Element => {
  const game = useDetails();

  return (
    <>
      <HeroSection
        text={heroTexts.details}
        srcImage={"/images/detailsHeader.jpg"}
      />
      <GameDetails game={game!} />
    </>
  );
};

export default DetailsPage;
