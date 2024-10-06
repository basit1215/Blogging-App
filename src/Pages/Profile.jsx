import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../Config/Firebase/firebasemethods'
import { collection, query, where, getDocs } from "firebase/firestore";

const Profile = () => {
  const [singalUserData, setSingalUserData] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const q = query(collection(db, "users"), where("id", "==", user.uid));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            setSingalUserData(doc.data());
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log('User logout ho gaya hai');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <section className="bg-[#b8dfff] py-16  px-4 sm:px-6 lg:px-8  h-[79.7vh]">
      <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-2xl h-80 w-full max-w-[400px] mx-auto">
        {singalUserData ? (
          <>
            <div className="rounded-full overflow-hidden w-32 h-32 sm:w-40 sm:h-40 mb-6">
              <img
                className="object-cover w-full h-full rounded-full"
                alt="Profile"
                src={singalUserData.userProfile}
              />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {singalUserData.fullname}
            </h1>

            <h2 className="text-lg sm:text-xl text-gray-600">
              {singalUserData.email}
            </h2>
          </>
        ) : (
          <p>Loading profile data...</p>
        )}
      </div>
    </section>
  )
}

export default Profile