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
      className={`${bgColor} rounded-2xl p-6 cursor-pointer hover:shadow-lg transition-shadow`}
    >
      <h3 className="text-gray-600 text-sm font-medium mb-2">{title}</h3>
      <div className="flex items-center gap-4">
        <span className={`text-4xl font-bold ${textColor}`}>{value}</span>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-gray-600">Impression · {impression}%</span>
          {trending === 'up' ? (
            <TrendingUp size={16} className="text-green-600" />
          ) : (
            <TrendingDown size={16} className="text-red-600" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;