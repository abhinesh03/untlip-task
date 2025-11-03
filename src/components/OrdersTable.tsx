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
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <Menu size={16} />
                Order ID
              </div>
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-orange-500" />
                Ordered Date
              </div>
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <Package size={16} className="text-blue-500" />
                Product Name
              </div>
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <DollarSign size={16} className="text-green-500" />
                Product Price
              </div>
            </th>
            <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <BarChart3 size={16} />
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
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {order.id}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {order.date}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {order.productName}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {order.price} USD
              </td>
              <td className="px-6 py-4">
                <span className={`flex items-center gap-2 text-sm font-medium ${getStatusColor(order.status)}`}>
                  <div className={`w-2 h-2 rounded-full ${getStatusBgColor(order.status)}`}></div>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;