import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase';

const User = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <p>Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
            <p>Varified? : {user?.emailVerified ? "Yes" : "NO"}</p>
            <input className='focus:outline-none' readOnly type="text" deasabled={+true} value={`Logged In By: ${user?.providerData[0].providerId}`}/>
        </div>
    );
};

export default User;