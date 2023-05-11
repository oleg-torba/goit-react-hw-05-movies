import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink className="nav" to="/">
            Home
          </NavLink>
          <NavLink className="nav" to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
