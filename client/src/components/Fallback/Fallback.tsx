import React, { memo } from 'react';

/**
 * A Fallback component that displays a loading indicator.
 *
 * @returns {React.JSX.Element} The JSX element containing a loading message.
 */
const Fallback: React.FC = memo(() => {
  return (
    <div className="container has-text-centered">
      <div className="box is-flex is-flex-direction-column is-align-items-center is-justify-content-center">
        <p className="title is-4">Loading...</p>
      </div>
    </div>
  );
});

Fallback.displayName = 'Fallback';

export default Fallback;
