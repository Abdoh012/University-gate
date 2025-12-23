// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProfileHeader() {
  return (
    <div className="flex gap-2 w-full shadow-md p-5 rounded-sm ms-10">
      {/* Icon */}
      <div className="bg-[var(--mainColor)] flex justify-center items-center p-1 rounded-sm">
        <FontAwesomeIcon
          className="text-white text-lg"
          icon="fa-solid fa-shield-halved"
        />
      </div>

      {/* Title */}
      <div className="capitalize">
        <p className="font-semibold">University access control</p>
        <p className="text-neutral-400 text-[12px]">admin dashboard</p>
      </div>
    </div>
  );
}
