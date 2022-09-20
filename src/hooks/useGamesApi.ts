import axios from "axios";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { errorModal, infoModal, succesModal } from "../modals/modals";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  deleteGameActionCreator,
  getAllGamesActionCreator,
} from "../store/slice/gamesSlice";
import { isLoadingActionCreator } from "../store/slice/uiSlice";
import { urlsBack } from "../utils/envDirections";

const useGamesApi = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const getAllGames = useCallback(
    async (page: number) => {
      try {
        dispatch(isLoadingActionCreator());
        const {
          data: { games },
        } = await axios.get(`${urlsBack.default}?page=${page}&limit=6`);

        if (games.length === 0) {
          infoModal("Haven't games to show");
          return;
        }
        dispatch(getAllGamesActionCreator(games));

        setTimeout(() => {
          dispatch(isLoadingActionCreator());
        }, 2000);
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
        } = await axios.get(urlsBack.default + id, {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        return game;
      } catch (error) {
        infoModal("You need to login to see details");
      }
    },
    [user.token]
  );

  const deleteGameById = async (idToDelete: string) => {
    try {
      await axios.delete(urlsBack.default, {
        data: { id: idToDelete },
        headers: { Authorization: `Bearer ${user.token}` },
      });

      succesModal("Game deleted");
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
        } = await axios.get(urlsBack.getByOwner + owner, {
          headers: { authorization: `Bearer ${user.token}` },
        });

        dispatch(getAllGamesActionCreator(games));
      } catch (error) {
        errorModal("Can't get your games now :(");
      }
    },
    [dispatch, user.token]
  );

  const createGame = async (formData: FormData) => {
    try {
      await axios.post(urlsBack.default, formData, {
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
      await axios.put(urlsBack.default + id, formData, {
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
      } = await axios.get(urlsBack.getByCategory + category);

      if (games.length === 0) {
        infoModal("No games found on this category");
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
