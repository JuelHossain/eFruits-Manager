import React, { useRef, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase";
import googlelogo from "../../../googlelogo.png";
  import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  //styles
  const inputStyle = "border m-2 p-2 w-96";
  const inputButton =
    "border m-2 p-2 w-96 hover:bg-pink-600 hover:text-pink-100 ease-in-out duration-300 flex items-center justify-center gap-2";

  //react-firebase-hookd
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  //navigate
  const navigate = useNavigate("");

  //refs
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  // conditions
  //conditional formatting


  //eventHandler
  const handleRegister = async (e) => {
    e.preventDefault();
    const name =e.target.name.value
    const email =e.target.email.value
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      toast.error("Password Doesn't Match", {
        position: "bottom-center",
      });
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    }
  };
  if (user || googleUser) {
    navigate('/');
    window.location.reload(true);
  } else if (loading || updating || googleLoading) {
    return <Loading></Loading>;
  } else if (error || updateError || googleError) {
    toast.error(error.toString().slice(37, -2));
  } else {
    console.clear();
  }
  return (
    <div className="text-center m-20">
      <p className="m-2 text-xl text-pink-600">Please Register</p>
      <div className="flex flex-col gap-3 justify-center items-center">
        <form onSubmit={handleRegister}>
          <input
            className={inputStyle}
            ref={nameRef}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />{" "}
          <br />
          <input
            className={inputStyle}
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />{" "}
          <br />
          <input
            className={inputStyle}
            ref={passwordRef}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            minLength={6}
          />{" "}
          <br />
          <input
            className={inputStyle}
            ref={confirmPasswordRef}
            type="confirmPassword"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            required
          />{" "}
          <br />
          <input className={inputButton} type="submit" value="Register Now" />
        </form>
        <div className="flex justify-center items-center gap-2">
          <div className="h-0.5 w-40 bg-black"></div>
          <p>Or</p>
          <div className="h-0.5 w-40 bg-black"></div>
        </div>
        <div>
          <button className={inputButton} onClick={() => signInWithGoogle()}>
            <img className="h-6" src={googlelogo} alt="google" />{" "}
            <p>Login With Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
