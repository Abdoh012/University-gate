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
import AppWrapper, { AppCtx } from "./components/contexts/AppCtx.jsx";
import Students from "./Pages/Students.jsx";
import Log from "./Pages/Log.jsx";
import LoginRoute from "./components/Protection/LoginRoute.jsx";
import ProfileHeader from "./components/ProfileHeader.jsx";

function App() {
  // -------------------- Component structure --------------------
  return (
    <AppWrapper>
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
              <DashboardWrapper>
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              </DashboardWrapper>
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
              // <StudentsWrapper>
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
              // </StudentsWrapper>
            }
          >
            <Route
              index
              element={
                <>
                  <Students />
                  {/* <ProfileHeader /> */}
                </>
              }
            />
          </Route>

          {/* Log */}
          <Route
            path="/log"
            element={
              // <LogWrapper>
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
              // </LogWrapper>
            }
          >
            <Route
              index
              element={
                <>
                  <Log />
                  {/* <ProfileHeader /> */}
                </>
              }
            />
          </Route>
        </Routes>
      {/* </section> */}
    </AppWrapper>
  );
}

export default App;
