import React from 'react';
import { 
  Search, 
  Plus, 
  Monitor, 
  ChevronDown, 
  Maximize2, 
  Mail, 
  Bell,
  Settings
} from 'lucide-react';

const AdminHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      {/* Left Section - Search */}
      <div className="flex items-center">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-72 pl-10 pr-16 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <kbd className="inline-flex items-center px-2 py-1 border border-gray-200 rounded text-xs font-medium bg-gray-50 text-gray-500">
              ⌘K
            </kbd>
          </div>
        </div>
      </div>

      {/* Right Section - Actions and Profile */}
      <div className="flex items-center space-x-3">
        {/* Store Selector */}
        <div className="flex items-center space-x-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
          <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <span className="text-sm font-medium text-gray-700">Freshmart</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>

        {/* Add New Button */}
        <button className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
          <Plus className="h-4 w-4" />
          <span className="text-sm font-medium">Add New</span>
        </button>

        {/* POS Button */}
        <button className="flex items-center space-x-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors">
          <Monitor className="h-4 w-4" />
          <span className="text-sm font-medium">POS</span>
        </button>

        {/* US Flag */}
        <div className="w-8 h-6 rounded overflow-hidden cursor-pointer">
          <div className="w-full h-full bg-gradient-to-r from-red-500 via-white to-blue-500 flex items-center justify-center">
            <span className="text-xs">🇺🇸</span>
          </div>
        </div>

        {/* Maximize Button */}
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Maximize2 className="h-4 w-4" />
        </button>

        {/* Mail Icon */}
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Mail className="h-4 w-4" />
        </button>

        {/* Notification Bell with Badge */}
        <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
            1
          </span>
        </button>

        {/* Settings */}
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings className="h-4 w-4" />
        </button>

        {/* Profile Avatar */}
        <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;