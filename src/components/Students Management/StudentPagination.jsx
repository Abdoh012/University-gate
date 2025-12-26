// Shadcn Pagination
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";

export function StudentPagination({
  totalPages,
  handlePrevBtn,
  handleNextBtn,
  handlePageClick,
  page,
}) {
  // -------------------- Component Structure --------------------
  return (
    <Pagination className="my-8">
      <PaginationContent className="flex justify-center gap-2">
        {/* Previous Button */}
        <PaginationItem>
          <button
            onClick={handlePrevBtn}
            disabled={page === 1}
            className="h-9 px-3 rounded-md border text-sm font-medium
              disabled:opacity-50 disabled:pointer-events-none
              hover:bg-neutral-200 duration-300 cursor-pointer"
          >
            Prev
          </button>
        </PaginationItem>

        {/* Pages */}
        {Array.from({ length: totalPages }).map((_, i) => {
          const pageNumber = i + 1;
          const isActive = page === pageNumber;

          return (
            <PaginationItem key={pageNumber}>
              <button
                onClick={() => handlePageClick(i)}
                className={`h-9 min-w-9 px-3 rounded-md text-sm font-medium border cursor-pointer
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-neutral-200 duration-300 hover:text-accent-foreground"
                  }`}
              >
                {pageNumber}
              </button>
            </PaginationItem>
          );
        })}

        {/* Next Button */}
        <PaginationItem>
          <button
            onClick={handleNextBtn}
            disabled={page === totalPages}
            className="h-9 px-3 rounded-md border text-sm font-medium
              disabled:opacity-50 disabled:pointer-events-none
              hover:bg-neutral-200 duration-300 cursor-pointer"
          >
            Next
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
