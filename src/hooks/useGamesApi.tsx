import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { errorModal } from "../modals/modals";
import { useAppDispatch } from "../store/hooks";
import {
  deleteGameActionCreator,
  getAllGamesActionCreator,
} from "../store/slice/gamesSlice";

const useGamesApi = () => {
  const dispatch = useAppDispatch();
  const backUrl = process.env.REACT_APP_URL_BACK;
  const navigate = useNavigate();

  const getAllGames = useCallback(async () => {
    try {
      const response = await axios.get(`${backUrl}games/games/`);
      const { games } = response.data;

      if (games.length === 0) {
        throw new Error();
      }

      dispatch(getAllGamesActionCreator(games));
    } catch (error) {
      errorModal("Cannot get all games :(");
    }
  }, [backUrl, dispatch]);

  const getOneGameById = useCallback(
    async (id: string) => {
      try {
        const {
          data: { game },
        } = await axios.get(`${backUrl}games/games/${id}`);
        return game;
      } catch (error) {
        errorModal("Cannot show details from this game");
        navigate("/home");
      }
    },
    [backUrl, navigate]
  );

  const deleteGameById = async (idToDelete: string) => {
    try {
      const data = await axios.delete(`${backUrl}games/games/`, {
        data: { id: idToDelete },
      });
      dispatch(deleteGameActionCreator(idToDelete));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllGames, getOneGameById, deleteGameById };
};

export default useGamesApi;
