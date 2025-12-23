// Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  // -------------------- Component structure --------------------
  return (
    <>
      {/* Top auth page section */}
      <div className="top flex flex-col items-center justify-center gap-2 mb-[var(--mainMargin)]">
        {/* Icon */}
        <div className="w-15 h-15 rounded-full flex items-center justify-center bg-[var(--mainColor)]">
          <FontAwesomeIcon
            className="text-white"
            icon="fa-solid fa-graduation-cap"
          />
        </div>

        {/* title */}
        <div>
          <h2 className="font-bold text-center text-3xl">University Access</h2>
        </div>

        {/* description */}
        <div>
          <p>Administrator Portal</p>
        </div>
      </div>
    </>
  );
}
