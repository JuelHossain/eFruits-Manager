import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase';

const User = () => {
    const [user] = useAuthState(auth);
    console.log(user); 
    const inputStyle = "border m-2 p-2 w-96 focus:outline-none";
    const inputButton =
      "border m-2 p-2 w-96 hover:bg-pink-600 hover:text-pink-100 ease-in-out duration-300 flex items-center justify-center gap-2";
    const handleUpdate = e => {
        e.preventDefault();

    }
    return (
      <div className="container flex flex-col items-center justify-center m-20 p-10">
        <form
          className=" w-[500px] pb-10 flex flex-col justify-center items-center shadow-2xl"
          onSubmit={handleUpdate}
        >
          <p className="m-2 text-xl text-pink-600">User Information</p>
          <input
            className={inputStyle}
            readOnly
            desabled={+true}
            value={`Name : ${user?.displayName}`}
          />
          <input
            className={inputStyle}
            readOnly
            desabled={+true}
            value={`Email : ${user?.email}`}
          />
          <input
            className={inputStyle}
            readOnly
            desabled={+true}
            value={`Phone Number : ${
              user?.phoneNumber ? user.phoneNumber : "Not Available"
            }`}
          />
          <input
            className={inputStyle}
            readOnly
            type="text"
            desabled={+true}
            value={`Logged In By: ${user?.providerData[0].providerId}`}
          />
          <input
            className={inputStyle}
            readOnly
            type="text"
            desabled={+true}
            value={`Email Varified? : ${user?.emailVerified?"Yes":"No"}`}
          />
          {/* <input className={inputButton} type="submit" value="Update Info" /> */}
        </form>
      </div>
    );
};

export default User;