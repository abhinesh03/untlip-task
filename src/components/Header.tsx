import React, { useState } from 'react';
import { Calendar, Search, Bell } from 'lucide-react';

interface HeaderProps {
  onNotificationClick: () => void;
  onProfileClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNotificationClick, onProfileClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Date Display */}
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={20} className="text-purple-600" />
          <span className="font-medium">October 19, 2021</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by date, name or ID..."
              className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm w-72 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </form>

          {/* Notification Bell */}
          <button 
            onClick={onNotificationClick}
            className="p-2 hover:bg-gray-100 rounded-lg relative transition-colors"
          >
            <Bell size={20} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Avatar */}
          <button 
            onClick={onProfileClick}
            className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center relative hover:shadow-lg transition-shadow"
          >
            <span className="text-white font-medium text-sm">AB</span>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;