export default function StudentsHeader() {
  // -------------------- Component Structure --------------------
  return (
    <div className="my-[var(--mainMargin)] flex flex-col sm:flex-row gap-3">
      {/* Add student manually */}
      <button className="py-2 px-4 rounded-sm text-white cursor-pointer hover:opacity-90 duration-300 bg-blue-500 w-full sm:w-auto">
        + Add Student Manually
      </button>

      {/* Import from excel */}
      <button className="py-2 px-4 rounded-sm text-white cursor-pointer hover:opacity-90 duration-300 bg-green-500 w-full sm:w-auto">
        Import Via Excel
      </button>
    </div>
  );
}
