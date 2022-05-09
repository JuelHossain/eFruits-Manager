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
import { Link, Navigate, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const Register = () => {
  //styles
  const inputStyle = "border m-2 p-2 w-96";
  const inputButton =
    "border m-2 p-2 w-96 hover:bg-pink-600 hover:text-pink-100 ease-in-out duration-300 flex items-center justify-center gap-2";

  // states 
  const [showPass, setShowPass] = useState(false);
  const [showConf, setShowConf] = useState(false);
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
if (user || googleUser) {
  navigate("/");
  window.location.reload(true);
  console.log(user);
} else if (loading || updating || googleLoading) {
  return <Loading></Loading>;
} else if (error || updateError || googleError) {
  toast.error(error.toString().slice(37, -2));
} else {
  console.clear();
}

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

      // when i am setting a custom error to the input field the field is showing error even after changing the value matched . i tried 2 days but didn't solved it.  if you can solved it please help.
      // e.target.confirmPassword.setCustomValidity("Password Doesnot Match");
      // e.target.confirmPassword.reportValidity();
    } else {
      // e.target.confirmPassword.setCustomValidity('');
      // e.target.confirmPassword.reportValidity();
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    }
  };
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
        <div className="flex justify-center items-center gap-2">
          <div className="h-px w-40 bg-amber-500"></div>
          <p className="text-amber-500">Or</p>
          <div className="h-px w-40 bg-amber-500"></div>
        </div>
        <div>
          <button className={inputButton} onClick={() => signInWithGoogle()}>
            <img className="h-6" src={googlelogo} alt="google" />{" "}
            <p>Login With Google</p>
          </button>
        </div>
        <Link className="border-b pb-2 border-amber-500 hover:text-amber-500" to={'/login'}>Already Registered?</Link>
      </div>
    </div>
  );
};

export default Register;
