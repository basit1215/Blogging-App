// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState, useEffect } from 'react';
// import app from '../Config/Firebase/firebaseconfig';
// import { getAuth } from 'firebase/auth';
// import { getAllData } from '../Config/Firebase/firebasemethods';

// const Navbar = () => {


//   const [userData, setUserData] = useState(null);
//   const auth = getAuth(app);
//   const currentUser = auth.currentUser;

//   const fetchUserData = async () => {
//     const fetchedUsers = await getAllData('users'); // Fetch all users
//     const currentUserData = fetchedUsers.find(user => user.email === currentUser.email); // Match current user
//     setUserData(currentUserData); // Set current user data
//     console.log(currentUserData); // Log the current user's data
//   };

//   useEffect(() => {
//     // Fetch data from local storage
//     const data = localStorage.getItem('userData');
//     if (data) {
//       setUserData(JSON.parse(data)); // Convert string back to object
//     } else {
//       fetchUserData(); // Fetch from Firebase if no local data found
//     }
//   }, [currentUser]); // Dependency on currentUser

//   console.log(userData);

//   if (!userData) {
//     return <div>Please log in to view your profile.</div>;
//   }


//   return (
//     <div className="navbar bg-base-100 px-4 sm:px-6 lg:px-8">
//       <div className="flex-1">
//         <a className="btn btn-ghost text-lg sm:text-xl">Blogging App</a>
//       </div>
//       <div className="flex-none gap-4">
//         <div className="hidden md:flex space-x-4">
//           <Link to="" className="text-sm sm:text-base text-gray-700 hover:text-blue-500">Home</Link>
//           <Link to="login" className="text-sm sm:text-base text-gray-700 hover:text-blue-500">Login</Link>
//           <Link to="register" className="text-sm sm:text-base text-gray-700 hover:text-blue-500">Register</Link>
//         </div>
//         <div className="dropdown dropdown-end">
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//             <div className="w-8 sm:w-10 rounded-full">
//               <img
//                 alt="User Avatar"
//                 src={userData?.profileImage || 'https://via.placeholder.com/150'}
//               />
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 sm:w-52 p-2 shadow">
//             <li>
//               <Link to="profile" className="justify-between text-sm sm:text-base">Profile</Link>
//             </li>
//             <li>
//               <Link to="dashboard" className="text-sm sm:text-base">Dashboard</Link>
//             </li>
//             <li>
//               <Link to="logout" className="text-sm sm:text-base">Logout</Link>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="md:hidden flex flex-col gap-2 mt-2">
//         <Link to="" className="text-sm text-gray-700 hover:text-blue-500">Home</Link>
//         <Link to="login" className="text-sm text-gray-700 hover:text-blue-500">Login</Link>
//         <Link to="register" className="text-sm text-gray-700 hover:text-blue-500">Register</Link>
//       </div>
//     </div>
//   )
// }

// export default Navbar;
























// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import app from '../Config/Firebase/firebaseconfig';
// import { getAuth } from 'firebase/auth';
// import { getAllData } from '../Config/Firebase/firebasemethods';

// const Navbar = () => {
//   const [userData, setUserData] = useState(null);
//   const auth = getAuth(app);

//   const fetchUserData = async (user) => {
//     const fetchedUsers = await getAllData('users'); // Fetch all users
//     const currentUserData = fetchedUsers.find((u) => u.email === user.email); // Match current user
//     setUserData(currentUserData); // Set current user data
//     console.log(currentUserData); // Log the current user's data
//   };

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         const data = localStorage.getItem('userData');
//         if (data) {
//           setUserData(JSON.parse(data)); // Convert string back to object
//         } else {
//           fetchUserData(user); // Fetch from Firebase if no local data found
//         }
//       } else {
//         setUserData(null); // If no user is logged in, clear userData
//       }
//     });

//     return () => unsubscribe(); // Cleanup the subscription
//   }, [auth]);

//   console.log(userData);

