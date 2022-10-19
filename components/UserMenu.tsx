import React, { useState } from 'react';

export default function UserMenu({ children }: { children: any }) {
  const [menuActive, setMenuActive] = useState<boolean>(false);

  function onUserMenuClick() {
    setMenuActive(!menuActive);
  }

  const menuStatus = menuActive ? 'active' : 'hidden';

  return (
    <div>
      <button
        type="button"
        onClick={onUserMenuClick}
        className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 "
        id="user-menu-button"
        aria-expanded={menuActive}
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        {children}
      </button>
      <div
        className={`${menuStatus} absolute right-2 z-50 my-2 text-base list-none bg-gray-800 rounded divide-y divide-gray-100 shadow`}
        id="user-dropdown"
      >
        <div className="py-3 px-4">
          <span className="block text-sm text-white ">Bonnie Green</span>
          <span className="block text-sm font-medium text-gray-400 truncate">
            name@flowbite.com
          </span>
        </div>
        <ul className="py-1" aria-labelledby="user-menu-button">
          <li>
            <a
              href="#"
              className="block py-2 px-4 text-sm text-white hover:bg-gray-100 "
            >
              Favorites
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
