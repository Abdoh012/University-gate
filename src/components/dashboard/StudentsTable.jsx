import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { use } from "react";
import { DashboardCtx } from "../contexts/DashboardCtx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function StudentsTable() {
  // -------------------- Contexts --------------------
  const { students } = use(DashboardCtx);
  // End of contexts

  // -------------------- Variables --------------------
  const firstFiveStudents = students.filter((stu, stuInd) => stuInd < 5);

  // End of variables

  // -------------------- Component Structure --------------------
  return (
    <Table className="rounded-sm">
      {/* Caption */}
      {/* <TableCaption>A list of latest students</TableCaption> */}

      {/* Header */}
      <TableHeader className="bg-blue-500 ">
        <TableRow className="-50 duration-300 rounded-sm">
          <TableHead className="w-[100px] uppercase  p-5 text-center text-white">
            student
          </TableHead>
          <TableHead className="w-[100px] uppercase  p-5 text-center text-white">
            Status
          </TableHead>
          <TableHead className="w-[100px] uppercase  p-5 text-center text-white">
            time
          </TableHead>
          <TableHead className="w-[100px] uppercase  p-5 text-center text-white">
            seat number
          </TableHead>
        </TableRow>
      </TableHeader>

      {/* Body */}
      <TableBody>
        {firstFiveStudents.map((student) => (
          <TableRow key={student.id} className="p-8 bg-neutral-50">
            {/* Name with image */}
            <TableCell className="font-medium p-5 text-center">
              <div className="flex flex-col items-center">
                {/* Image */}
                <p className="w-15 h-15 rounded-full mb-3">
                  <img
                    className="w-full h-full rounded-full"
                    src={student.photo}
                    alt="NotFound"
                  />
                </p>

                {/* Name */}
                <p>{student.name}</p>
              </div>
            </TableCell>

            {/* Can access gate? */}
            <TableCell className="p-5">
              <div className="flex justify-center">
                <div
                  className={`rounded-lg w-fit px-2 py-1  ${
                    student.can_access_gate
                      ? "bg-green-200 text-green-500"
                      : "bg-red-200 text-red-500 "
                  }`}
                >
                  <span>
                    <FontAwesomeIcon
                      className="text-[12px] me-1"
                      icon={`fa-solid ${
                        student.can_access_gate ? "fa-check" : "fa-x"
                      }`}
                    />
                  </span>
                  {student.can_access_gate ? "Allowed" : "Rejected"}
                </div>
              </div>
            </TableCell>

            {/* Entry time */}
            <TableCell className="p-5 text-center text-indigo-500">
              {`${new Date(student.last_entry_time).getHours()}:${new Date(
                student.last_entry_time
              ).getMinutes()} PM`}
            </TableCell>

            {/* Student Id */}
            <TableCell className="text-center text-muted-foreground">{student.seat_number}</TableCell>
          </TableRow>
        ))}
      </TableBody>

      {/* <TableFooter>
        <TableRow>
          <TableCell className="p-5" colSpan={3}>
            Total
          </TableCell>
          <TableCell className="text-center p-5">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
