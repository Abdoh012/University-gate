// Components
import AuthWrapper from "./components/contexts/AuthCtx.jsx";
import DashboardWrapper from "./components/contexts/DashboardCtx.jsx";
import { ProtectedRoute } from "./components/Protection/ProtectedRoute.jsx";

// Pages
import Dashboard from "./Pages/Dashboard.jsx";
import Auth from "./Pages/Auth";

// React router
import { Routes, Route, Navigate } from "react-router-dom";

// Shadcn
import { Toaster } from "sonner";
import Layout from "./components/layout/Layout.jsx";

// Hooks
import { use, useContext, useState } from "react";
import Students from "./Pages/Students.jsx";
import Log from "./Pages/Log.jsx";
import LoginRoute from "./components/Protection/LoginRoute.jsx";
import ProfileHeader from "./components/ProfileHeader.jsx";
import Wrapper from "./components/Wrapper.jsx";

function App() {
  // -------------------- Component structure --------------------
  return (
    <Wrapper>
      {/* Notification */}
      <div>
        <Toaster />
      </div>

      {/* <section className="flex"> */}
      {/* Pages with react router */}
      <Routes>
        {/* Default opening */}
        <Route
          path="/"
          element={
            <Navigate
              to={localStorage.getItem("remember") ? "/dashboard" : "/login"}
              replace
            />
          }
        />
        {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}

        {/* Auth form */}
        <Route
          path="/login"
          element={
            <AuthWrapper>
              <LoginRoute>
                <Auth></Auth>
              </LoginRoute>
            </AuthWrapper>
          }
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
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
              <Layout />
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
      {/* </section> */}
    </Wrapper>
  );
}

export default App;
