// Query
import { useQuery } from "@tanstack/react-query";

// Axios
import axios from "axios";

// Ctx
import { createContext } from "react";

// React router
import { useNavigate } from "react-router-dom";

export const DashboardCtx = createContext({
  handleShowAllLogs: null,
  students: null,
  allStudents: null,
  gateStats: null,
  loggedStudents: null,
});

// Axios instance
const api = axios.create({
  baseURL: "https://batu-gate-production.abdullah.top/api/v1",
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default function DashboardWrapper({ children }) {
  // -------------------- States --------------------
  const navigate = useNavigate();
  // End of states

  // -------------------- Queries --------------------
  // All Students
  const { data: students = [] } = useQuery({
    queryKey: ["students"],
    queryFn: fetchStudents,
    refetchInterval: 30000, // auto refresh
  });

  // Gate stats
  const { data: gateStats } = useQuery({
    queryKey: ["gateStats"],
    queryFn: fetchGateStats,
    refetchInterval: 30000, // auto refresh
  });

  // Logged students
  const { data: loggedStudents = [] } = useQuery({
    queryKey: ["logs"],
    queryFn: fetchLoggedStudents,
    refetchInterval: 30000, // auto refresh
  });
  // End of queries

  // -------------------- Functions --------------------

  // API functions
  // Fetch all students
  async function fetchStudents() {
    try {
      const res = await api.get("/students");

      // If request success get the gate stats
      if (res.status === 200) {
        return res.data.data || null;
      }
    } catch (error) {
      return [];
    }
  }

  // Get gate stats
  async function fetchGateStats() {
    try {
      const res = await api.get("/logs/today-statistics");

      // If request success get the gate stats
      if (res.status === 200) {
        return res.data.data || null;
      }
    } catch (error) {
      return [];
    }
  }

  // Get logged in students stats
  async function fetchLoggedStudents() {
    try {
      const res = await api.get("/logs");

      // If request success get the gate stats
      if (res.status === 200) {
        return res.data.data || null;
      }
    } catch (error) {
      return [];
    }
  }
  // End of API functions

  // Handle show all logs
  function showAllLogs() {
    navigate("/log");
  }
  // End of functions

  // -------------------- Context values --------------------
  const ctxValues = {
    handleShowAllLogs: showAllLogs,
    students: students,
    allStudents: students.length,
    gateStats: gateStats,
    loggedStudents: loggedStudents,
  };

  // -------------------- Component Structure --------------------
  return <DashboardCtx value={ctxValues}>{children}</DashboardCtx>;
}
