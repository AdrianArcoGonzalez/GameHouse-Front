import axios from "axios";
import { useCallback } from "react";
import { errorModal } from "../modals/modals";

const useGamesApi = () => {
  const backUrl = process.env.REACT_APP_URL_BACK;
  const getAllGames = useCallback(async () => {
    try {
      const response = await axios.get(`${backUrl}games/games/`);
      const { games } = response.data;
      console.log(games);
      if (games.length === 0) {
        errorModal("No games yet!");
        console.log("no games yet");
      }
    } catch (error) {}
  }, [backUrl]);

  return { getAllGames };
};

export default useGamesApi;
