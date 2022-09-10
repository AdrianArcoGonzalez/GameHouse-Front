import { useEffect } from "react";
import GameDetails from "../components/GameDetails/GameDetails";
import heroTexts from "../components/HeroSection/heroData/heroData";
import HeroSection from "../components/HeroSection/HeroSection";
import useGamesApi from "../hooks/useGamesApi";
import { useAppSelector } from "../store/hooks";

const MyCollectionPage = (): JSX.Element => {
  const { getByOwner } = useGamesApi();
  const { username } = useAppSelector((state) => state.user);
  const games = useAppSelector((state) => state.games);
  useEffect(() => {
    window.scrollTo({ top: 0 });
    (async () => {
      await getByOwner(username);
    })();
  }, [getByOwner, username]);

  return (
    <>
      <HeroSection
        srcImage="/images/my-collection.webp"
        text={heroTexts.myCollection}
      />
      <ul>
        {games.map((game) => (
          <li>
            <GameDetails game={game} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MyCollectionPage;
