import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <div className="absolute">
        <Header />

        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg"
          alt="BG-Img"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-4 w-full rounded-md bg-gray-600"
          />
        )}
        <input
          type="email"
          placeholder="Enter your Email"
          className="p-3 my-4 w-full rounded-md bg-gray-600"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          className="p-3 my-4 w-full rounded-md bg-gray-600"
        />
        <button className="p-4 my-4 bg-red-600 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <input type="checkbox" />
        <span className="p-1">Remember Me</span>
        <span className="p-9">Need Help.?</span>
        <p className="p-4">
          {isSignInForm ? "New to Netflix ==>" : "Already User ==>"}
          <span onClick={toggleSignInForm} className="ml-2 cursor-pointer">
            {isSignInForm ? "Sign Up.!" : "Sign In.!"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
