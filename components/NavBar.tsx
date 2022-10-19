import React, { useState } from 'react';
import UserMenu from './UserMenu';
import { UserIcon, Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const links = ['Home', 'Favorites'];

export default function NavBar() {
  const [navStatus, setNavStatus] = useState<boolean>(false);

  const menuStatus = navStatus ? 'active' : 'hidden';

  function onBurguerMenuClick() {
    setNavStatus(!navStatus);
    navStatus ? 'active' : 'hidden';
  }

  return (
    <nav className="bg-gradient-to-l from-gray-800 to-black px-2 sm:px-4 py-2.5 ">
      <div className="flex container mx-auto flex-wrap  items-center ">
        <Link href={'/'}>
          <a className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl text-white font-semibold whitespace-nowrap">
              Movie Finder
            </span>
          </a>
        </Link>
        <div className="flex items-center ml-auto sm:order-2">
          <UserMenu>
            <UserIcon className="h-7 w-7 text-white" />
          </UserMenu>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg sm:hidden focus:outline-none "
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            onClick={onBurguerMenuClick}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>
        <div
          className={`${menuStatus} sm:ml-10 justify-between items-center w-full sm:flex sm:w-auto sm:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col p-2 rounded-lg sm:divide-none divide-y divide-gray-100 shadow sm:flex-row sm:space-x-8 sm:mt-0 sm:text-sm sm:font-medium">
            {links.map(link => (
              <li key={link}>
                <Link href={`/${link}`}>
                  <a
                    className="block py-2 pr-4 pl-3 text-white md:bg-transparent sm:p-0 "
                    aria-current="page"
                  >
                    {link}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
