import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  BarChart3, 
  DollarSign, 
  HelpCircle, 
  MessageSquare, 
  LogOut,
  Menu,
  X
} from 'lucide-react';

interface MenuItem {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
}

interface SidebarProps {
  activeMenu: string;
  onMenuClick: (menu: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, onMenuClick, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'orders', icon: ShoppingBag, label: 'Orders' },
    { id: 'clients', icon: Users, label: 'Clients' },
    { id: 'statistics', icon: BarChart3, label: 'Statistics' },
    { id: 'finance', icon: DollarSign, label: 'Finance' },
    { id: 'faq', icon: HelpCircle, label: 'FAQ' },
    { id: 'support', icon: MessageSquare, label: 'Support' },
  ];

  const handleMenuClick = (menuId: string) => {
    onMenuClick(menuId);
    setIsMobileMenuOpen(false);
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="p-4 lg:p-6 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold">untlip</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${
                isActive
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon size={20} className="flex-shrink-0" />
              <span className={`text-sm ${isActive ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="p-3 border-t border-gray-100">
        <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-2xl p-4 mb-3 cursor-pointer hover:shadow-md transition-shadow">
          <div className="w-20 h-20 mx-auto mb-3">
            <img 
              src="https://img.icons8.com/3d-fluency/94/person-female.png" 
              alt="Upgrade avatar" 
              className="w-full h-full" 
            />
          </div>
          <h3 className="text-sm font-semibold mb-1">Upgrade</h3>
          <p className="text-sm text-gray-700">your plan →</p>
        </div>

        <button 
          onClick={() => {
            onLogout();
            setIsMobileMenuOpen(false);
          }}
          className="w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button - Fixed at top left */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200"
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - Desktop: Always visible, Mobile: Slide in */}
      <aside 
        className={`fixed lg:relative top-0 left-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-40 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <SidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;