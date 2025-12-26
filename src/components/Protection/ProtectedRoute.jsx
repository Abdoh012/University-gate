// React router
import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute({ children }) {
  // -------------------- Variables --------------------
  const token = localStorage.getItem("token"); // Token
  const location = useLocation();
  // End of variables

  // If there is no token navigate to login page
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // -------------------- Component Structure --------------------
  return children;
}
