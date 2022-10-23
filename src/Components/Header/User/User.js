import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase";

import Loading from "../../Loading";

export default function User() {
  const [user, loading] = useAuthState(auth);
  // styles
  const inputStyle = "border w-full focus:outline-0 focus:animate-pulse h-12 p-2";
  const inputButton =
    "border w-full hover:bg-pink-600 hover:text-pink-100 ease-in-out duration-300 flex items-center justify-center gap-2 focus:animate-pulse h-12 p-2";
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(user);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="container mx-auto my-2 sm:my-28 p">
      <div className="max-w-lg shadow flex flex-col items-center p-4 sm:p-10 gap-3 mx-auto">
        <div className="flex flex-col items-center">
          <img
            className="w-20 h-20 rounded-full "
            src={user.photoURL ? user.photoURL : ""}
            alt="user"
          />
          <p className="m-2 text-xl text-pink-600">User Information</p>
        </div>
        <form onSubmit={handleUpdate} className="w-full  flex flex-col gap-3">
          <input className={inputStyle} readOnly disabled value={`Name : ${user?.displayName}`} />
          <input className={inputStyle} readOnly disabled value={`Email : ${user?.email}`} />
          <input
            className={inputStyle}
            readOnly
            disabled
            value={`Phone Number : ${user?.phoneNumber ? user.phoneNumber : "Not Available"}`}
          />
          <input
            className={inputStyle}
            readOnly
            type="text"
            disabled
            value={`Logged In By: ${user?.providerData[0].providerId}`}
          />
          <input
            className={inputStyle}
            readOnly
            type="text"
            disabled
            value={`Email Varified? : ${user?.emailVerified ? "Yes" : "No"}`}
          />
          <input className={inputButton} type="submit" value="Update Info" />
        </form>
      </div>
    </div>
  );
}
