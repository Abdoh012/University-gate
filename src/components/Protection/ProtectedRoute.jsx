import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  // If there is no token go to login page
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
