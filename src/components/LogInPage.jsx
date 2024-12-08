import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    alert("Login button clicked!"); // Replace with your login logic
  };

  const handleSignUp = () => {
    alert("Navigate to Sign-Up page!"); // Replace with navigation to sign-up page
  };

  return (
    <div className="min-h-screen py-28 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 flex flex-col justify-center items-center relative overflow-hidden px-6">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 z-10">Login</h1>

      {/* Login Form */}
      <form className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full z-10">
        <div className="space-y-4">
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Login Button */}
        <div className="mt-6">
          <button
            type="button"
            onClick={handleLogin}
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </div>

        {/* Sign-Up Option */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup">
            <button
              type="button"
              //   onClick={handleSignUp}
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up
            </button>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
