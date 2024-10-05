import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../Config/Firebase/firebasemethods";

function ProfilePage() {
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfile(user);
      }
    });
  });
  return (
    <>
      {profile ? (
        <div className="flex justify-center gap-8 shadow-2xl w-fit mt-10 p-14 mx-auto items-center flex-col sm:flex-row">
          <div className="w-full h-full sm:w-[330px] sm:h-[250px]">
            <img
              src={profile.photoURL}
              className="h-full w-full"
              alt="profilepicture"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2> User name : {profile.displayName}</h2>
            <h2> Email : {profile.email}</h2>
            <h2> Created At : {profile.metadata.creationTime}</h2>
            <h2> Last Signin At : {profile.metadata.lastSignInTime}</h2>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
}
export default ProfilePage