//   return (
//     <div className="navbar bg-base-100 px-4 sm:px-6 lg:px-8">
//       <div className="flex-1">
//         <a className="btn btn-ghost text-lg sm:text-xl">Blogging App</a>
//       </div>
//       <div className="flex-none gap-4">
//         <div className="hidden md:flex space-x-4">
//           <Link to="" className="text-sm sm:text-base text-gray-700 hover:text-blue-500">Home</Link>
//           <Link to="login" className="text-sm sm:text-base text-gray-700 hover:text-blue-500">Login</Link>
//           <Link to="register" className="text-sm sm:text-base text-gray-700 hover:text-blue-500">Register</Link>
//         </div>
//         <div className="dropdown dropdown-end">
//           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//             <div className="w-8 sm:w-10 rounded-full">
//               <img
//                 alt="User Avatar"
//                 src={userData?.profileImage || 'https://via.placeholder.com/150'}
//               />
//             </div>
//           </div>
//           {userData && (
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-40 sm:w-52 p-2 shadow">
//               <li>
//                 <Link to="profile" className="justify-between text-sm sm:text-base">Profile</Link>
//               </li>
//               <li>
//                 <Link to="dashboard" className="text-sm sm:text-base">Dashboard</Link>
//               </li>
//               <li>
//                 <Link to="logout" className="text-sm sm:text-base">Logout</Link>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>

//       <div className="md:hidden flex flex-col gap-2 mt-2">
//         <Link to="" className="text-sm text-gray-700 hover:text-blue-500">Home</Link>
//         <Link to="login" className="text-sm text-gray-700 hover:text-blue-500">Login</Link>
//         <Link to="register" className="text-sm text-gray-700 hover:text-blue-500">Register</Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



























// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import app from '../Config/Firebase/firebaseconfig';
// import { getAuth } from 'firebase/auth';
// import { getAllData } from '../Config/Firebase/firebasemethods';

// const Navbar = () => {
//   const [userData, setUserData] = useState(null);
//   const auth = getAuth(app);

//   const fetchUserData = async (user) => {
//     const fetchedUsers = await getAllData('users');
//     const currentUserData = fetchedUsers.find((u) => u.email === user.email);
//     setUserData(currentUserData);
//   };

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         const data = localStorage.getItem('userData');
//         if (data) {
//           setUserData(JSON.parse(data));
//         } else {
//           fetchUserData(user);
//         }
//       } else {
//         setUserData(null);
//       }
//     });

//     return () => unsubscribe();
//   }, [auth]);

//   return (
//     <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="text-2xl font-bold text-white">
//           <Link to="/" className="hover:text-gray-200 transition duration-300">Blogging App</Link>
//         </div>
//         <div className="hidden md:flex space-x-6 items-center">
//           <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
//           <Link to="/login" className="text-white hover:text-gray-200 transition duration-300">Login</Link>
//           <Link to="/register" className="text-white hover:text-gray-200 transition duration-300">Register</Link>
//         </div>
//         <div className="relative">
//           <div className="btn btn-ghost btn-circle avatar hover:bg-blue-600 transition duration-300">
//             <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
//               <img
//                 alt="User Avatar"
//                 src={userData?.profileImage || 'https://via.placeholder.com/150'}
//               />
//             </div>
//           </div>
//           {userData && (
//             <ul
//               className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 text-gray-800 transition-all duration-300"
//               tabIndex={0}>
//               <li className="px-4 py-2 hover:bg-gray-100 transition duration-200">
//                 <Link to="/profile">Profile</Link>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100 transition duration-200">
//                 <Link to="/dashboard">Dashboard</Link>
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100 transition duration-200">
//                 <Link to="/logout">Logout</Link>
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className="md:hidden flex flex-col space-y-2 px-4 pb-3">
//         <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
//         <Link to="/login" className="text-white hover:text-gray-200 transition duration-300">Login</Link>
//         <Link to="/register" className="text-white hover:text-gray-200 transition duration-300">Register</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;






















// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import app from '../Config/Firebase/firebaseconfig';
// import { getAuth } from 'firebase/auth';
// import { getAllData } from '../Config/Firebase/firebasemethods';

// const Navbar = () => {
//   const [userData, setUserData] = useState(null);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
//   const [isOpen, setIsOpen] = useState(false);
//   const auth = getAuth(app);

//   console.log(auth)
//   const fetchUserData = async (user) => {
//     const fetchedUsers = await getAllData('users');
//     const currentUserData = fetchedUsers.find((u) => u.email === user.email);
//     setUserData(currentUserData);
//   };


//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       if (user) {
//         const data = localStorage.getItem('userData');
//         if (data) {
//           setUserData(JSON.parse(data));
//         } else {
//           fetchUserData(user);
//         }
//       } else {
//         setUserData(null);
//       }
//     });



