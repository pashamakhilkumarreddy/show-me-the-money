import React, { memo } from 'react';
import { Link } from 'react-router-dom';

/**
 * Renders a 404 error page with a message and a "Go Home" button.
 *
 * @returns {JSX.Element} The rendered 404 error page.
 */
const NotFoundPage: React.FC = memo(() => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-2xl text-gray-700 mt-4">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
});

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;
