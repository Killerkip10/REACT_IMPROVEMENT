import { memo } from 'react';

import { Typography } from 'components/Typography';

import './NewsTableHeader.scss';

function NewsTableHeaderComponent() {
  return (
    <div className="table-row table-header">
      <div className="table-row__field table-row__field_sticky">
        <div className="table-row__field"><Typography weight="weight_500">AUTHOR</Typography></div>
        <div className="table-row__field"><Typography weight="weight_500">LANGUAGE</Typography></div>
      </div>
      <div className="table-row__field table-row__field_size-2"><Typography weight="weight_500">TITLE</Typography></div>
      <div className="table-row__field table-row__field_size-6"><Typography weight="weight_500">SUMMARY</Typography></div>
      <div className="table-row__field"><Typography weight="weight_500">CRAWLED</Typography></div>
      <div className="table-row__field"><Typography weight="weight_500">KEYWORDS</Typography></div>
      <div className="table-row__field"><Typography weight="weight_500">PUBLISHED</Typography></div>
      <div className="table-row__field"><Typography weight="weight_500">ORIGIN ID</Typography></div>
      <div className="table-row__field"><Typography weight="weight_500">FINGERPRINT</Typography></div>
      <div className="table-row__field"><Typography weight="weight_500">ID</Typography></div>
      <div className="table-row__field"><Typography weight="weight_500">CANON URL</Typography></div>
      <div className="table-row__field"><Typography weight="weight_500">UNREAD</Typography></div>
    </div>
  );
}

export const NewsTableHeader = memo(NewsTableHeaderComponent);
