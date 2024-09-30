import React, { useState, useEffect } from 'react';
import app from '../Config/Firebase/firebaseconfig';
import { getAuth } from 'firebase/auth';

const Profile = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center">
        <img
          src={user.photoURL || 'https://via.placeholder.com/150'}
          alt="User Profile"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{user.displayName || 'No Name Provided'}</h1>
        <p className="text-gray-600 mb-4">{user.email}</p>
      </div>
      <div className="text-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile