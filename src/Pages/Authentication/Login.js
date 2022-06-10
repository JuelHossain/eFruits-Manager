import React, {  useEffect, useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase";
import googlelogo from "../../googlelogo.png";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CheckCircleIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/outline";
import "react-toastify/dist/ReactToastify.minimal.css";
import token from "../../utils/token"

const Login = () => {
  //styles
  const inputStyle = "border w-full focus:outline-0 focus:animate-pulse h-12 p-2";
  const inputButton =
    "border w-full hover:bg-pink-600 hover:text-pink-100 ease-in-out duration-300 flex items-center justify-center gap-2 focus:animate-pulse h-12 p-2";

  // states
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //react-firebase-hook
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  //navigate
  const navigate = useNavigate('');
  const location = useLocation('');
  const destination = location.state?.from?.pathname || "/";

  //ref
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const showError = async (err) => {
    toast.error(err?.toString().slice(37, -2));
  };
  
  useEffect(() => {
    const tok = async () => {
      if (user || googleUser) {
        user && await token(user.user.email);
        googleUser && await token(googleUser.user.email);
        await navigate(destination, { replace: true });
       await  window.location.reload(true);
      } else if (error || googleError) {
        error && await showError(error);
        googleError && await showError(googleError);
      }
    }
    tok();
  }, [user, googleUser, error,destination, googleError, navigate]);

  //eventHandler
  return (
    <div className="max-w-lg mx-auto my-2 sm:my-28 p">
      <div className="shadow flex flex-col items-center p-10 gap-3 ">
        <div className="flex flex-col items-center">
          {loading || googleLoading ? (
            <LockOpenIcon className="bg-pink-100 h-10 p-2 rounded-full"></LockOpenIcon>
          ) : sending ? (
            <CheckCircleIcon className="bg-pink-100 h-10 p-2 rounded-full"></CheckCircleIcon>
          ) : (
            <LockClosedIcon className="bg-pink-100 h-10 p-2 rounded-full"></LockClosedIcon>
          )}

          <p className="m-2 text-xl text-pink-600">Please Login</p>
        </div>
        <form
          className="w-full  flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            signInWithEmailAndPassword(email, password);
          }}
        >
          <input
            className={inputStyle}
            onBlur={(e) => setEmail(e.target.value)}
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
              onBlur={(e) => {
                setPassword(e.target.value);
              }}
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
          <input className={inputButton} type="submit" value="Login Now" />
        </form>
        <div className="flex justify-center items-center gap-2 w-full ">
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
        <div className="flex flex-col gap-3">
          <Link
            className="border-b pb-2 border-amber-500 hover:text-amber-500"
            to={"/register"}
          >
            Don't Have An Account?
          </Link>
          <button
            onClick={async () => {
              if (!email) {
                toast.error("Type Your Email and and Try again");
              } else {
                await sendPasswordResetEmail(email);
                toast.success("Sent email");
              }
            }}
            className="border-b pb-2 border-amber-500 hover:text-amber-500"
            to={"/register"}
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
