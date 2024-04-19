import React, { useEffect, useState } from "react";
import { AuthService } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAuthenticate } from "../../store/userSlice";

const Login: React.FC = () => {
  console.log("LOGIN PAGE");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async () => {
    console.log("ENTERED INSIDE HANDLECLICK FUNCTION");
    try {
      console.log("GOING INSIDE TRY");

      // Validation
      if (!email || !password) {
        throw new Error("Please provide both email and password.");
      }

      console.log("EMAIL PASSWORD", email, password);
      const response = await AuthService.login(email, password);
      console.log("LOGIN DATA RESPONSE", response);
      if (response && response?.data) {
        dispatch(loginAuthenticate(true));
        navigate("/dashboard");
      } else {
        dispatch(loginAuthenticate(false));
      }
    } catch (error) {
      console.log("GOING INSIDE CATCH");
      console.error(error);
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="text"
                name="email"
                placeholder="Email"
                value={email}
                autoComplete="email"
                required
                onChange={(e) => {
                  console.log("Email", e.target.value);
                  setEmail(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                autoComplete="current-password"
                required
                onChange={(e) => {
                  console.log("Password", e.target.value);
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <button
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleClick}
            >
              Sign In
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
