import { HeaderLinks } from 'config';
import { memo } from 'react';
import { Link } from 'react-router-dom';

/**
 * A functional component that renders the application header.
 *
 * @returns {JSX.Element} The JSX element representing the header.
 */
const Header = memo(() => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">Reporting App</div>

        <nav className="md:flex space-x-4">
          {HeaderLinks.map((link, i) => (
            <Link
              key={i.toString()}
              to={link.href}
              className="text-white hover:text-gray-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
