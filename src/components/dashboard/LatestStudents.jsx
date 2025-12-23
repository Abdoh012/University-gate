// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Comps
import Card from "./Card";

// Hooks
import { use } from "react";
import { DashboardCtx } from "../contexts/DashboardCtx";
import { StudentsTable } from "./StudentsTable";

export default function LatestStudents() {
  // -------------------- Contexts --------------------
  const { handleShowAllLogs } = use(DashboardCtx);
  // End of contexts

  // -------------------- Component Structure --------------------
  return (
    <Card padding="p-0">
      {/* Header */}
      <div className="w-full font-semibold flex justify-between items-center mb-5 p-5">
        <p>Recent Access Logs</p>
        <div>
          <button
            onClick={handleShowAllLogs}
            className="text-[var(--mainColor)] flex gap-1 items-center cursor-pointer"
          >
            View All Logs
            <FontAwesomeIcon className="mt-1" icon="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>

      {/* Students */}
      <div>
        <StudentsTable />
      </div>
    </Card>
  );
}
