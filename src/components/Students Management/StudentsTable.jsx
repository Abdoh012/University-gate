// Shadcn table
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StudentsTable({ items }) {
  // -------------------- Component Structure --------------------
  return (
    <Table className="mb-[var(--mainMargin)]">
      {/* Header */}
      <TableHeader className="bg-blue-500 hidden sm:table-header-group">
        <TableRow>
          <TableHead className="uppercase p-2 sm:p-5 text-center text-white">
            student
          </TableHead>
          <TableHead className="uppercase text-center text-white hidden md:table-cell">
            seat number
          </TableHead>
          <TableHead className="uppercase text-center text-white hidden lg:table-cell">
            college
          </TableHead>
          <TableHead className="uppercase text-center text-white hidden lg:table-cell">
            department
          </TableHead>
          <TableHead className="uppercase text-center text-white">
            access status
          </TableHead>
          <TableHead className="uppercase text-center text-white">
            actions
          </TableHead>
        </TableRow>
      </TableHeader>

      {/* Body */}
      <TableBody>
        {items.map((student) => (
          <TableRow
            key={student.id}
            className="block sm:table-row bg-neutral-50 border rounded-lg mb-4 sm:mb-0"
          >
            {/* Student */}
            <TableCell className="block sm:table-cell p-3 sm:p-5 text-center font-medium">
              <div className="flex flex-col items-center">
                <img
                  className="w-12 h-12 rounded-full mb-2"
                  src={student.photo}
                  alt="NotFound"
                />
                <p>{student.name}</p>
              </div>
            </TableCell>

            {/* Seat Number */}
            <TableCell className="hidden md:table-cell text-center text-muted-foreground">
              {student.seat_number}
            </TableCell>

            {/* College */}
            <TableCell className="hidden lg:table-cell text-center text-muted-foreground capitalize">
              {student.college}
            </TableCell>

            {/* Department */}
            <TableCell className="hidden lg:table-cell text-center text-muted-foreground capitalize">
              {student.department}
            </TableCell>

            {/* Status */}
            <TableCell className="block sm:table-cell p-3 sm:p-5 text-center">
              <div className="flex justify-center">
                <div
                  className={`rounded-lg px-2 py-1 text-sm ${
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

            {/* Actions */}
            <TableCell className="block sm:table-cell p-3 sm:p-5 text-center text-indigo-500">
              <button className="cursor-pointer hover:underline">
                View Details
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
