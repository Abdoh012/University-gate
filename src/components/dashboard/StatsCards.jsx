// JS data
import { studentsCards } from "@/util/studentsCards";

// Comps
import Card from "./Card";

// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Hooks
import { use } from "react";

// Ctx
import { AppCtx } from "../contexts/AppCtx";
import { DashboardCtx } from "../contexts/DashboardCtx";

export default function StatsCards() {
  // -------------------- Contexts --------------------
  const { loggedStudents, gateStats } = use(DashboardCtx);
  //  End of contexts

  // -------------------- Variables --------------------
  const totalEntries = gateStats ? gateStats.total_entries : 0; // Total entries

  const rejectedEntries =
    loggedStudents &&
    loggedStudents.filter((stu) => stu.status === "denied").length; // Total rejected entries

  const enteredStudents =
    loggedStudents &&
    loggedStudents.filter((stu) => stu.status === "allowed").length; // Total entered students
  // End of variables

  // -------------------- Component structure --------------------
  return (
    // -------------------- Component structure --------------------
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {studentsCards.map((card) => (
        <Card key={card.id}>
          <div className="flex justify-between items-center">
            {/* Card details */}
            <div>
              {/* Card title */}
              <p className="text-neutral-500 text-[12px]">{card.title}</p>

              {/* Card total number */}
              <p className={`font-bold text-2xl ${card.textColor}`}>
                {card.id === 1
                  ? totalEntries
                  : card.id === 2
                  ? rejectedEntries
                  : enteredStudents}
              </p>
            </div>

            {/* Icon */}
            <div
              className={`text-lg ${card.iconColor} rounded-sm p-1 ${card.bgColor}`}
            >
              <FontAwesomeIcon icon={card.icon}></FontAwesomeIcon>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