//     return () => unsubscribe();
//   }, [auth]);

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen((prev) => !prev); // Toggle dropdown
//   };

//   const handleLinkClick = () => {
//     setIsDropdownOpen(false); // Close dropdown when a link is clicked
//   };



//   return (
//     <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="text-2xl font-bold text-white">
//           <Link to="/" className="hover:text-gray-200 transition duration-300">Blogging App</Link>
//         </div>
//         <div className="hidden md:flex space-x-6 items-center">
//           <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
//           <Link to="/login" className="text-white hover:text-gray-200 transition duration-300">Login</Link>
//           <Link to="/register" className="text-white hover:text-gray-200 transition duration-300">Register</Link>
//         </div>
//         <div className="relative">
//           <div
//             className="btn btn-ghost btn-circle avatar hover:bg-blue-600 transition duration-300"
//             onClick={handleDropdownToggle} // Toggle dropdown on avatar click
//           >
//             <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
//               <img
//                 alt="User Avatar"
//                 src={userData?.profileImage || 'https://via.placeholder.com/150'}
//               />
//             </div>
//           </div>
//           {isDropdownOpen && userData && ( // Show dropdown only if open
//             <ul
//               className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 text-gray-800 transition-all duration-300"
//               tabIndex={0}>
//               <li className="px-4 py-2 hover:bg-gray-100 transition duration-200">
//                 <Link to="/profile" onClick={handleLinkClick}>Profile</Link> {/* Close dropdown */}
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100 transition duration-200">
//                 <Link to="/dashboard" onClick={handleLinkClick}>Dashboard</Link> {/* Close dropdown */}
//               </li>
//               <li className="px-4 py-2 hover:bg-gray-100 transition duration-200">
//                 <Link to="/logout" onClick={handleLinkClick}>Logout</Link> {/* Close dropdown */}
//               </li>
//             </ul>
//           )}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className="md:hidden flex flex-col space-y-2 px-4 pb-3">
//         <Link to="/" className="text-white hover:text-gray-200 transition duration-300">Home</Link>
//         <Link to="/login" className="text-white hover:text-gray-200 transition duration-300">Login</Link>
//         <Link to="/register" className="text-white hover:text-gray-200 transition duration-300">Register</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;















import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import app from '../Config/Firebase/firebaseconfig';
import { getAuth } from 'firebase/auth';
import { getAllData } from '../Config/Firebase/firebasemethods';
import { FaBars, FaTimes } from 'react-icons/fa'; // React Icons for Hamburger and Close

const Navbar = () => {
  const [userData, setUserData] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const auth = getAuth(app);

  const fetchUserData = async (user) => {
    const fetchedUsers = await getAllData('users');
    const currentUserData = fetchedUsers.find((u) => u.email === user.email);
    setUserData(currentUserData);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const data = localStorage.getItem('userData');
        if (data) {
          setUserData(JSON.parse(data));
        } else {
          fetchUserData(user);
        }
      } else {
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false); // Close dropdown when a link is clicked
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu
  };

  console.log(userData)
  const isLoggedIn = userData !== null
  console.log(isLoggedIn)

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link to="/" className="hover:text-gray-200 transition duration-300">Blogging App</Link>
        </div>


        {/* Desktop Menu */}

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
                onClick={handleDropdownToggle} // Toggle dropdown on avatar click
              >
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img
                    alt="User Avatar"
                    src={userData?.profileImage || 'https://via.placeholder.com/150'}
                  />
                </div>
              </div>
              {isDropdownOpen && userData && ( // Show dropdown only if open
                <ul
                  className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 text-gray-800 transition-all duration-300"
                  tabIndex={0}>
                  <li className="px-4 py-2 hover:bg-gray-100 transition duration-200">
                    <Link to="/profile" onClick={handleLinkClick}>Profile</Link> {/* Close dropdown */}
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 transition duration-200">
                    <Link to="/dashboard" onClick={handleLinkClick}>Dashboard</Link> {/* Close dropdown */}
                  </li>
                </ul>
              )}
            </div>
          </div>
        )}


        {/* Mobile Menu Toggle Button */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? <FaTimes className="w-8 h-8 text-3xl" /> : <FaBars className="w-8 h-8" />}
        </button>


        {/* Mobile Menu */}
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

export default Navbar;













