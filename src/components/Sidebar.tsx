import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  BarChart3, 
  DollarSign, 
  HelpCircle, 
  MessageSquare, 
  LogOut,
  type LucideIcon
} from 'lucide-react';

interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
}

interface SidebarProps {
  activeMenu: string;
  onMenuClick: (menu: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, onMenuClick, onLogout }) => {
  const menuItems: MenuItem[] = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'orders', icon: ShoppingBag, label: 'Orders' },
    { id: 'clients', icon: Users, label: 'Clients' },
    { id: 'statistics', icon: BarChart3, label: 'Statistics' },
    { id: 'finance', icon: DollarSign, label: 'Finance' },
    { id: 'faq', icon: HelpCircle, label: 'FAQ' },
    { id: 'support', icon: MessageSquare, label: 'Support' },
  ];

  return (
    <aside className="w-56 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold">untlip</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onMenuClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon size={20} />
              <span className={`text-sm ${isActive ? 'font-medium' : ''}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-3">
        <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl p-4 mb-4 cursor-pointer hover:shadow-md transition-shadow">
          <div className="w-24 h-24 mx-auto mb-3">
            <img 
              src="https://img.icons8.com/3d-fluency/94/person-female.png" 
              alt="avatar" 
              className="w-full h-full" 
            />
          </div>
          <h3 className="text-sm font-semibold mb-1">Upgrade</h3>
          <p className="text-sm mb-2">your plan →</p>
        </div>

        <button 
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span className="text-sm">Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;