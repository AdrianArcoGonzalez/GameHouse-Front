import axios from "axios";
import { useCallback } from "react";
import { errorModal } from "../modals/modals";
import { useAppDispatch } from "../store/hooks";
import { getAllGamesActionCreator } from "../store/slice/gamesSlice";

const useGamesApi = () => {
  const dispatch = useAppDispatch();
  const backUrl = process.env.REACT_APP_URL_BACK;
  const getAllGames = useCallback(async () => {
    try {
      debugger;
      const response = await axios.get(`${backUrl}games/games/`);
      const { games } = response.data;

      if (games.length === 0) {
        debugger;
        throw new Error();
      }

      dispatch(getAllGamesActionCreator(games));
    } catch (error) {
      errorModal("Cannot get all games :(");
    }
  }, [backUrl, dispatch]);

  return { getAllGames };
};

export default useGamesApi;
