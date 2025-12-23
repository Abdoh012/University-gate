// Hooks
import { use, useContext, useEffect, useRef, useState } from "react";

// Context
import { createContext } from "react";

// React Router
import { useNavigate } from "react-router-dom";

// Shadcn
import { toast } from "sonner";

// Axios
import axios from "axios";
import { AppCtx } from "./AppCtx";

export const AuthCtx = createContext({
  LogInEmail: null,
  LogInPassword: null,
  handleSignIn: null,
});

export default function AuthWrapper({ children }) {
  // -------------------- Refs --------------------
  const LogInEmail = useRef();
  const LogInPassword = useRef();
  // End of refs

  // -------------------- States --------------------
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );


  // End of states

  // -------------------- Contexts --------------------
  const { setUserData } = use(AppCtx);
  // End of contexts

  // -------------------- Functions --------------------

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

    // Check that email has value
    if (!emailValue) {
      toast.info("Please enter your email", {
        duration: 5000,
        position: "bottom-right",
        closeButton: true,
        style: {
          backgroundColor: "#FEF3C7",
          color: "#92400E",
          border: "1px solid #F59E0B",
        },
      });

      return;
    }

    // Check that password has value
    else if (!passwordValue) {
      toast.info("Please enter your password", {
        duration: 5000,
        position: "bottom-right",
        closeButton: true,
        style: {
          backgroundColor: "#FEF3C7",
          color: "#92400E",
          border: "1px solid #F59E0B",
        },
      });

      return;
    }

    // Check if email and password are right
    else if (passwordValue && emailValue) {
      // Try the request
      try {
        const res = await axios.post(
          "https://batu-gate-production.abdullah.top/api/login",
          {
            // email: "admin@batu.com",
            // password: "admin123batu",
            email: LogInEmail.current.value,
            password: LogInPassword.current.value,
          },
          {
            headers: {
              Accept: "application/json",
            },
          }
        );

        // If the request success navigate to dashboard
        if (res.status === 200) {
          console.log(res);

          // Notification with success login
          toast.success(res.data.message, {
            duration: 5000,
            position: "bottom-right",
            closeButton: true,
            style: {
              backgroundColor: "#DCFCE7",
              color: "#065F46",
              border: "1px solid #22C55E",
            },
          });

          // Store the token in localstorage
          localStorage.setItem("token", res.data.data.token);

          setUserData(res.data);
          setIsAuthenticated(
            localStorage.getItem("token") && localStorage.getItem("token")
          );

          // Navigate to dashboard
          navigate("/dashboard", { replace: true });
        }

        // If request failed
      } catch (error) {
        toast.info("Incorrect email or password", {
          duration: 5000,
          position: "bottom-right",
          closeButton: true,
          style: {
            backgroundColor: "#ffe6e6",
            color: "#991B1B",
            border: "1px solid #EF4444",
          },
        });

        return;
      }
    }
  }

  // Handle authentication buttons click
  function handleAuthBtnClick(authPage) {
    setActiveAuth(authPage);
  }

  // End of Functions

  // -------------------- Context values --------------------
  const ctxValues = {
    LogInEmail: LogInEmail,
    LogInPassword: LogInPassword,
    handleActivePage: handleAuthBtnClick,
    handleSignIn: handleSignInClick,
  };

  // -------------------- Component Structure --------------------
  return <AuthCtx value={ctxValues}>{children}</AuthCtx>;
}
