import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { News } from './News';
import { getNewsListByPagination, getIsFetchingSelectro } from './selectors';
import { getNewsAction } from './actions';

export function NewsContainer() {
  const dispatch = useDispatch();

  const isFetching = useSelector(getIsFetchingSelectro);
  const news = useSelector(getNewsListByPagination);

  useEffect(() => {
    dispatch(getNewsAction())
  }, []);

  return (<News isFetching={isFetching} news={news} />);
}

