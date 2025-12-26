// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileHeader() {
  return (
    <div className="flex items-center gap-2 w-full bg-white rounded-sm p-3 sm:p-5 shadow-sm sm:shadow-md ms-0 sm:ms-10 flex-wrap">
      {/* Icon */}
      <div className="bg-[var(--mainColor)] flex justify-center items-center p-1 sm:p-2 rounded-sm">
        <FontAwesomeIcon
          className="text-white text-lg"
          icon="fa-solid fa-shield-halved"
        />
      </div>

      {/* Title */}
      <div className="capitalize min-w-0">
        <p className="font-semibold text-sm sm:text-base truncate">
          University access control
        </p>
        <p className="text-neutral-400 text-[11px] sm:text-[12px] truncate">
          admin dashboard
        </p>
      </div>
    </div>
  );
}
