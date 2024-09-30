import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 px-4 sm:px-6 lg:px-8">
      <div className="flex-1">
        <a className="btn btn-ghost text-lg sm:text-xl">Blogging App</a>
      </div>
      <div className="flex-none gap-4">
        <div className="hidden md:flex space-x-4">
          <Link to="" className="text-sm sm:text-base text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="login" className="text-sm sm:text-base text-gray-700 hover:text-blue-500">Login</Link>
          <Link to="register" className="text-sm sm:text-base text-gray-700 hover:text-blue-500">Register</Link>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-8 sm:w-10 rounded-full">
              <img
                alt="User Avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 sm:w-52 p-2 shadow">
            <li>
              <Link to="profile" className="justify-between text-sm sm:text-base">Profile</Link>
            </li>
            <li>
              <Link to="dashboard" className="text-sm sm:text-base">Dashboard</Link>
            </li>
            <li>
              <Link to="logout" className="text-sm sm:text-base">Logout</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:hidden flex flex-col gap-2 mt-2">
        <Link to="" className="text-sm text-gray-700 hover:text-blue-500">Home</Link>
        <Link to="login" className="text-sm text-gray-700 hover:text-blue-500">Login</Link>
        <Link to="register" className="text-sm text-gray-700 hover:text-blue-500">Register</Link>
      </div>
    </div>
  )
}

export default Navbar;
