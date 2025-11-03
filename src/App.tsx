// import React, { useState } from 'react';
// import { 
//   LayoutDashboard, 
//   ShoppingBag, 
//   Users, 
//   BarChart3, 
//   DollarSign, 
//   HelpCircle, 
//   MessageSquare, 
//   LogOut,
//   Calendar,
//   Search,
//   Bell,
//   Menu,
//   Package,
//   TrendingUp,
//   TrendingDown
// } from 'lucide-react';

// interface Order {
//   id: string;
//   date: string;
//   productName: string;
//   price: number;
//   status: 'Delivered' | 'Cancelled' | 'Pending';
// }

// const orders: Order[] = [
//   { id: '#123245', date: '14-12-2020', productName: 'Decorative box', price: 125, status: 'Delivered' },
//   { id: '#678457', date: '13-12-2020', productName: 'Plantation box', price: 120, status: 'Cancelled' },
//   { id: '#123245', date: '12-12-2020', productName: 'Camera film', price: 156, status: 'Delivered' },
//   { id: '#123245', date: '12-12-2020', productName: 'Camera film', price: 156, status: 'Delivered' },
//   { id: '#87245', date: '10-12-2020', productName: 'Visual lace', price: 125, status: 'Delivered' },
//   { id: '#273245', date: '11-11-2020', productName: 'Decorative box', price: 180, status: 'Pending' },
//   { id: '#789245', date: '10-11-2020', productName: 'Decorative box', price: 190, status: 'Delivered' },
// ];

// type TabType = 'All Orders' | 'Pending Orders' | 'Delivered Orders' | 'Booked Orders' | 'Cancelled Orders';

// const OrdersDashboard: React.FC = () => {
//   const [activeTab, setActiveTab] = useState<TabType>('All Orders');
//   const [timeFilter, setTimeFilter] = useState<'Daily' | 'Monthly'>('Daily');

//   const tabs: TabType[] = ['All Orders', 'Pending Orders', 'Delivered Orders', 'Booked Orders', 'Cancelled Orders'];

//   const getStatusColor = (status: Order['status']) => {
//     switch (status) {
//       case 'Delivered':
//         return 'text-green-600';
//       case 'Cancelled':
//         return 'text-red-600';
//       case 'Pending':
//         return 'text-yellow-600';
//       default:
//         return 'text-gray-600';
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
//         <div className="p-6">
//           <div className="flex items-center gap-2">
//             <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
//               <div className="w-4 h-4 bg-white rounded-full"></div>
//             </div>
//             <span className="text-xl font-bold">untlip</span>
//           </div>
//         </div>

//         <nav className="flex-1 px-3">
//           <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg mb-1">
//             <LayoutDashboard size={20} />
//             <span className="text-sm">Dashboard</span>
//           </button>
          
//           <button className="w-full flex items-center gap-3 px-4 py-3 bg-purple-600 text-white rounded-lg mb-1">
//             <ShoppingBag size={20} />
//             <span className="text-sm font-medium">Orders</span>
//           </button>

//           <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg mb-1">
//             <Users size={20} />
//             <span className="text-sm">Clients</span>
//           </button>

//           <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg mb-1">
//             <BarChart3 size={20} />
//             <span className="text-sm">Statistics</span>
//           </button>

//           <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg mb-1">
//             <DollarSign size={20} />
//             <span className="text-sm">Finance</span>
//           </button>

//           <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg mb-1">
//             <HelpCircle size={20} />
//             <span className="text-sm">FAQ</span>
//           </button>

//           <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg mb-1">
//             <MessageSquare size={20} />
//             <span className="text-sm">Support</span>
//           </button>
//         </nav>

//         <div className="p-3">
//           <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl p-4 mb-4">
//             <div className="w-24 h-24 mx-auto mb-3">
//               <img src="https://img.icons8.com/3d-fluency/94/person-female.png" alt="avatar" className="w-full h-full" />
//             </div>
//             <h3 className="text-sm font-semibold mb-1">Upgrade</h3>
//             <p className="text-sm mb-2">your plan →</p>
//           </div>

//           <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">
//             <LogOut size={20} />
//             <span className="text-sm">Log Out</span>
//           </button>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 overflow-auto">
//         {/* Header */}
//         <header className="bg-white border-b border-gray-200 px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2 text-gray-600">
//               <Calendar size={20} className="text-purple-600" />
//               <span className="font-medium">October 19, 2021</span>
//             </div>

