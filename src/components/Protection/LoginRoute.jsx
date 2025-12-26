// React router
import { Navigate } from "react-router-dom";

export default function LoginRoute({ children }) {
  // -------------------- Variables --------------------
  const token = localStorage.getItem("token"); // Token
  // End of variables

  // If there is a token and remember me is true navigate to dashboard
  if (token && localStorage.getItem("remember") === "true") {
    return <Navigate to="/dashboard" replace />;
  }

  // If remember me is false navigate to login
  else <Navigate to="/login" replace />;

  // -------------------- Component Structure --------------------
  return children;
}
