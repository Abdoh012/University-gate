// Query
import { useQuery } from "@tanstack/react-query";

// Hooks
import { createContext, useRef, useState } from "react";

// Axios
import axios from "axios";
import { toast } from "sonner";

// Ctx
export const StudentsManagementCtx = createContext({
  students: null,
  studentById: null,
  studentId: null,
  college: null,
  handleCollegeChange: null,
  department: null,
  handleDepartmentChange: null,
  accessStatus: null,
  handleAccessStatusChange: null,
  getStudent: null,
  getUserId: null,
  studentIdInfo: null,
});

// Instance
const api = axios.create({
  baseURL: "https://batu-gate-production.abdullah.top/api/v1",
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default function StudentsManagementWrapper({ children }) {
  // -------------------- Refs --------------------
  const studentId = useRef();

  // End of refs

  // -------------------- States --------------------
  const [id, setId] = useState(); // Student id

  const [college, setCollege] = useState(); // Student college

  const [department, setDepartment] = useState(); // Student department

  const [accessStatus, setAccessStatus] = useState(); // Student accessStatus
  // End of states

  // -------------------- Functions --------------------

  // API functions
  // Fetch all students
  async function fetchStudents() {
    try {
      const res = await api.get("/students");

      // If request success get the gate stats
      if (res.status === 200) {
        return res.data.data;
      }
    } catch (error) {
      return [];
    }
  }

  // fetch students by id
  async function fetchById() {
    try {
      const res = await api.get(`/students/${id}`);

      // If request success get the student info and notification success
      if (res.status === 200) {
        showSuccess("Student Retrieved Successful");
        // Return student data
        return res.data.data;
      }
    } catch (e) {
      showError("Student not found");
      return [];
    }
  }

  // End of API functions

  // Handle college change
  function handleCollegeChange(college) {
    setCollege(college);
  }

  // Handle department change
  function handleDepartmentChange(department) {
    setDepartment(department);
  }

  // Handle access status change
  function handleAccessStatusChange(status) {
    setAccessStatus(status);
  }

  // Get the id of student
  function getUserId() {
    setTimeout(() => {
      setId(studentId.current.value);
    }, 800);
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

  // End of functions

  // -------------------- Queries --------------------

  // All students
  const { data: students = [] } = useQuery({
    queryKey: ["students"],
    queryFn: fetchStudents,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Student by id
  const { data: studentIdInfo = null } = useQuery({
    queryKey: ["student", id],
    queryFn: fetchById,
    enabled: !!id, // prevents auto-run
  });

  // -------------------- Context values --------------------
  const ctxValues = {
    studentId: studentId,
    students: students,
    college: college,
    handleCollegeChange: handleCollegeChange,
    department: department,
    handleDepartmentChange: handleDepartmentChange,
    accessStatus: accessStatus,
    handleAccessStatusChange: handleAccessStatusChange,
    getStudent: fetchById,
    getUserId: getUserId,
    studentIdInfo: studentIdInfo,
  };

  // -------------------- Component Structure --------------------
  return (
    <StudentsManagementCtx value={ctxValues}>{children}</StudentsManagementCtx>
  );
}
