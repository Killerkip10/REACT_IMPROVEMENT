import { memo } from 'react';

import { INews } from 'models';
import { LanguageName } from 'constant';
import { Typography } from 'components/Typography';

import './NewsTableRow.scss';

interface INewsTableRow {
  news: INews;
}

function NewsTableRowComponent({ news }: INewsTableRow) {
  return (
    <div className="table-row row">
      <div className="table-row__field table-row__field_sticky">
        <div className="table-row__field"><Typography>{news.author}</Typography></div>
        <div className="table-row__field"><Typography>{LanguageName[news.language]}</Typography></div>
      </div>
      <div className="table-row__field table-row__field_size-2"><Typography>{news.title}</Typography></div>
      <div className="table-row__field table-row__field_size-6"><Typography>{news.summary.content}</Typography></div>
      <div className="table-row__field"><Typography>{(new Date(news.crawled)).toLocaleDateString()}</Typography></div>
      <div className="table-row__field"><Typography>{news.keywords.join('; ')}</Typography></div>
      <div className="table-row__field"><Typography>{(new Date(news.published)).toLocaleDateString()}</Typography></div>
      <div className="table-row__field"><Typography>{news.originId}</Typography></div>
      <div className="table-row__field"><Typography>{news.fingerprint}</Typography></div>
      <div className="table-row__field"><Typography>{news.id}</Typography></div>
      <div className="table-row__field"><Typography>{news.canonicalUrl}</Typography></div>
      <div className="table-row__field"><Typography>{news.unread ? 'Yes' : 'No'}</Typography></div>
    </div>
  )
}

export const NewsTableRow = memo(NewsTableRowComponent);
