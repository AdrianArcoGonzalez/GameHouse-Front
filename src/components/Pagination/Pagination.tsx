import { Dispatch, SetStateAction } from "react";
import { goodbyeModal } from "../../modals/modals";
import PaginationStyled from "./PaginationStyled";

interface PaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  totalGames: number;
}

const Pagination = ({
  page,
  setPage,
  totalGames,
}: PaginationProps): JSX.Element => {
  const upgradePage = () => {
    if (totalGames / 6 > page) {
      setPage((page += 1));
    }
    goodbyeModal("No more pages to see");
  };

  const downgradePage = () => {
    if (page !== 1) {
      setPage((page -= 1));
    }
    goodbyeModal("No more pages to see");
  };

  return (
    <PaginationStyled>
      <button className="button" onClick={downgradePage}>
        Previous
      </button>

      <span className="page-info">{page}</span>
      <button className="button" onClick={upgradePage}>
        Next
      </button>
    </PaginationStyled>
  );
};

export default Pagination;
