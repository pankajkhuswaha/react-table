/* eslint-disable react/prop-types */
import { usePagination, DOTS } from "./usePagination";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  const paginateitm = {
    padding: "0 12px",
    height: "32px",
    textAlign: "center",
    margin: "auto 4px",
    color: "rgba(0, 0, 0, 0.87)",
    display: "flex",
    boxSizing: "border-box",
    alignItems: "center",
    letterSpacing: "0.01071em",
    borderRadius: "16px",
    lineHeight: "1.43",
    fontSize: "18px",
    minWidth: "32px",
    marginTop: "4px",
  };

  return (
    <>
      <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
        <li
          onClick={onPrevious}
          style={{
            ...paginateitm,
            ...{
              backgroundColor:
                currentPage === 1 ? "transparent" : "rgba(0, 0, 0, 0.04)",
              cursor: currentPage === 1 ? "default" : "pointer",
              pointerEvents: currentPage === 1 ? "none" : "auto",
            },
          }}
        >
          <div className="py-1 text-sm rounded text-nowrap">
            {"<"}
          </div>
        </li>
        {paginationRange.map((pageNumber, i) => {
          if (pageNumber === DOTS) {
            return (
              <li
                key={i}
                style={{
                  ...paginateitm,
                  ...{
                    backgroundColor: "transparent",
                    cursor: "default",
                  },
                }}
              >
                &#8230;
              </li>
            );
          }

          // Render our Page Pills
          return (
            <li
              key={i}
              onClick={() => onPageChange(pageNumber)}
              style={{
                ...paginateitm,
                ...{
                  backgroundColor:
                    pageNumber === currentPage
                      ? "rgba(77, 9, 187, 0.08)"
                      : "transparent",
                  color:
                    pageNumber === currentPage ? "blue" : "rgba(0, 0, 0, 0.87)",
                  cursor: "pointer",
                },
              }}
            >
              {pageNumber}
            </li>
          );
        })}
        {/* Right Navigation arrow */}
        <li
          onClick={onNext}
          style={{
            ...paginateitm,
            ...{
              backgroundColor:
                currentPage === lastPage
                  ? "transparent"
                  : "rgba(0, 0, 0, 0.04)",
              cursor: currentPage === lastPage ? "default" : "pointer",
              pointerEvents: currentPage === lastPage ? "none" : "auto",
            },
          }}
        >
          <div className="py-1 text-sm rounded text-nowrap">
            {">"}
          </div>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
