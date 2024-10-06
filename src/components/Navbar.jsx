import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import app from '../Config/Firebase/firebaseconfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getAllData } from '../Config/Firebase/firebasemethods';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isOpen, setIsOpen] = useState(false); 
  const auth = getAuth(app);

  const fetchUserData = async (user) => {
    const fetchedUsers = await getAllData('users');
    const currentUserData = fetchedUsers.find((u) => u.email === user.email);
    setUserData(currentUserData);
    console.log(currentUserData)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          await fetchUserData(user);
        } catch (error) {
          console.log(error);
        }
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev); 
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false); 
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  console.log(userData);
  const isLoggedIn = userData !== null;
  console.log(isLoggedIn);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link to="/" className="hover:text-gray-200 transition duration-300">Blogging App</Link>
        </div>

        {/*For Desktop */}
        {!isLoggedIn ? (
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
            <Link to="/login" className="text-white hover:text-gray-200 transition duration-300">Login</Link>
            <Link to="/register" className="text-white hover:text-gray-200 transition duration-300">Register</Link>
          </div>
        ) : (
          <div className='flex gap-7'>
            <div className="hidden md:flex space-x-6 items-center">
              <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
              <Link to="/logout" className="text-white hover:text-gray-200 transition duration-300" onClick={handleLinkClick}>Logout</Link>
            </div>
            <div className="relative">
              <div
                className="btn btn-ghost btn-circle avatar hover:bg-blue-600 transition duration-300"
                onClick={handleDropdownToggle} >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img
                    alt="User Avatar"
                    src={userData?.userProfile || 'https://via.placeholder.com/150'}
                  />
                </div>
              </div>
              {isDropdownOpen && userData && ( 
                <ul
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 text-gray-800 transition-all duration-300"
                  tabIndex={0}>
                  <li className="px-4 py-2 hover:bg-gray-100 transition duration-200">
                    <Link to="/profile" onClick={handleLinkClick}>Profile</Link> 
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 transition duration-200">
                    <Link to="/dashboard" onClick={handleLinkClick}>Dashboard</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}

        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? <FaTimes className="w-8 h-8 text-3xl" /> : <FaBars className="w-8 h-8" />}
        </button>

        {/*For Mobile*/}
        {!isLoggedIn ? (
          isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col space-y-2 px-4 pb-3 z-50">
              <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
              <Link to="/login" className="text-white hover:text-gray-200 transition duration-300">Login</Link>
              <Link to="/register" className="text-white hover:text-gray-200 transition duration-300">Register</Link>
            </div>
          )
        ) : (
          isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-500 flex flex-col space-y-2 px-4 pb-3 z-50">
              <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
              <Link to="/logout" className="text-white hover:text-gray-200 transition duration-300" onClick={handleLinkClick}>Logout</Link>
            </div>
          )
        )}
      </div>
    </nav>
  );
};

export default Navbar