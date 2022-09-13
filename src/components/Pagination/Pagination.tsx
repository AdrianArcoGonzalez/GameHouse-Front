import { Dispatch, SetStateAction } from "react";
import { infoModal } from "../../modals/modals";
import { useAppSelector } from "../../store/hooks";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ page, setPage }: PaginationProps): JSX.Element => {
  const games = useAppSelector((state) => state.games);

  const upgradePage = () => {
    if (games.length === 6) {
      setPage((page += 1));
      return;
    }
    infoModal("No more Pages to show");
  };
  const downgradePage = () => {
    if (page !== 1) {
      setPage((page -= 1));
      return;
    }
    infoModal("No more Pages to show");
  };

  return (
    <PaginationStyled>
      <button className="button" onClick={downgradePage}>
        Previous
      </button>
      <span className="page-info">Page {page}</span>
      <button className="button" onClick={upgradePage}>
        Next
      </button>
    </PaginationStyled>
  );
};

export default Pagination;
