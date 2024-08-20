import React, { useState } from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const [visiblePages, setVisiblePages] = useState(getInitialVisiblePages());

  function getInitialVisiblePages() {
    // Calculates the initial set of visible pages
    return Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1);
  }

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleVisiblePages = (page) => {
    // Adjusts visible pages based on current page
    if (page < 1 || page > totalPages) return;
    let start = Math.max(page - 2, 1);
    let end = Math.min(page + 2, totalPages);

    // Adjust if the visible pages range is less than 5
    if (end - start < 4) {
      if (start === 1) end = Math.min(start + 4, totalPages);
      else if (end === totalPages) start = Math.max(end - 4, 1);
    }

    setVisiblePages(Array.from({ length: end - start + 1 }, (_, i) => start + i));
  };

  React.useEffect(() => {
    handleVisiblePages(currentPage);
  }, [currentPage]);

  return (
    <div className="flex items-center justify-center mt-4">
      <button
        onClick={handlePrev}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-4 py-2 rounded-md ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
};

export default Pagination;
