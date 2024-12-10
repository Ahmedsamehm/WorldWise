import { createContext, useContext, useReducer, useState } from "react";

// First, create a context and export it to be used in other components.
const AuthContext = createContext();

// Define the initial state for authentication.
const initialState = {
  user: null,
  isAuthenticated: false,
  Err: false,
};

// For learning ^^
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

// Define the reducer function to manage authentication state.
const reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "Err":
      return { ...state, Err: action.payload };
    default:
      throw new Error("Unknown action");
  }
};

// Create a provider component and export it to wrap your app, giving all components access to shared data.
function AuthProvider({ children }) {
  const [ErrMsg, setErrMsg] = useState("");
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Define login function to authenticate user.
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
      setErrMsg(""); // Clear error message on successful login
    } else {
      dispatch({ type: "Err", payload: true });
      setErrMsg("Invalid email or password"); // Set specific error message
    }
  }

  // Define logout function to clear user data.
  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    // Use AuthContext.Provider to wrap children, passing shared data via the 'value' prop.
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, ErrMsg }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Create a custom hook to use the AuthContext.
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

// Export the AuthProvider and useAuth hook for use in other components.
export { AuthProvider, useAuth };
