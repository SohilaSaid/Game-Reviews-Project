import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (



    <header className='pt-30'>
      <nav className='w-7/12 m-auto bg-nav rounded-3xl '>
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
            <i class="fa-solid fa-puzzle-piece text-gray-300"></i>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Game Reviews</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto " id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-nav">
              <li>
                <NavLink to="/category/mmorpg"  className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-1 rounded-sm font-medium text-blue-400 md:p-0 text-xs"
                    : "block py-2 px-1 rounded-sm font-medium text-white md:p-0 text-xs"
                } aria-current="page">mmorpg</NavLink>
              </li>
              

              <li>
                <NavLink to="/category/shooter" className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-1 rounded-sm font-medium text-blue-400 md:p-0 text-xs"
                    : "block py-2 px-1 rounded-sm font-medium text-white md:p-0 text-xs"
                }>shooter</NavLink>
              </li>
              <li>
                <NavLink to="/category/sailing" className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-1 rounded-sm font-medium text-blue-400 md:p-0 text-xs"
                    : "block py-2 px-1 rounded-sm font-medium text-white md:p-0 text-xs"
                }>sailing</NavLink>
              </li>
              <li>
                <NavLink to="/category/permadeath" className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-1 rounded-sm font-medium text-blue-400 md:p-0 text-xs"
                    : "block py-2 px-1 rounded-sm font-medium text-white md:p-0 text-xs"
                }>permadeath</NavLink>
              </li>
              <li>
                <NavLink to="/category/superhero" className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-1 rounded-sm font-medium text-blue-400 md:p-0 text-xs"
                    : "block py-2 px-1 rounded-sm font-medium text-white md:p-0 text-xs"
                }>superhero</NavLink>
              </li>
              <li>
                <NavLink to="/category/pixel" className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-1 rounded-sm font-medium text-blue-400 md:p-0 text-xs"
                    : "block py-2 px-1 rounded-sm font-medium text-white md:p-0 text-xs"
                }>pixel</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </header>


  )
}

