import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  // -------------------- Component structure --------------------
  return (
    <div>
      {/* Footer text */}
      <div className="flex gap-2 p-5 w-full max-w-md rounded-sm text-sm bg-blue-100 text-[var(--mainColor)] mb-[var(--mainMargin)]">
        <div>
          <FontAwesomeIcon
            className="text-[var(--mainColor)]"
            icon="fa-solid fa-shield-halved"
          />
        </div>
        <div>Secure administrator access to gate management system</div>
      </div>

      {/* Copyright */}
      <div className="capitalize text-neutral-500 text-sm text-center">&copy; 2025 university access control system. all rights reserved</div>
    </div>
  );
}
