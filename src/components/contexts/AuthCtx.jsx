// Hooks
import { useRef, useState } from "react";

// Context
import { createContext } from "react";

// React Router
import { useNavigate } from "react-router-dom";

// Shadcn
import { toast } from "sonner";

// Axios
import axios from "axios";

// Create ctx
export const AuthCtx = createContext({
  LogInEmail: null,
  LogInPassword: null,
  handleSignIn: null,
  userData: null,
});

// Custom Axios instance
const api = axios.create({
  baseURL: "https://batu-gate-production.abdullah.top/api",
  headers: {
    Accept: "application/json",
  },
});

export default function AuthWrapper({ children }) {
  // -------------------- Refs --------------------
  const LogInEmail = useRef();
  const LogInPassword = useRef();
  // End of refs

  // -------------------- States --------------------
  const navigate = useNavigate();

  const [user, setUser] = useState(
    localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))
  ); // User data | If localStorage has user value send it to user state

  // End of states

  // -------------------- Functions --------------------

  // API functions

  // Authentication
  async function authentication() {
    try {
      const res = await api.post("/login", {
        email: LogInEmail.current.value,
        password: LogInPassword.current.value,
      }); // Login api

      // If the request success navigate to dashboard
      if (res.status === 200) {
        // Notification with success login
        showSuccess(res.data.message);

        // Store the token in localstorage
        localStorage.setItem("token", res.data.data.token);

        // Store user data in a state and localStorage
        localStorage.setItem("user", JSON.stringify(res.data));
        setUser(res.data);

        // Replace sign in with dashboard in browser history
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      showError("Incorrect email or password");
      return;
    }
  }
  // End of api functions

  // Handle sign in
  async function handleSignInClick(e) {
    e.preventDefault(); // Prevent actions

    // get the closest form element
    const form = e.target.closest("form");

    // run HTML5 validation FIRST
    if (!form.checkValidity()) {
      form.reportValidity();
    }

    // Input values
    const emailValue = LogInEmail.current.value;
    const passwordValue = LogInPassword.current.value;

    // Check that email and password have values
    if (!emailValue || !passwordValue) {
      showInfo("Please enter your email and password");
      return;
    }

    // Check if email and password are right
    else if (passwordValue && emailValue) {
      authentication();
    }
  }

  // Show info message
  function showInfo(message) {
    toast.info(message, {
      duration: 5000,
      position: "bottom-right",
      closeButton: true,
      style: {
        backgroundColor: "#FEF3C7",
        color: "#92400E",
        border: "1px solid #F59E0B",
      },
    });
  }

  // Show success message
  function showSuccess(message) {
    toast.success(message, {
      duration: 5000,
      position: "bottom-right",
      closeButton: true,
      style: {
        backgroundColor: "#ECFDF5",
        color: "#065F46",
        border: "1px solid #34D399",
      },
    });
  }

  // Show error message
  function showError(message) {
    toast.error(message, {
      duration: 5000,
      position: "bottom-right",
      closeButton: true,
      style: {
        backgroundColor: "#ffe6e6",
        color: "#991B1B",
        border: "1px solid #EF4444",
      },
    });
  }

  // End of Functions

  // -------------------- Context values --------------------
  const ctxValues = {
    LogInEmail: LogInEmail,
    LogInPassword: LogInPassword,
    handleSignIn: handleSignInClick,
    userData: user,
  };

  // -------------------- Component Structure --------------------
  return <AuthCtx value={ctxValues}>{children}</AuthCtx>;
}
