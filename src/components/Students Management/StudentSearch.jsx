// Comps
import Card from "../dashboard/Card";
import StudentSearchInput from "./StudentSearchInput";

// Shadcn
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { StudentsManagementCtx } from "../contexts/StudentsManagementCtx";
import { use } from "react";

export default function StudentSearch() {
  // -------------------- Variables --------------------
  const colleges = [
    { label: "Colleges", placeholder: "All Colleges" },
    [
      { id: 0, name: "All-Colleges" },
      { id: 1, name: "Industry-And-Energy" },
      { id: 2, name: "Health-Sciences" },
    ],
  ];

  const departments = [
    { label: "Departments", placeholder: "All Departments" },
    [
      { id: 0, name: "All-Departments" },
      { id: 1, name: "information-technology" },
      { id: 2, name: "Railway-technology" },
      { id: 3, name: "tractors-and-agricultural-equipment-technology" },
      { id: 4, name: "spinning-and-weaving-technology" },
      { id: 5, name: "food-industries-technology" },
      { id: 6, name: "pharmaceutical-industries-technology" },
      { id: 7, name: "spinning-and-weaving-technology" },
      { id: 8, name: "health-information-management-technology" },
      { id: 9, name: "healthcare-technology" },
      { id: 10, name: "dental-constructions-technology" },
    ],
  ];

  const status = [
    { label: "Status", placeholder: "All Status" },
    [
      { id: 0, name: "All-Status" },
      { id: 1, name: "Allowed" },
      { id: 2, name: "Denied" },
    ],
  ];
  // End of variables

  // -------------------- Contexts --------------------
  const {
    studentId,
    getUserId,
    handleCollegeChange,
    handleDepartmentChange,
    handleAccessStatusChange,
  } = use(StudentsManagementCtx);

  // End of contexts

  // -------------------- Component Structure --------------------
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {/* Student search */}
      <Card>
        <div className="px-5">
          {/* Label */}
          <Label className="mb-3" htmlFor="student">
            Student Search
          </Label>

          {/* Input */}
          <Input
            onChange={getUserId}
            ref={studentId}
            name="student"
            id="student"
            type="search"
            placeholder="Seat Number"
          />
        </div>
      </Card>

      {/* College search */}
      <Card>
        <StudentSearchInput onChange={handleCollegeChange} options={colleges}>
          College
        </StudentSearchInput>
      </Card>

      {/* Department search */}
      <Card>
        <StudentSearchInput
          onChange={handleDepartmentChange}
          options={departments}
        >
          Department
        </StudentSearchInput>
      </Card>

      {/* Access status search */}
      <Card>
        <StudentSearchInput
          onChange={handleAccessStatusChange}
          options={status}
        >
          Access Status
        </StudentSearchInput>
      </Card>
    </div>
  );
}
