import { memo } from 'react';

/**
 * A functional component that renders the website's footer.
 *
 * @returns {JSX.Element} The JSX element representing the footer.
 */
const Footer = memo(() => {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Reporting App.
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
