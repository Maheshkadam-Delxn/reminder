"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { 
  ClipboardList, 
  Bell, 
  ChevronLeft, 
  ChevronRight,
  Home,
  LogOut
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      name: 'Dashboard',
      icon: Home,
      path: '/user',
      active: pathname === '/user'
    },
    {
      name: 'Compliance',
      icon: ClipboardList,
      path: '/user/compliance',
      active: pathname === '/user/compliance'
    }
  ];

  const handleLogout = () => {
    // Here you would typically clear authentication tokens or user session
    router.push('/');
  };

  return (
    <div className={`bg-gray-900 text-white h-screen transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } fixed left-0 top-0 z-50 flex flex-col`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!isCollapsed && (
          <h2 className="text-xl font-bold text-blue-400">User Compliance</h2>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex-1">
        {menuItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center px-4 py-3 mx-2 rounded-lg transition-colors ${
                item.active
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <IconComponent size={20} />
              {!isCollapsed && (
                <span className="ml-3 font-medium">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className={`flex items-center w-full px-4 py-3 mx-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors`}
        >
          <LogOut size={20} />
          {!isCollapsed && (
            <span className="ml-3 font-medium">Logout</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;