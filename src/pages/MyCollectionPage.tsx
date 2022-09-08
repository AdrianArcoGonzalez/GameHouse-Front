import { useEffect } from "react";
import GameDetails from "../components/GameDetails/GameDetails";
import useGamesApi from "../hooks/useGamesApi";
import { useAppSelector } from "../store/hooks";

const MyCollectionPage = (): JSX.Element => {
  const { getByOwner } = useGamesApi();
  const { username } = useAppSelector((state) => state.user);
  const games = useAppSelector((state) => state.games);
  useEffect(() => {
    (async () => {
      await getByOwner(username);
    })();
  }, [getByOwner, username]);

  return (
    <ul>
      {games.map((game) => (
        <li>
          <GameDetails game={game} />
        </li>
      ))}
    </ul>
  );
};

export default MyCollectionPage;
