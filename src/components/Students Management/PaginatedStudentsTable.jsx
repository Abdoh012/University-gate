// Hooks
import { useContext, useState } from "react";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Comps
import { StudentsManagementCtx } from "../contexts/StudentsManagementCtx";
import { StudentPagination } from "./StudentPagination";
import StudentsTable from "./StudentsTable";

const ITEMS_PER_PAGE = 2; // Number of items per page

export function PaginatedStudentsTable() {
  // -------------------- Contexts --------------------
  const { students, studentIdInfo, college, department, accessStatus } =
    useContext(StudentsManagementCtx);
  // End of contexts

  // -------------------- States --------------------
  const [page, setPage] = useState(1);
  // End of states

  // -------------------- Variables --------------------
  const specifyStudents = studentIdInfo ? [studentIdInfo] : students; // All students or student got by id

  const isAllColleges = !college || college === "All-Colleges"; // If college has no value or equals to all return true

  const isAllDepartments = !department || department === "All-Departments"; // If department has no value or equals to all return true

  const isAllStatus = !accessStatus || accessStatus === "All-Status"; // If accessStatus has no value or equals to all return true

  let finalStudentsResult = [];
  // End of variables

  // Filter students based on student filters

  finalStudentsResult = specifyStudents.filter((stu) => {
    const collegeMatch = isAllColleges || stu.college === college.toLowerCase(); // Return students based on selected college

    const departmentMatch =
      isAllDepartments || stu.department === department.toLowerCase(); // Return students based on selected department

    const canAccessGate = stu.can_access_gate ? "allowed" : "denied"; // If can_access_gate true return allowed else denied (to correctly use it in access filter)
    const statusMatch =
      isAllStatus || accessStatus.toLowerCase() === canAccessGate; // Return students based on selected access

    return collegeMatch && departmentMatch && statusMatch;
  });

  // Pagination variables
  const totalPages = Math.max(
    1,
    Math.ceil(finalStudentsResult.length / ITEMS_PER_PAGE)
  ); // Return total pages needed in the table for pagination

  const start = (page - 1) * ITEMS_PER_PAGE; // Start of the pagination

  const currentItems =
    finalStudentsResult.length === 0
      ? []
      : finalStudentsResult.slice(start, start + ITEMS_PER_PAGE); // Current items after being sliced for pagination

  // -------------------- Functions --------------------

  // Handle Previous btn click
  function handlePrevBtn() {
    setPage((p) => Math.max(p - 1, 1));
  }

  // Handle next btn click
  function handleNextBtn() {
    setPage((p) => Math.min(p + 1, totalPages));
  }

  // Handle page btn click
  function handlePageClick(i) {
    setPage(i + 1);
  }
  // End of functions

  // -------------------- Component Structure --------------------
  return (
    <>
      {/* Students table */}
      <StudentsTable items={currentItems} />

      {/* Pagination */}
      <StudentPagination
        page={page}
        totalPages={totalPages}
        handleNextBtn={handleNextBtn}
        handlePageClick={handlePageClick}
        handlePrevBtn={handlePrevBtn}
      />
    </>
  );
}