//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search by date, name or ID..."
//                   className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm w-72 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 />
//               </div>
//               <button className="p-2 hover:bg-gray-100 rounded-lg relative">
//                 <Bell size={20} className="text-gray-600" />
//                 <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//               </button>
//               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center relative">
//                 <span className="text-white font-medium text-sm">AB</span>
//                 <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white text-white text-xs flex items-center justify-center">3</span>
//               </div>
//             </div>
//           </div>
//         </header>

//         <div className="p-8">
//           {/* Title and Filters */}
//           <div className="flex items-center justify-between mb-6">
//             <h1 className="text-3xl font-bold flex items-center gap-2">
//               Orders 
//               <span className="text-3xl">😍</span>
//             </h1>
//             <div className="flex gap-2 bg-white rounded-lg p-1 border border-gray-200">
//               <button
//                 onClick={() => setTimeFilter('Daily')}
//                 className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
//                   timeFilter === 'Daily' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 Daily
//               </button>
//               <button
//                 onClick={() => setTimeFilter('Monthly')}
//                 className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
//                   timeFilter === 'Monthly' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-50'
//                 }`}
//               >
//                 Monthly
//               </button>
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-3 gap-6 mb-6">
//             <div className="bg-blue-50 rounded-2xl p-6">
//               <h3 className="text-gray-600 text-sm font-medium mb-2">New Orders</h3>
//               <div className="flex items-center gap-4">
//                 <span className="text-4xl font-bold text-blue-600">245</span>
//                 <div className="flex items-center gap-1 text-sm">
//                   <span className="text-gray-600">Impression · 20%</span>
//                   <TrendingUp size={16} className="text-green-600" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-purple-50 rounded-2xl p-6">
//               <h3 className="text-gray-600 text-sm font-medium mb-2">Pending Orders</h3>
//               <div className="flex items-center gap-4">
//                 <span className="text-4xl font-bold text-purple-600">123</span>
//                 <div className="flex items-center gap-1 text-sm">
//                   <span className="text-gray-600">Impression · 11%</span>
//                   <TrendingDown size={16} className="text-red-600" />
//                 </div>
//               </div>
//             </div>

//             <div className="bg-orange-50 rounded-2xl p-6">
//               <h3 className="text-gray-600 text-sm font-medium mb-2">Delivered Orders</h3>
//               <div className="flex items-center gap-4">
//                 <span className="text-4xl font-bold text-orange-600">150</span>
//                 <div className="flex items-center gap-1 text-sm">
//                   <span className="text-gray-600">Impression · 18%</span>
//                   <TrendingUp size={16} className="text-green-600" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Tabs */}
//           <div className="bg-white rounded-2xl shadow-sm">
//             <div className="border-b border-gray-200">
//               <div className="flex gap-8 px-6">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`py-4 text-sm font-medium border-b-2 transition-colors ${
//                       activeTab === tab
//                         ? 'border-purple-600 text-purple-600'
//                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Table */}
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="border-b border-gray-200">
//                     <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
//                       <div className="flex items-center gap-2">
//                         <Menu size={16} />
//                         Order ID
//                       </div>
//                     </th>
//                     <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
//                       <div className="flex items-center gap-2">
//                         <Calendar size={16} className="text-orange-500" />
//                         Ordered Date
//                       </div>
//                     </th>
//                     <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
//                       <div className="flex items-center gap-2">
//                         <Package size={16} className="text-blue-500" />
//                         Product Name
//                       </div>
//                     </th>
//                     <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
//                       <div className="flex items-center gap-2">
//                         <DollarSign size={16} className="text-green-500" />
//                         Product Price
//                       </div>
//                     </th>
//                     <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
//                       <div className="flex items-center gap-2">
//                         <BarChart3 size={16} />
//                         Status
//                       </div>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {orders.map((order, index) => (
//                     <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
//                       <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
//                       <td className="px-6 py-4 text-sm text-gray-600">{order.date}</td>
//                       <td className="px-6 py-4 text-sm text-gray-600">{order.productName}</td>
//                       <td className="px-6 py-4 text-sm text-gray-600">{order.price} USD</td>
//                       <td className="px-6 py-4">
//                         <span className={`flex items-center gap-2 text-sm font-medium ${getStatusColor(order.status)}`}>
//                           <div className={`w-2 h-2 rounded-full ${
//                             order.status === 'Delivered' ? 'bg-green-600' :
//                             order.status === 'Cancelled' ? 'bg-red-600' : 'bg-yellow-600'
//                           }`}></div>
//                           {order.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default OrdersDashboard;

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
