import { useEffect } from "react";
import Games from "../components/Games/Games";
import useGamesApi from "../hooks/useGamesApi";
import { useAppSelector } from "../store/hooks";

const MyCollectionPage = (): JSX.Element => {
  const { getByOwner } = useGamesApi();
  const { username } = useAppSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      await getByOwner(username);
    })();
  }, [getByOwner, username]);

  return <Games />;
};

export default MyCollectionPage;
