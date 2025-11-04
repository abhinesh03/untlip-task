
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import TimeFilter, { type TimeFilterType } from './components/TimeFilter';
import Tabs, { type TabType } from './components/Tabs';
import OrdersTable, { type Order } from './components/OrdersTable';

// Mock Data
const ordersData: Order[] = [
  { id: '#123245', date: '14-12-2020', productName: 'Decorative box', price: 125, status: 'Delivered' },
  { id: '#678457', date: '13-12-2020', productName: 'Plantation box', price: 120, status: 'Cancelled' },
  { id: '#123245', date: '12-12-2020', productName: 'Camera film', price: 156, status: 'Delivered' },
  { id: '#123245', date: '12-12-2020', productName: 'Camera film', price: 156, status: 'Delivered' },
  { id: '#87245', date: '10-12-2020', productName: 'Visual lace', price: 125, status: 'Delivered' },
  { id: '#273245', date: '11-11-2020', productName: 'Decorative box', price: 180, status: 'Pending' },
  { id: '#789245', date: '10-11-2020', productName: 'Decorative box', price: 190, status: 'Delivered' },
];

const App: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState('orders');
  const [activeTab, setActiveTab] = useState<TabType>('All Orders');
  const [timeFilter, setTimeFilter] = useState<TimeFilterType>('Daily');

  const tabs: TabType[] = [
    'All Orders', 
    'Pending Orders', 
    'Delivered Orders', 
    'Booked Orders', 
    'Cancelled Orders'
  ];

  // Event Handlers
  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    console.log(`Navigated to: ${menu}`);
    alert(`Navigating to ${menu.charAt(0).toUpperCase() + menu.slice(1)}`);
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      alert('Logging out...');
      console.log('User logged out');
    }
  };

  const handleNotificationClick = () => {
    alert('You have 3 new notifications!');
  };

  const handleProfileClick = () => {
    alert('Opening profile menu...');
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    console.log(`Active tab changed to: ${tab}`);
  };

  const handleFilterChange = (filter: TimeFilterType) => {
    setTimeFilter(filter);
    console.log(`Time filter changed to: ${filter}`);
  };

  const handleOrderClick = (order: Order) => {
    alert(
      `Order Details:\n\n` +
      `Order ID: ${order.id}\n` +
      `Date: ${order.date}\n` +
      `Product: ${order.productName}\n` +
      `Price: $${order.price}\n` +
      `Status: ${order.status}`
    );
  };

  const handleStatsCardClick = (title: string, value: number) => {
    alert(`${title}: ${value} orders`);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        activeMenu={activeMenu} 
        onMenuClick={handleMenuClick}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <Header 
          onNotificationClick={handleNotificationClick}
          onProfileClick={handleProfileClick}
        />

        <div className="p-8">
          {/* Title and Time Filter */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              Orders 
              <span className="text-3xl">😍</span>
            </h1>
            <TimeFilter 
              activeFilter={timeFilter} 
              onFilterChange={handleFilterChange} 
            />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <StatsCard
              title="New Orders"
              value={245}
              impression={20}
              trending="up"
              bgColor="bg-blue-50"
              textColor="text-blue-600"
              onClick={() => handleStatsCardClick('New Orders', 245)}
            />
            <StatsCard
              title="Pending Orders"
              value={123}
              impression={11}
              trending="down"
              bgColor="bg-purple-50"
              textColor="text-purple-600"
              onClick={() => handleStatsCardClick('Pending Orders', 123)}
            />
            <StatsCard
              title="Delivered Orders"
              value={150}
              impression={18}
              trending="up"
              bgColor="bg-orange-50"
              textColor="text-orange-600"
              onClick={() => handleStatsCardClick('Delivered Orders', 150)}
            />
          </div>

          {/* Orders Table with Tabs */}
          <div className="bg-white rounded-2xl shadow-sm">
            <Tabs 
              tabs={tabs} 
              activeTab={activeTab} 
              onTabChange={handleTabChange} 
            />
            <OrdersTable 
              orders={ordersData} 
              onOrderClick={handleOrderClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
