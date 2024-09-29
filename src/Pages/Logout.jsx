// import React from 'react'

// const Logout = () => {
//   return (
//     <div>Logout</div>
//   )
// }

// export default Logout










import React from 'react';
import { signOutUser } from '../Config/Firebase/firebasemethods'; // Import your signOut function
import { useNavigate } from 'react-router-dom'; // For navigation

const Logout = () => {
  const navigate = useNavigate(); // Use for redirecting after logout

  const handleLogout = async () => {
    try {
      await signOutUser(); // Call the signOut function
      console.log('User logged out successfully'); // Log for debugging
      navigate('/login'); // Navigate back to login page
    } catch (error) {
      console.error('Error logging out:', error); // Handle error
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

export default Logout;
