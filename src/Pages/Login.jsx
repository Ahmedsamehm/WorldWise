import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/FakeAuthContext";

export default function Login() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated, ErrMsg } = useAuth();

    const Navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (email && password) login(email, password);
  }

  
  useEffect(() => {
    if (isAuthenticated) Navigate("/AppLayOut", { replace: true });
  }, [isAuthenticated, Navigate]);

  return (
    <main className="flex justify-center items-center min-h-screen ">
      <div className="w-full max-w-md mx-auto px-4">
        <section className="mx-auto">
          <div className="bg-blue-500 p-6 sm:p-10 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <ul className="flex flex-col space-y-6">
                <li>
                  <p className="text-center text-white text-lg sm:text-xl">
                    Welcome! Please sign in to continue.
                  </p>
                </li>
                <li>
                  <label
                    htmlFor="email"
                    className="text-sm sm:text-base text-white"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="p-3 border border-blue-300 rounded w-full text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="email"
                    placeholder="Email..."
                    value={email}
                  />
                </li>
                <li>
                  <label
                    htmlFor="password"
                    className="text-sm sm:text-base text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="p-3 border border-blue-300 rounded w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="password"
                    id="password"
                    value={password}
                  />
                </li>
                <span> {ErrMsg}</span>
                <li>
                  <button
                    type="submit"
                    className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                  >
                    Sign In
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
