// src/components/common/Header.jsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, DollarSign, Target, Bell, MessageSquare, User, Settings, LogOut } from 'lucide-react';

const Header = ({ user }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/dashboard' },
    { id: 'budget', label: 'Budget', icon: DollarSign, path: '/budget' },
    { id: 'goals', label: 'Goals', icon: Target, path: '/goals' },
    { id: 'bills', label: 'Bills', icon: Bell, path: '/bills' },
    { id: 'chat', label: 'Chat', icon: MessageSquare, path: '/chat' }
  ];

  const notifications = [
    { id: 1, text: 'Netflix subscription renews tomorrow', time: '1h ago', unread: true },
    { id: 2, text: 'You exceeded your transportation budget', time: '3h ago', unread: true },
    { id: 3, text: 'Monthly report is ready', time: '1d ago', unread: false }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-6 pb-4">
      <nav className="max-w-5xl mx-auto bg-black/40 backdrop-blur-xl rounded-full shadow-2xl border border-white/10 px-8 py-2">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/')}
          >
            <img 
              src="/Aureon_logo.png" 
              alt="Aureon Logo" 
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => navigate(item.path)}
                    className={`p-3 rounded-full transition-all duration-300 ${
                      active 
                        ? 'bg-emerald-500/20 text-emerald-400' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={22} className={active ? 'stroke-[2.5]' : ''} />
                  </button>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-black/90 backdrop-blur-md text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/10">
                    {item.label}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-l border-t border-white/10"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* User Menu - Right (Original Feature) */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-3 rounded-full hover:bg-white/10 transition-all duration-300 relative text-white/70 hover:text-white"
              >
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden animate-[slideDown_0.3s_ease-out]">
                  <div className="p-4 border-b border-white/10">
                    <h3 className="font-semibold text-white">Notifications</h3>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notif => (
                      <div
                        key={notif.id}
                        className={`p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors duration-300 ${
                          notif.unread ? 'bg-emerald-500/5' : ''
                        }`}
                      >
                        <p className="text-sm text-white">{notif.text}</p>
                        <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 text-center border-t border-white/10">
                    <button className="text-sm text-emerald-400 hover:text-emerald-300 font-medium transition-colors duration-300">
                      View All
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="flex items-center space-x-2 p-2 pr-4 rounded-full hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-medium">
                    {user?.name?.charAt(0) || 'E'}
                  </span>
                </div>
                <span className="text-sm font-medium text-white hidden md:block">
                  {user?.name?.split(' ')[0] || 'Azhaan'}
                </span>
              </button>

              {showMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden animate-[slideDown_0.3s_ease-out]">
                  <div className="p-4 border-b border-white/10">
                    <p className="font-medium text-white">{user?.name || 'Azhaan Johnson'}</p>
                    <p className="text-sm text-gray-400">{user?.email || 'Azhaan@email.com'}</p>
                  </div>
                  <div className="py-2">
                    <button className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10 flex items-center space-x-2 transition-colors duration-300">
                      <User size={16} />
                      <span>Profile</span>
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-white hover:bg-white/10 flex items-center space-x-2 transition-colors duration-300">
                      <Settings size={16} />
                      <span>Settings</span>
                    </button>
                  </div>
                  <div className="border-t border-white/10">
                    <button className="w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-red-500/10 flex items-center space-x-2 transition-colors duration-300">
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;