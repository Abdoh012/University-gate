import { createContext, useEffect, useRef, useState } from "react";

// Hooks
import { useNavigate } from "react-router-dom";

// Axios
import axios from "axios";

export const DashboardCtx = createContext({
  students: null,
  allStudents: null,
  gateStats: null,
  loggedStudents: null,
  canAccessGateStudents: null,
  ITStudents: null,
  handleShowAllLogs: null,
});

export default function DashboardWrapper({ children }) {
  // -------------------- Refs --------------------

  // End of refs

  // -------------------- States --------------------
  const [students, setStudents] = useState([]);

  const [gateStats, setGateStats] = useState();

  const [loggedStudents, setLoggedStudents] = useState([]);

  const navigate = useNavigate();
  // End of states

  // -------------------- Variables --------------------
  const canAccessGate = students.filter((stu) => stu.can_access_gate).length; // Can access gate students

  const IT = students.filter(
    (stu) => stu.department === "information-technology"
  ).length; // Total students from it department
  // End of variables

  // -------------------- useeEffect --------------------
  useEffect(() => {
    async function getUsers() {
      // Fetch all students
      try {
        const res = await axios.get(
          "https://batu-gate-production.abdullah.top/api/v1/students",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        // If response success
        if (res.status === 200) {
          setStudents(res.data.data);
          console.log(res.data);
        }
      } catch (error) {
        throw error;
      }
    }

    // Get gate stats
    async function getGateStats() {
      try {
        const res = await axios.get(
          "https://batu-gate-production.abdullah.top/api/v1/logs/today-statistics",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        // If request success get the gate stats
        if (res.status === 200) {
          setGateStats(res.data.data);          
        }
      } catch (error) {
        throw error;
      }
    }

    // Get logged in students stats
    async function getLoggedStudents() {
      try {
        const res = await axios.get(
          "https://batu-gate-production.abdullah.top/api/v1/logs",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        // If request success get the gate stats
        if (res.status === 200) {
          setLoggedStudents(res.data.data);
        }
      } catch (error) {
        throw error;
      }
    }
    getUsers();
    getGateStats();
    getLoggedStudents();

  }, []);
  // End of useEffect

  // -------------------- Functions --------------------

  // Handle show all logs
  function showAllLogs() {
    navigate("/log");
  }
  // End of functions

  // -------------------- Context values --------------------
  const ctxValues = {
    students: students,
    allStudents: students.length,
    gateStats: gateStats,
    loggedStudents: loggedStudents,
    canAccessGateStudents: canAccessGate,
    ITStudents: IT,
    handleShowAllLogs: showAllLogs,
  };

  // -------------------- Component Structure --------------------
  return <DashboardCtx value={ctxValues}>{children}</DashboardCtx>;
}
