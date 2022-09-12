import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { errorModal, goodbyeModal, succesModal } from "../modals/modals";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  deleteGameActionCreator,
  getAllGamesActionCreator,
} from "../store/slice/gamesSlice";

const useGamesApi = () => {
  const dispatch = useAppDispatch();
  const backUrl = process.env.REACT_APP_URL_BACK;
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const getAllGames = useCallback(
    async (page: number) => {
      try {
        const {
          data: { games, totalGames },
        } = await axios.get(
          `http://localhost:4000/games/games/?page=${page}&limit=6`
        );

        if (games.length === 0) {
          throw new Error();
        }

        dispatch(getAllGamesActionCreator(games));

        return totalGames;
      } catch (error) {
        errorModal("Cannot get all games :(");
      }
    },
    [dispatch]
  );

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
    } catch (error) {
      errorModal("Can't delete this game now:(");
    }
  };

  const getByOwner = useCallback(
    async (owner: string) => {
      try {
        const {
          data: { games },
        } = await axios.get(`${backUrl}games/games/my-collection/${owner}`, {
          headers: { authorization: `Bearer ${user.token}` },
        });

        dispatch(getAllGamesActionCreator(games));
      } catch (error) {
        errorModal("Can't get your games now :(");
      }
    },
    [backUrl, dispatch, user.token]
  );

  const createGame = async (formData: FormData) => {
    try {
      await axios.post(`${backUrl}games/games/`, formData, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      succesModal("Game Created");
      navigate("/my-collection");
    } catch (error) {
      errorModal("Error creating game");
    }
  };

  const editGame = async (formData: FormData, id: string) => {
    try {
      await axios.put(`${backUrl}games/games/${id}`, formData, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      succesModal("Game Edited");
    } catch (error) {
      errorModal("Something went wrong");
    }
  };

  const getByCategory = async (category: string) => {
    try {
      const {
        data: { games },
      } = await axios.get(`${backUrl}games/games/category/${category}`);

      if (games.length === 0) {
        goodbyeModal("No games found on this category");
        return;
      }
      dispatch(getAllGamesActionCreator(games));
    } catch (error) {
      errorModal("Something gone wrong");
    }
  };

  return {
    getByCategory,
    editGame,
    getAllGames,
    getOneGameById,
    deleteGameById,
    getByOwner,
    createGame,
  };
};

export default useGamesApi;
