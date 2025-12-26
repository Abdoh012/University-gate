import React from "react";

// Shadcn
import { Label } from "@/components/ui/label";
import { StudentFilter } from "./StudentFilter";

export default function StudentSearchInput({ children, options, onChange }) {
  // -------------------- Component Structure --------------------
  return (
    <div className="px-5">
      {/* Label */}
      <Label className="mb-3">{children}</Label>

      {/* Student Filter */}
      <StudentFilter onChange={onChange} options={options} />
    </div>
  );
}
