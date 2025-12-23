import { studentsCards } from "@/util/stdentsCards";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { use } from "react";
import { DashboardCtx } from "../contexts/DashboardCtx";

export default function StatsCards() {
  // -------------------- Contexts --------------------
  const { loggedStudents, gateStats } = use(DashboardCtx);
  //  End of contexts

  // -------------------- Variables --------------------
  const totalEntries = gateStats ? gateStats.total_entries : "Loading";

  const rejectedEntries = loggedStudents
    ? loggedStudents.filter((stu) => stu.status === "denied").length
    : "Loading";

  const enteredStudents = loggedStudents
    ? loggedStudents.filter((stu) => stu.status === "allowed").length
    : "Loading";

  // End of variables

  // -------------------- Component structure --------------------
  return (
    <div className="flex justify-between items-center">
      {studentsCards.map((card) => (
        <Card key={card.id}>
          <div className="flex justify-between items-center gap-40 p-5">
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
              {/* <p
              className={`${
                card.percentage[0] === "u" ? "text-red-500" : "text-green-500"
              }`}
            >
              {card.percentage}
            </p> */}
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
