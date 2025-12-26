// Comps
import StudentSearch from "@/components/Students Management/StudentSearch";
import StudentsHeader from "@/components/Students Management/StudentsHeader";
import { PaginatedStudentsTable } from "@/components/Students Management/PaginatedStudentsTable";

export default function Students() {
  // -------------------- Component Structure --------------------

  return (
    <>
      {/* Header */}
      <StudentsHeader />

      {/* Searching */}
      <StudentSearch />

      {/* Students */}
      <PaginatedStudentsTable />
    </>
  );
}
