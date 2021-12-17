import {ChangeEvent, memo} from 'react';
import classNames from 'classnames'

import { Typography } from 'components/Typography';
import right from 'assets/icons/chevron_right_black_24dp.svg';
import last from 'assets/icons/last_page_black_24dp.svg';
import left from 'assets/icons/chevron_left_black_24dp.svg';
import first from 'assets/icons/first_page_black_24dp.svg';

import './Pagination.scss';

interface IPaginationProps {
  currentPage: number;
  lastPage: number;
  rowsPerPage: number;
  top: number;
  onTopChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onFirstPageClick: () => void;
  onLastPageClick: () => void;
  onNextPageClick: () => void;
  onPreviousPageClick: () => void;
}

function PaginationComponent({
  currentPage,
  lastPage,
  rowsPerPage,
  top,
  onTopChange,
  onFirstPageClick,
  onLastPageClick,
  onNextPageClick,
  onPreviousPageClick,
}: IPaginationProps) {
  return (
    <div className="pagination">
        <span className="pagination__page">
        <Typography>Rows per page:</Typography>
        <select value={top} onChange={onTopChange}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </span>

      <span className="pagination__page">
        <Typography>Page: {currentPage} / {lastPage}</Typography>
      </span>

      <span className="pagination__page">
        <Typography>Rows: {rowsPerPage}</Typography>
      </span>

      <img
        className={classNames('pagination__icon', { 'pagination__icon_disabled': currentPage === 1 })}
        src={first}
        onClick={onFirstPageClick}
        alt=""
      />
      <img
        className={classNames('pagination__icon', { 'pagination__icon_disabled': currentPage === 1 })}
        src={left}
        onClick={onPreviousPageClick}
        alt=""
      />
      <img
        className={classNames('pagination__icon', { 'pagination__icon_disabled': currentPage === lastPage })}
        src={right}
        onClick={onNextPageClick}
        alt=""
      />
      <img
        className={classNames('pagination__icon', { 'pagination__icon_disabled': currentPage === lastPage })}
        src={last}
        onClick={onLastPageClick}
        alt=""
      />
    </div>
  );
}

export const Pagination = memo(PaginationComponent);
