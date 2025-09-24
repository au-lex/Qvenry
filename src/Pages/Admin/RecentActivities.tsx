import React from 'react';
import { ChevronDown, AlertTriangle } from 'lucide-react';

// Mock data for the RecentActivity
const topSellingProducts = [
  {
    id: 1,
    name: "Charger Cable - Lighting",
    price: 187,
    sales: "247+ Sales",
    image: "🔌",
    change: 25,
    bgColor: "bg-orange-100",
    iconBg: "bg-orange-500"
  },
  {
    id: 2,
    name: "Yves Saint Eau De Parfum",
    price: 145,
    sales: "289+ Sales",
    image: "🌹",
    change: 25,
    bgColor: "bg-red-100",
    iconBg: "bg-red-500"
  },
  {
    id: 3,
    name: "Apple Airpods 2",
    price: 458,
    sales: "300+ Sales",
    image: "🎧",
    change: 25,
    bgColor: "bg-green-100",
    iconBg: "bg-green-600"
  },
  {
    id: 4,
    name: "Vacuum Cleaner",
    price: 139,
    sales: "225+ Sales",
    image: "🧹",
    change: -21,
    bgColor: "bg-purple-100",
    iconBg: "bg-purple-600"
  },
  {
    id: 5,
    name: "Samsung Galaxy S21 Fe 5g",
    price: 898,
    sales: "365+ Sales",
    image: "📱",
    change: 25,
    bgColor: "bg-gray-100",
    iconBg: "bg-gray-600"
  }
];

const lowStockProducts = [
  {
    id: 1,
    name: "Dell XPS 13",
    productId: "#665814",
    stock: 8,
    image: "💻",
    bgColor: "bg-blue-100"
  },
  {
    id: 2,
    name: "Vacuum Cleaner Robot",
    productId: "#940004",
    stock: 14,
    image: "🤖",
    bgColor: "bg-purple-100"
  },
  {
    id: 3,
    name: "KitchenAid Stand Mixer",
    productId: "#325569",
    stock: 21,
    image: "🥄",
    bgColor: "bg-amber-100"
  },
  {
    id: 4,
    name: "Levi's Trucker Jacket",
    productId: "#124588",
    stock: 12,
    image: "🧥",
    bgColor: "bg-blue-100"
  },
  {
    id: 5,
    name: "Lay's Classic",
    productId: "#365586",
    stock: 10,
    image: "🍟",
    bgColor: "bg-yellow-100"
  }
];

const recentSales = [
  {
    id: 1,
    name: "Apple Watch Series 9",
    category: "Electronics",
    price: 640,
    date: "Today",
    status: "Processing",
    image: "⌚",
    bgColor: "bg-gray-100"
  },
  {
    id: 2,
    name: "Gold Bracelet",
    category: "Fashion",
    price: 126,
    date: "Today",
    status: "Cancelled",
    image: "💍",
    bgColor: "bg-gray-800"
  },
  {
    id: 3,
    name: "Parachute Down Duvet",
    category: "Health",
    price: 69,
    date: "15 Jan 2025",
    status: "Onhold",
    image: "🪂",
    bgColor: "bg-orange-100"
  },
  {
    id: 4,
    name: "YETI Rambler Tumbler",
    category: "Sports",
    price: 65,
    date: "12 Jan 2025",
    status: "Processing",
    image: "🥤",
    bgColor: "bg-green-100"
  },
  {
    id: 5,
    name: "Osmo Genius Starter Kit",
    category: "Lifestyles",
    price: 87.56,
    date: "11 Jan 2025",
    status: "Completed",
    image: "🎮",
    bgColor: "bg-cyan-100"
  }
];

const RecentActivity = () => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'processing':
        return 'bg-purple-500 text-white';
      case 'cancelled':
        return 'bg-red-500 text-white';
      case 'onhold':
        return 'bg-cyan-500 text-white';
      case 'completed':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-[4rem] ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Top Selling Products */}
          <div className="bg-white rounded-xl  ">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-pink-500 rounded"></div>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Top Selling Products</h2>
                </div>
                <button className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <span>Today</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {topSellingProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`w-12 h-12 ${product.bgColor} rounded-xl flex items-center justify-center text-xl`}>
                      {product.image}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm font-medium text-gray-900">${product.price}</span>
                        <span className="text-sm text-gray-500">{product.sales}</span>
                      </div>
                    </div>
                    
                    <div className={`px-2 py-1 rounded-md text-xs font-medium ${
                      product.change > 0 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {product.change > 0 ? '↗' : '↘'} {Math.abs(product.change)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Low Stock Products */}
          <div className="bg-white rounded-xl ">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Low Stock Products</h2>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {lowStockProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`w-12 h-12 ${product.bgColor} rounded-xl flex items-center justify-center text-xl`}>
                      {product.image}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">ID : {product.productId}</p>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-xs text-gray-500 mb-1">Instock</p>
                      <p className="text-lg font-semibold text-orange-500">{product.stock}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Sales */}
          <div className="bg-white rounded-xl ">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-pink-500 rounded"></div>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900">Recent Sales</h2>
                </div>
                <button className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                  <span>Weekly</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                {recentSales.map((sale) => (
                  <div key={sale.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className={`w-12 h-12 ${sale.bgColor} rounded-xl flex items-center justify-center text-xl`}>
                      {sale.image}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">{sale.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-gray-500">{sale.category}</span>
                        <span className="text-sm font-medium text-gray-900">${sale.price}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm text-gray-500 mb-2">{sale.date}</p>
                      <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(sale.status)}`}>
                        {sale.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;