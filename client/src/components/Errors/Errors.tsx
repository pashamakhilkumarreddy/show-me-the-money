import React from 'react';
import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from 'react-router-dom';

/**
 * Renders an error page component that displays an error message and a "Go Back" button.
 *
 * @returns {React.JSX.Element} The rendered error page component.
 */
const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  const getErrorMessage = (error: unknown): string => {
    if (isRouteErrorResponse(error)) {
      return error.data || error.statusText;
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === 'string') {
      return error;
    } else {
      return 'Unknown error';
    }
  };

  const errorMessage = getErrorMessage(error);

  return (
    <div
      id="error-page"
      className="flex h-screen flex-col items-center justify-center gap-8"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>{errorMessage}</i>
      </p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ErrorPage;
