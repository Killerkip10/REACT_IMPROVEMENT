import { memo } from 'react';

import './Spinner.scss'

function SpinnerComponent() {
  return (
    <div className="container">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export const Spinner = memo(SpinnerComponent);
