import React from 'react';

export type TimeFilterType = 'Daily' | 'Monthly';

interface TimeFilterProps {
  activeFilter: TimeFilterType;
  onFilterChange: (filter: TimeFilterType) => void;
}

const TimeFilter: React.FC<TimeFilterProps> = ({ activeFilter, onFilterChange }) => {
  const filters: TimeFilterType[] = ['Daily', 'Monthly'];

  return (
    <div className="flex gap-1 sm:gap-2 bg-white rounded-md sm:rounded-lg p-0.5 sm:p-1 border border-gray-200">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-colors ${
            activeFilter === filter 
              ? 'bg-purple-600 text-white' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TimeFilter;