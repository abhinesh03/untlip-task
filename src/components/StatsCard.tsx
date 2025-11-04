import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  impression: number;
  trending: 'up' | 'down';
  bgColor: string;
  textColor: string;
  onClick?: () => void;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  impression, 
  trending, 
  bgColor, 
  textColor,
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`${bgColor} rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 cursor-pointer hover:shadow-lg transition-shadow`}
    >
      <h3 className="text-gray-600 text-xs sm:text-sm font-medium mb-2 sm:mb-2.5 lg:mb-3">{title}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 lg:gap-4">
        <span className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${textColor}`}>{value}</span>
        <div className="flex items-center gap-1 text-xs sm:text-sm">
          <span className="text-gray-600">Impression · {impression}%</span>
          {trending === 'up' ? (
            <TrendingUp size={14} className="text-green-600 sm:w-4 sm:h-4" />
          ) : (
            <TrendingDown size={14} className="text-red-600 sm:w-4 sm:h-4" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;