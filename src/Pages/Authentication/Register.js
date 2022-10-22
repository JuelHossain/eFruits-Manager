import React, { useEffect, useRef, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase";
import googlelogo from "../../assets/googlelogo.png";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/outline";
import "react-toastify/dist/ReactToastify.minimal.css";
import token from "../../utils/token";

const Register = () => {
  //styles
  const inputStyle =
    "border w-full focus:outline-0 focus:animate-pulse h-12 p-2";
  const inputButton =
    "border w-full hover:bg-pink-600 hover:text-pink-100 ease-in-out duration-300 flex items-center justify-center gap-2 focus:animate-pulse h-12 p-2";

  // states
  const [showPass, setShowPass] = useState(false);
  const [showConf, setShowConf] = useState(false);
  //react-firebase-hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [updateProfile, updating] = useUpdateProfile(auth);

  //navigate
  const navigate = useNavigate("");

  //refs
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  //show error
  const showError = async (err) => {
    toast.error(err?.toString().slice(37, -2));
  };
  useEffect(() => {
    const tok = async () => {
      if (user || googleUser) {
        user && (await token(user.user.email));
        googleUser && (await token(googleUser.user.email));
        await navigate("/");
        await window.location.reload(true);
      } else if (error || googleError) {
        error && (await showError(error));
        googleError && (await showError(googleError));
      }
    };
    tok();
  }, [user, googleUser, error, googleError, navigate]);
  //eventHandler
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password !== confirmPassword) {
      toast.error("Password Doesn't Match");
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    }
  };
  return (
    <div className="container mx-auto my-0.5 sm:my-28 p">
      <div className="shadow flex flex-col items-center p-4 sm:p-10 gap-3 max-w-md mx-auto">
        <div className="flex flex-col items-center">
          {loading || updating || googleLoading ? (
            <LockOpenIcon className="bg-pink-100 h-10 p-2 rounded-full"></LockOpenIcon>
          ) : (
            <LockClosedIcon className="bg-pink-100 h-10 p-2 rounded-full"></LockClosedIcon>
          )}
          <p className="m-2 text-xl text-pink-600">Please Register</p>
        </div>
        <form className="w-full  flex flex-col gap-3" onSubmit={handleRegister}>
          <input
            className={inputStyle}
            ref={nameRef}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
          <input
            className={inputStyle}
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
          <div className="relative">
            <input
              className={inputStyle}
              ref={passwordRef}
              type={showPass ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Password"
              required
              minLength={6}
            />
            <button
              className="absolute right-6 bottom-4"
              onClick={(e) => {
                e.preventDefault();
                setShowPass(!showPass);
              }}
            >
              {showPass ? <p>Hide</p> : <p>Show</p>}
            </button>
          </div>
          <div className="relative">
            <input
              className={inputStyle}
              ref={confirmPasswordRef}
              type={showConf ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              required
            />
            <button
              className="absolute right-6 bottom-4"
              onClick={(e) => {
                e.preventDefault();
                setShowConf(!showConf);
              }}
            >
              {showConf ? <p>Hide</p> : <p>Show</p>}
            </button>
          </div>
          <input className={inputButton} type="submit" value="Register Now" />
        </form>
        <div className="w-full flex justify-center items-center gap-2 ">
          <div className="h-px w-40 bg-amber-500"></div>
          <p className="text-amber-500">Or</p>
          <div className="h-px w-40 bg-amber-500"></div>
        </div>
        <div className="w-full">
          <button className={inputButton} onClick={() => signInWithGoogle()}>
            <img className="h-6" src={googlelogo} alt="google" />
            <p>Login With Google</p>
          </button>
        </div>
        <Link
          className="border-b pb-2 border-amber-500 hover:text-amber-500"
          to={"/login"}
        >
          Already Registered?
        </Link>
      </div>
    </div>
  );
};

export default Register;
