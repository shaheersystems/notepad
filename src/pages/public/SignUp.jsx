import React from "react";
import { Link, Navigate } from "react-router-dom";

function SignUpPage() {
  const something = (e) => {
    e.preventDefault();
    return <Navigate to="/login" />;
  };
  return (
    <div className="flex flex-col items-center justify-center max-w-4xl gap-10 py-10 m-auto">
      <div className="">
        <h1 className="text-2xl font-bold text-center md:text-4xl">
          Create an account
        </h1>
      </div>
      <div className="flex items-center">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-neutral-600" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="px-4 py-1 border rounded w-80 outline-blue-500"
              placeholder="Enter your email address..."
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-neutral-600" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="px-4 py-1 border rounded w-80 outline-blue-500"
              placeholder="Enter your email address..."
            />
          </div>
          <div>
            <button
              onClick={something}
              className="w-full px-4 py-2 text-sm text-white bg-black rounded shadow sm:text-md hover:bg-black/80"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <div>
        <p className="text-sm text-neutral-600">
          Already have an account?{" "}
          <Link className="text-black" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
