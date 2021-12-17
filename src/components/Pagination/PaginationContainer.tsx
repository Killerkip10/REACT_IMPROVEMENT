import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Pagination } from './Pagination';
import { getCurrentPageSelector, getLastPageSelector, getRowsPerPageSelector, getTopSelector } from './selectors';
import { changePageAction, changeTopAction, resetAction } from './actions';

export function PaginationContainer() {
  const dispatch = useDispatch();

  const currentPage = useSelector(getCurrentPageSelector);
  const lastPage = useSelector(getLastPageSelector);
  const rowsPerPage = useSelector(getRowsPerPageSelector);
  const top = useSelector(getTopSelector);

  const handleTopChange = useCallback(({ target: { value } }) => (
    dispatch(changeTopAction(Number(value)))
  ), [dispatch]);

  const handleNextPageClick = useCallback(() => (
    currentPage !== lastPage && dispatch(changePageAction(currentPage + 1))
  ), [dispatch, currentPage, lastPage]);

  const handlePreviousPageClick = useCallback(() => (
    currentPage !== 1 && dispatch(changePageAction(currentPage - 1))
  ), [dispatch, currentPage]);

  const handleLastPageClick = useCallback(() => (
    dispatch(changePageAction(lastPage))
  ), [dispatch, lastPage]);

  const handleFirstPageClick = useCallback(() => (
    dispatch(changePageAction(1))
  ), [dispatch]);

  useEffect(() => () => {
    dispatch(resetAction())
  }, []);

  return (
    <Pagination
      currentPage={currentPage}
      lastPage={lastPage}
      rowsPerPage={rowsPerPage}
      top={top}
      onTopChange={handleTopChange}
      onNextPageClick={handleNextPageClick}
      onPreviousPageClick={handlePreviousPageClick}
      onFirstPageClick={handleFirstPageClick}
      onLastPageClick={handleLastPageClick}
    />
  )
}

