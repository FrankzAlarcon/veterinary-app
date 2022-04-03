import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="md:flex">
      <nav
        className="fixed w-full top-0 flex gap-x-2 justify-around text-center md:w-1/4 md:h-screen bg-indigo-600 py-5 px-2
        md:flex-col md:static md:justify-start md:gap-y-10 md:items-center md:py-14 md:px-5"
      >
        <Link
          to="/"
          className={`${
            pathname === '/'
              ? 'bg-violet-600 font-bold shadow-md text-white'
              : 'bg-white'
          } w-40 p-1 rounded-md md:w-full md:text-xl md:h-auto lg`}
        >
          Lista de Pacientes
        </Link>
        <Link
          to="/new-patient"
          className={`${
            pathname === '/new-patient'
              ? 'bg-violet-600 font-bold shadow-md text-white'
              : 'bg-white'
          } w-40 p-1 rounded-md md:w-full md:text-xl md:h-auto`}
        >
          Nuevo Paciente
        </Link>
        <Link
          to="/tasks"
          className={`${
            pathname === '/tasks'
              ? 'bg-violet-600 font-bold shadow-md text-white'
              : 'bg-white'
          } w-40 p-1 rounded-md md:w-full md:text-xl md:h-auto`}
        >
          Mis Tareas
        </Link>
      </nav>
      <div className="md:w-3/4 h-screen bg-gray-100 p-3 pt-28 md:px-8 md:py-10 overflow-y-scroll">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
