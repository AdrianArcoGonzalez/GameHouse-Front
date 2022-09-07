import axios from "axios";
import { useCallback } from "react";
import { errorModal, goodbyeModal } from "../modals/modals";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  deleteGameActionCreator,
  getAllGamesActionCreator,
} from "../store/slice/gamesSlice";

const useGamesApi = () => {
  const dispatch = useAppDispatch();
  const backUrl = process.env.REACT_APP_URL_BACK;
  const user = useAppSelector((state) => state.user);
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
        } = await axios.get(`${backUrl}games/games/${id}`, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        return game;
      } catch (error) {
        goodbyeModal("You need to login to see details");
      }
    },
    [backUrl, user.token]
  );

  const deleteGameById = async (idToDelete: string) => {
    try {
      await axios.delete(`${backUrl}games/games/`, {
        data: { id: idToDelete },
        headers: { Authorization: `Bearer ${user.token}` },
      });
      dispatch(deleteGameActionCreator(idToDelete));
    } catch (error) {}
  };

  const getByOwner = async (owner: string) => {
    try {
      const {
        data: { games },
      } = await axios.get(`${backUrl}games/games/my-collection/${owner}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      dispatch(getAllGamesActionCreator(games));
    } catch (error) {}
  };

  return { getAllGames, getOneGameById, deleteGameById, getByOwner };
};

export default useGamesApi;
