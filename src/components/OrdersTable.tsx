import React from 'react';
import { Menu, Calendar, Package, DollarSign, BarChart3 } from 'lucide-react';

export interface Order {
  id: string;
  date: string;
  productName: string;
  price: number;
  status: 'Delivered' | 'Cancelled' | 'Pending';
}

interface OrdersTableProps {
  orders: Order[];
  onOrderClick: (order: Order) => void;
}

const OrdersTable: React.FC<OrdersTableProps> = ({ orders, onOrderClick }) => {
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-600';
      case 'Cancelled':
        return 'text-red-600';
      case 'Pending':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusBgColor = (status: Order['status']) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-600';
      case 'Cancelled':
        return 'bg-red-600';
      case 'Pending':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <>
      {/* Desktop Table View (hidden on mobile) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-3 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-medium text-gray-600">
                <div className="flex items-center gap-1 lg:gap-2">
                  <Menu size={14} className="lg:w-4 lg:h-4" />
                  <span className="hidden lg:inline">Order ID</span>
                  <span className="lg:hidden">ID</span>
                </div>
              </th>
              <th className="px-3 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-medium text-gray-600">
                <div className="flex items-center gap-1 lg:gap-2">
                  <Calendar size={14} className="text-orange-500 lg:w-4 lg:h-4" />
                  <span className="hidden lg:inline">Ordered Date</span>
                  <span className="lg:hidden">Date</span>
                </div>
              </th>
              <th className="px-3 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-medium text-gray-600">
                <div className="flex items-center gap-1 lg:gap-2">
                  <Package size={14} className="text-blue-500 lg:w-4 lg:h-4" />
                  <span className="hidden lg:inline">Product Name</span>
                  <span className="lg:hidden">Product</span>
                </div>
              </th>
              <th className="px-3 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-medium text-gray-600">
                <div className="flex items-center gap-1 lg:gap-2">
                  <DollarSign size={14} className="text-green-500 lg:w-4 lg:h-4" />
                  <span className="hidden lg:inline">Product Price</span>
                  <span className="lg:hidden">Price</span>
                </div>
              </th>
              <th className="px-3 lg:px-6 py-3 lg:py-4 text-left text-xs lg:text-sm font-medium text-gray-600">
                <div className="flex items-center gap-1 lg:gap-2">
                  <BarChart3 size={14} className="lg:w-4 lg:h-4" />
                  Status
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr 
                key={index} 
                onClick={() => onOrderClick(order)}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-gray-600">
                  {order.date}
                </td>
                <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-gray-600">
                  {order.productName}
                </td>
                <td className="px-3 lg:px-6 py-3 lg:py-4 text-xs lg:text-sm text-gray-600">
                  {order.price} USD
                </td>
                <td className="px-3 lg:px-6 py-3 lg:py-4">
                  <span className={`flex items-center gap-1 lg:gap-2 text-xs lg:text-sm font-medium ${getStatusColor(order.status)}`}>
                    <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full ${getStatusBgColor(order.status)}`}></div>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View (visible only on mobile) */}
      <div className="md:hidden space-y-3">
        {orders.map((order, index) => (
          <div 
            key={index}
            onClick={() => onOrderClick(order)}
            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Menu size={14} className="text-gray-400" />
                <span className="font-semibold text-sm text-gray-900">{order.id}</span>
              </div>
              <span className={`flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(order.status)} bg-opacity-10`}>
                <div className={`w-1.5 h-1.5 rounded-full ${getStatusBgColor(order.status)}`}></div>
                {order.status}
              </span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Calendar size={14} className="text-orange-500" />
                <span>{order.date}</span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Package size={14} className="text-blue-500" />
                <span className="flex-1 truncate">{order.productName}</span>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <DollarSign size={14} className="text-green-500" />
                <span className="font-medium">{order.price} USD</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OrdersTable;