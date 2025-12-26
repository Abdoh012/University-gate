// Shadcn table
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Hooks
import { use } from "react";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Ctx
import { DashboardCtx } from "../contexts/DashboardCtx";

export function LatestLogStudentsTable() {
  // -------------------- Contexts --------------------
  const { students } = use(DashboardCtx);
  console.log(students);

  // End of contexts

  // -------------------- Variables --------------------
  const firstFiveStudents = students.filter((stu, stuInd) => stuInd < 5); // Last five logged students
  // End of variables

  // -------------------- Component Structure --------------------
  return (
    <Table>
      {/* Header (desktop only) */}
      <TableHeader className="bg-blue-500 hidden sm:table-header-group">
        <TableRow>
          <TableHead className="uppercase p-5 text-center text-white">
            Student
          </TableHead>
          <TableHead className="uppercase p-5 text-center text-white">
            Status
          </TableHead>
          <TableHead className="uppercase p-5 text-center text-white">
            Time
          </TableHead>
          <TableHead className="uppercase p-5 text-center text-white">
            Seat Number
          </TableHead>
        </TableRow>
      </TableHeader>

      {/* Body */}
      <TableBody>
        {firstFiveStudents.map((student) => (
          <TableRow
            key={student.id}
            className="block sm:table-row border rounded-lg mb-4 sm:mb-0 bg-neutral-50"
          >
            {/* Student */}
            <TableCell className="block sm:table-cell p-3 sm:p-5 text-center">
              <span className="sm:hidden font-bold block text-xs text-muted-foreground mb-2">
                Student
              </span>

              <div className="flex flex-col items-center">
                <p className="w-12 h-12 rounded-full mb-2">
                  <img
                    className="w-full h-full rounded-full"
                    src={student.photo}
                    alt="NotFound"
                  />
                </p>
                <p className="font-medium">{student.name}</p>
              </div>
            </TableCell>

            {/* Status */}
            <TableCell className="block sm:table-cell p-3 sm:p-5 text-center">
              <span className="sm:hidden block text-xs text-muted-foreground mb-1">
                Status
              </span>

              <div className="flex justify-center">
                <div
                  className={`rounded-lg w-fit px-2 py-1 ${
                    student.can_access_gate
                      ? "bg-green-200 text-green-600"
                      : "bg-red-200 text-red-600"
                  }`}
                >
                  <FontAwesomeIcon
                    className="text-[12px] me-1"
                    icon={`fa-solid ${
                      student.can_access_gate ? "fa-check" : "fa-x"
                    }`}
                  />
                  {student.can_access_gate ? "Allowed" : "Rejected"}
                </div>
              </div>
            </TableCell>

            {/* Time */}
            <TableCell className="block sm:table-cell p-3 sm:p-5 text-center text-indigo-500">
              <span className="sm:hidden block text-xs text-muted-foreground mb-1">
                Time
              </span>

              {`${new Date(student.last_entry_time).getHours()}:${new Date(
                student.last_entry_time
              ).getMinutes()} PM`}
            </TableCell>

            {/* Seat Number */}
            <TableCell className="block sm:table-cell p-3 sm:p-5 text-center text-muted-foreground">
              <span className="sm:hidden block text-xs text-muted-foreground mb-1">
                Seat Number
              </span>

              {student.seat_number}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
