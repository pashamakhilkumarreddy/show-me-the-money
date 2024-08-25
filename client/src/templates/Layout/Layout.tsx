import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer';
import Header from 'components/Header';

/**
 * A functional component that represents the overall structure of the application.
 * It includes the `Header`, `Footer`, and a main content area where routed components are displayed.
 *
 * @returns {JSX.Element} The JSX element representing the application layout.
 */
const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <main className="h-screen w-full grow overflow-y-scroll bg-white px-8 py-7">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
