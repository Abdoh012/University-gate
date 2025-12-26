// Components
import { ProtectedRoute } from "./components/Protection/ProtectedRoute.jsx";
import LoginRoute from "./components/Protection/LoginRoute.jsx";

// Pages
import Dashboard from "./Pages/Dashboard";
import Auth from "./Pages/Auth";
import Students from "./Pages/Students.jsx";
import Log from "./Pages/Log.jsx";

// React router
import { Routes, Route, Navigate } from "react-router-dom";

// Shadcn
import { Toaster } from "sonner";
import Layout from "./components/layout/Layout.jsx";

// Wrappers
import StudentsManagementWrapper from "./components/contexts/StudentsManagementCtx.jsx";
import AuthWrapper from "./components/contexts/AuthCtx.jsx";
import DashboardWrapper from "./components/contexts/DashboardCtx.jsx";

function App() {
  // -------------------- Component structure --------------------
  return (
    <>
      {/* Notification */}
      <div>
        <Toaster />
      </div>

      {/* Pages with react router */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Auth form */}
        <Route
          path="/login"
          element={
            <LoginRoute>
              <AuthWrapper>
                <Auth></Auth>
              </AuthWrapper>
            </LoginRoute>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <Layout />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <>
                <Dashboard />
              </>
            }
          />
        </Route>

        {/* Students */}

        <Route
          path="/students"
          element={
            <ProtectedRoute>
              <StudentsManagementWrapper>
                <Layout />
              </StudentsManagementWrapper>
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <>
                <Students />
              </>
            }
          />
        </Route>

        {/* Log */}
        <Route
          path="/log"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route
            index
            element={
              <>
                <Log />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
