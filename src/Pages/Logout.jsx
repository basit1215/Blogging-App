import React from 'react';
import { signOutUser } from '../Config/Firebase/firebasemethods';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOutUser();
      console.log('User logged out successfully');
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[79.7vh]   bg-[#b8dfff]">
      <div className="bg-gray-100  w-[90%] max-w-[400px] shadow-2xl   py-16 px-6 rounded-lg shadow-md text-center flex flex-col justify-center gap-6 items-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Are you sure?</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full max-w-[150px]" >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Logout