import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type TabType = 'All Orders' | 'Pending Orders' | 'Delivered Orders' | 'Booked Orders' | 'Cancelled Orders';

interface TabsProps {
  tabs: TabType[];
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onTabChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleTabChange = (tab: TabType) => {
    onTabChange(tab);
    setIsDropdownOpen(false);
  };

  return (
    <div className="border-b border-gray-200">
      {/* Desktop/Tablet View - Horizontal Tabs */}
      <div className="hidden md:flex gap-4 lg:gap-8 px-4 sm:px-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`py-3 lg:py-4 text-xs lg:text-sm font-medium border-b-2 transition-colors whitespace-nowrap flex-shrink-0 ${
              activeTab === tab
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mobile View - Dropdown */}
      <div className="md:hidden px-4 py-3 relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <span className="text-purple-600">{activeTab}</span>
          <ChevronDown 
            size={18} 
            className={`text-gray-400 transition-transform duration-200 ${
              isDropdownOpen ? 'rotate-180' : ''
            }`} 
          />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 z-10"
              onClick={() => setIsDropdownOpen(false)}
            />
            
            {/* Dropdown Content */}
            <div className="absolute top-full left-4 right-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 overflow-hidden">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-purple-50 text-purple-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;