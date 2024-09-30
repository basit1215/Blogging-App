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
    <button 
      onClick={handleLogout} 
      className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
    >
      Log Out
    </button>
  );
};

export default Logout