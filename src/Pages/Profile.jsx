// import React, { useEffect, useRef, useState } from 'react'
// import { getAuth, onAuthStateChanged, updatePassword } from 'firebase/auth'
// import { auth, db } from '../Config/Firebase/firebasemethods'
// import { collection, query, where, getDocs } from "firebase/firestore";

// const Profile = () => {
//     const [SingalUserData, setSingalUserData] = useState(null) 

//     useEffect(() => {
//         onAuthStateChanged(auth, async (user) => {
//             if (user) {
//                 try {
//                     const q = query(collection(db, "users"), where("id", "==", user.uid));
//                     const querySnapshot = await getDocs(q);
//                     querySnapshot.forEach((doc) => {
//                         console.log(doc.data());
//                         setSingalUserData(doc.data()) 
//                     });
//                 } catch (error) {
//                     console.log(error);
//                 }
//             } else {
//                 console.log('user logout ho giya hai');
//             }
//         })
//     }, [])
//     console.log(SingalUserData)
//     const updatePasswordVal = useRef()

//     return (
//         <>
//             <section className="text-gray-600 body-font container mx-auto p-2">
//                 <h3 className='p-2 text-black font-bold text-3xl'>Your Profile</h3>
//                 <hr />
//                 <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
//                     {SingalUserData ? (
//                         <>
//                             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//                                 {SingalUserData.fullname}
//                             </h1>
//                             <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//                                 {SingalUserData.email}
//                             </h2>

//                             <img
//                                 className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
//                                 alt="Profile"
//                                 src={SingalUserData.userProfile}
//                             />
                    
//                         </>
//                     ) : (
//                         <p>Loading profile data...</p>
//                     )}
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Profile


















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

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <section className="text-gray-600 body-font container mx-auto p-2">
            <h3 className='p-2 text-black font-bold text-3xl'>Your Profile</h3>
            <hr />
            <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">
                {singalUserData ? (
                    <>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            {singalUserData.fullname}
                        </h1>
                        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            {singalUserData.email}
                        </h2>

                        <img
                            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                            alt="Profile"
                            src={singalUserData.userProfile}
                        />
                    </>
                ) : (
                    <p>Loading profile data...</p>
                )}
            </div>
        </section>
    )
}

export default Profile;
