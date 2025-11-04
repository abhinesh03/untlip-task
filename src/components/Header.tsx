import React, { useState } from 'react';
import { Calendar, Search, Bell } from 'lucide-react';

interface HeaderProps {
  onNotificationClick: () => void;
  onProfileClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNotificationClick, onProfileClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div className="flex items-center justify-between gap-3 sm:gap-4">
        {/* Date Display */}
        <div className="flex items-center gap-2 text-gray-600 flex-shrink-0">
          <Calendar size={18} className="text-purple-600 sm:w-5 sm:h-5" />
          <span className="font-medium text-sm sm:text-base whitespace-nowrap">October 19, 2021</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 sm:w-[18px] sm:h-[18px]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              placeholder="Search..."
              aria-label="Search"
              className="pl-9 pr-3 py-2 sm:pl-10 sm:pr-4 bg-gray-50 border border-gray-200 rounded-lg text-sm w-32 sm:w-48 md:w-56 lg:w-64 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Notification Bell */}
          <button 
            onClick={onNotificationClick}
            className="p-2 hover:bg-gray-100 rounded-lg relative transition-colors flex-shrink-0"
            aria-label="Notifications"
          >
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" aria-hidden="true"></span>
          </button>

          {/* Profile Avatar */}
          <button 
            onClick={onProfileClick}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center relative hover:shadow-lg transition-shadow flex-shrink-0"
            aria-label="Profile menu"
          >
            <span className="text-white font-medium text-sm">AB</span>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white text-white text-xs flex items-center justify-center font-medium">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;