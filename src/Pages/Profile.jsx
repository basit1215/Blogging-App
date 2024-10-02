// import React, { useState, useEffect } from 'react';
// import app from '../Config/Firebase/firebaseconfig';
// import { getAuth } from 'firebase/auth';
// import { getAllData } from '../Config/Firebase/firebasemethods';


// const Profile = () => {
//   const [users, setUsers] = useState(null);
//   const auth = getAuth(app);
//   const currentUser = auth.currentUser;

//   const fetchBlogs = async () => {

//     const fetchedBlogs = await getAllData('users', currentUser); 
//     setUsers(fetchedBlogs);
//     console.log(users)

//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   console.log(users)



//   if (!users) {
//     return <div>Please log in to view your profile.</div>;
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <div className="flex flex-col items-center">
//         <img
//           src={users.profileImage || 'https://via.placeholder.com/150'}
//           alt="User Profile"
//           className="w-32 h-32 rounded-full mb-4"
//         />
//         <h1 className="text-2xl font-bold mb-2">{users.fullName || 'No Name Provided'}</h1>
//         <p className="text-gray-600 mb-4">{users.email}</p>
//       </div>
//       <div className="text-center">
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile
































// import React, { useState, useEffect } from 'react';
// import app from '../Config/Firebase/firebaseconfig';
// import { getAuth } from 'firebase/auth';
// import { getAllData } from '../Config/Firebase/firebasemethods';

// const Profile = () => {
//   const [userData, setUserData] = useState(null);
//   const auth = getAuth(app);
//   const currentUser = auth.currentUser;

//   const fetchBlogs = async () => {
//     const fetchedBlogs = await getAllData('users', currentUser); 
//     setUserData(fetchedBlogs);
//     console.log(fetchedBlogs); // Updated to log fetched data
//   };

//   useEffect(() => {
//     // Fetch data from local storage
//     const data = localStorage.getItem('userData');
//     if (data) {
//       setUserData(JSON.parse(data)); // Convert string back to object

//     } else {
//       fetchBlogs(); // Fetch from Firebase if no local data found
//        console.log(data)
//     }
//   }, []);

//   console.log(userData);

//   if (!userData) {
//     return <div>Please log in to view your profile.</div>;
//   }

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
//       <div className="flex flex-col items-center">
//         <img
//           src={userData.profileImage || 'https://via.placeholder.com/150'}
//           alt="User Profile"
//           className="w-32 h-32 rounded-full mb-4"
//         />
//         <h1 className="text-2xl font-bold mb-2">{userData.fullName || 'No Name Provided'}</h1>
//         <p className="text-gray-600 mb-4">{userData.email}</p>
//       </div>
//       <div className="text-center">
//         <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
//           Edit Profile
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Profile;





















import React, { useState, useEffect } from 'react';
import app from '../Config/Firebase/firebaseconfig';
import { getAuth } from 'firebase/auth';
import { getAllData } from '../Config/Firebase/firebasemethods';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const auth = getAuth(app);
  const currentUser = auth.currentUser;

  const fetchUserData = async () => {
    const fetchedUsers = await getAllData('users'); // Fetch all users
    const currentUserData = fetchedUsers.find(user => user.email === currentUser.email); // Match current user
    setUserData(currentUserData); // Set current user data
    console.log(currentUserData); // Log the current user's data
  };

  useEffect(() => {
    // Fetch data from local storage
    const data = localStorage.getItem('userData');
    if (data) {
      setUserData(JSON.parse(data)); // Convert string back to object
    } else {
      fetchUserData(); // Fetch from Firebase if no local data found
    }
  }, [currentUser]); // Dependency on currentUser

  console.log(userData);

  if (!userData) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <img
          src={userData.profileImage || 'https://via.placeholder.com/150'}
          alt="User Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{userData.fullName || 'No Name Provided'}</h1>
        <p className="text-gray-600 mb-4">{userData.email}</p>
      </div>
      <div className="text-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
