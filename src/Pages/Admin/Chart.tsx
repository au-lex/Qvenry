import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ShoppingCart, Users, Package, Settings, ChevronDown, Calendar } from 'lucide-react';

// Mock data for Sales & Purchase chart
const salesData = [
  { time: '2 am', purchase: 18000, sales: 5000 },
  { time: '4 am', purchase: 22000, sales: 8000 },
  { time: '6 am', purchase: 15000, sales: 12000 },
  { time: '8 am', purchase: 45000, sales: 20000 },
  { time: '10 am', purchase: 38000, sales: 25000 },
  { time: '12 am', purchase: 50000, sales: 18000 },
  { time: '14 pm', purchase: 8000, sales: 2000 },
  { time: '16 pm', purchase: 25000, sales: 22000 },
  { time: '18 pm', purchase: 55000, sales: 42000 },
  { time: '20 pm', purchase: 15000, sales: 8000 },
  { time: '22 pm', purchase: 42000, sales: 32000 },
  { time: '24 pm', purchase: 28000, sales: 20000 }
];

// Mock data for customer overview donut chart
const customerData = [
  { name: 'First Time', value: 5500, color: '#FB7C37' },
  { name: 'Return', value: 3500, color: '#22C55E' },
  { name: 'Others', value: 1000, color: '#E5E7EB' }
];

interface TimeFilter {
  label: string;
  value: string;
  active: boolean;
}

const AnalyticsDashboard: React.FC = () => {
  const [timeFilters, setTimeFilters] = useState<TimeFilter[]>([
    { label: '1D', value: '1d', active: false },
    { label: '1W', value: '1w', active: false },
    { label: '1M', value: '1m', active: false },
    { label: '3M', value: '3m', active: false },
    { label: '6M', value: '6m', active: false },
    { label: '1Y', value: '1y', active: true }
  ]);

  const handleTimeFilterChange = (selectedValue: string) => {
    setTimeFilters(filters =>
      filters.map(filter => ({
        ...filter,
        active: filter.value === selectedValue
      }))
    );
  };

  const totalPurchase = salesData.reduce((sum, item) => sum + item.purchase, 0);
  const totalSales = salesData.reduce((sum, item) => sum + item.sales, 0);

  return (
    <section className=" bg-gray-50 mt-[4rem] ">
      <section className="max-w-7xl mx-auto space-y-6">
        
        {/* Sales & Purchase Chart Section */}
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          
          {/* Main Chart */}
          <section className="xl:col-span-2 bg-white rounded-xl  border border-br ">
            <section className="">
              <section className="flex items-center justify-between mb-6  p-4 border-b border-br">
                <section className="flex items-center gap-3">
                  <section className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-4 h-4 text-orange-500" />
                  </section>
                  <h2 className="text-lg font-semibold text-gray-900">Sales & Purchase</h2>
                </section>
                
                <section className="flex items-center ">
                  {timeFilters.map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => handleTimeFilterChange(filter.value)}
                      className={`px-3 py-1.5 text-sm font-medium border border-br outline-0 transition-colors ${
                        filter.active
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </section>
              </section>

              <section className="flex items-center gap-3 mb-6 p-4">
                <section className='border border-br p-3 rounded-lg'>
                  <section className="flex items-center gap-2 mb-1 ">
                    <section className="w-3 h-3 bg-orange-200 rounded"></section>
                    <span className="text-sm text-gray-500">Total Purchase</span>
                  </section>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round(totalPurchase / 1000)}K
                  </p>
                </section>

                <section className='border border-br p-3 rounded-lg'>
                  <section className="flex items-center gap-2 mb-1">
                    <section className="w-3 h-3 bg-orange-500 rounded"></section>
                    <span className="text-sm text-gray-500">Total Sales</span>
                  </section>
                  <p className="text-2xl font-bold text-gray-900">
                    {Math.round(totalSales / 1000)}K
                  </p>
                </section>
              </section>

              <section className="h-100">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                    <XAxis 
                      dataKey="time" 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                    />
                    <YAxis 
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#6b7280', fontSize: 12 }}
                      tickFormatter={(value) => `${value / 1000}K`}
                    />
                    <Bar 
                      dataKey="purchase" 
                      fill="#fed7aa" 
                      radius={[4, 4, 0, 0]}
                      stackId="stack"
                    />
                    <Bar 
                      dataKey="sales" 
                      fill="#fb923c" 
                      radius={[4, 4, 0, 0]}
                      stackId="stack"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </section>
            </section>
          </section>

          {/* Overall Information */}
          <section className="bg-white rounded-xl  border border-br">
            <section className="p-6">
              <section className="flex items-center gap-3 mb-6">
                <section className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <section className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <section className="w-2 h-2 bg-white rounded-full"></section>
                  </section>
                </section>
                <h2 className="text-lg font-semibold text-gray-900">Overall Information</h2>
              </section>

              <section className="space-y-6 grid grid-cols-1 lg:grid-cols-3">
                <section className="text-center">
                  <section className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-blue-500" />
                  </section>
                  <p className="text-sm text-gray-500 mb-1">Suppliers</p>
                  <p className="text-2xl font-bold text-gray-900">6987</p>
                </section>

                <section className="text-center">
                  <section className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-orange-500" />
                  </section>
                  <p className="text-sm text-gray-500 mb-1">Customer</p>
                  <p className="text-2xl font-bold text-gray-900">4896</p>
                </section>

                <section className="text-center">
                  <section className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Package className="w-6 h-6 text-teal-500" />
                  </section>
                  <p className="text-sm text-gray-500 mb-1">Orders</p>
                  <p className="text-2xl font-bold text-gray-900">487</p>
                </section>
              </section>


                     {/* Customers Overview Section */}
        <section className=" gap-6">
          
          {/* Customer Overview Chart */}
          <section className="bg-white rounded-xl r border-gray-100">
            <section className="p-6">
              <section className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Customers Overview</h2>
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors border">
                  <Calendar className="w-4 h-4" />
                  <span>Today</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </section>

              <section className="flex items-center justify-between">
                <section className="flex-1">
                  <section className="h-48 flex items-center justify-center">
                    <section className="relative">
                      <ResponsiveContainer width={200} height={200}>
                        <PieChart>
                          <Pie
                            data={customerData}
                            cx={100}
                            cy={100}
                            innerRadius={60}
                            outerRadius={90}
                            paddingAngle={2}
                            dataKey="value"
                          >
                            {customerData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </section>
                  </section>
                </section>
                
                <section className="flex-1 space-y-4">
                  <section className="text-center">
                    <p className="text-3xl font-bold text-gray-900">5.5K</p>
                    <p className="text-orange-500 font-medium mb-1">First Time</p>
                    <section className="flex items-center justify-center gap-1">
                      <section className="w-2 h-2 bg-green-500 rounded-full"></section>
                      <span className="text-xs text-green-600 font-medium">25%</span>
                    </section>
                  </section>
                  
                  <section className="text-center">
                    <p className="text-3xl font-bold text-gray-900">3.5K</p>
                    <p className="text-teal-500 font-medium mb-1">Return</p>
                    <section className="flex items-center justify-center gap-1">
                      <section className="w-2 h-2 bg-green-500 rounded-full"></section>
                      <span className="text-xs text-green-600 font-medium">21%</span>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>

          {/* Settings Card */}
     
        </section>
            </section>
          </section>
        </section>

 
      </section>
    </section>
  );
};

export default AnalyticsDashboard;