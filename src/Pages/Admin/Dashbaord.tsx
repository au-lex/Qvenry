import React from 'react';
import { 
  Calendar, 
  X, 
  FileText, 
  RotateCcw, 
  ShoppingBag, 
  Shield,
  DollarSign,
  Clock,
  Receipt,
  Hash,
  Info
} from 'lucide-react';

interface MetricCardProps {
  title: string;
  amount: string;
  percentage: string;
  isPositive: boolean;
  bgColor: string;
  icon: React.ReactNode;
}

interface StatCardProps {
  title: string;
  amount: string;
  percentage: string;
  isPositive: boolean;
  icon: React.ReactNode;
  iconBg: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  amount, 
  percentage, 
  isPositive, 
  bgColor, 
  icon 
}) => (
  <section className={`${bgColor} rounded-lg h-[6rem] items-center flex flex-col justify-center`}>
    <section className="flex items-center justify-center gap-3 ">
      <section className="p-3 bg-white/20 rounded-lg w-[3rem] h-[3rem] flex items-center justify-center">
        {icon}
      </section>

      <section>
      <p className="text-sm text-white ">{title}</p>
      <span className="flex gap-3">

      <p className="text-xl font-bold m text-white">{amount}</p>
      <section className="flex items-center">
        <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${
          isPositive ? 'bg-white/20 text-white' : 'bg-red-100 text-red-800'
        }`}>
          {isPositive ? '↗' : '↘'} {percentage}
        </span>
      </section>
      </span>

    </section>
    </section>
  
  </section>
);

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  amount, 
  percentage, 
  isPositive, 
  icon, 
  iconBg 
}) => (
  <section className="bg-white rounded-xl p-6 border border-br">
    <section className="flex items-center justify-between mb-4">
      <section>
        <p className="text-2xl font-bold text-gray-900">{amount}</p>
        <p className="text-sm text-gray-500">{title}</p>
      </section>
      <section className={`p-3 ${iconBg} rounded-lg`}>
        {icon}
      </section>
    </section>
    <section className="flex items-center justify-between">
      <span className={`text-sm font-medium ${
        isPositive ? 'text-green-600' : 'text-red-600'
      }`}>
        {percentage} vs Last Month
      </span>
      <button className="text-sm text-gray-500 hover:text-gray-700">
        View All
      </button>
    </section>
  </section>
);

const Dashboard: React.FC = () => {
  return (
    <section className=" bg-gray-50 ">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="flex items-center justify-between mb-6">
          <section>
            <h1 className="text-3xl font-bold text-gray-900">Welcome, Admin</h1>
            <p className="text-gray-600">
              You have <span className="text-orange-600 font-semibold">200+</span> Orders, Today
            </p>
          </section>
          <section className="flex items-center gap-2 text-gray-600 bg-white border border-br p-2 rounded">
            <Calendar size={20} />
            <span className='text-[15px]'>09/18/2025 - 09/24/2025</span>
          </section>
        </section>

        {/* Alert */}
        <section className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 h-[3rem] flex items-center justify-between">
          <section className="flex items-center  gap-3">
           <Info size={20} className="text-orange-600" />
            <p className="text-sm text-gray-700 pt-3">
              Your Product <span className="font-semibold text-orange-600">Apple Iphone 15</span> is running Low, 
              already below 5 Pcs. <span className="text-orange-600 underline cursor-pointer">Add Stock</span>
            </p>
          </section>
          <button className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </section>

        {/* Metric Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 text-white">
          <MetricCard
            title="Total Sales"
            amount="$48,988,078"
            percentage="+22%"
            isPositive={true}
            bgColor="bg-gradient-to-r from-orange-400 to-orange-500"
            icon={<FileText size={24} />}
          />
          <MetricCard
            title="Total Sales Return"
            amount="$16,478,145"
            percentage="-22%"
            isPositive={false}
            bgColor="bg-gradient-to-r from-slate-700 to-slate-800"
            icon={<RotateCcw size={24} />}
          />
          <MetricCard
            title="Total Purchase"
            amount="$24,145,789"
            percentage="+22%"
            isPositive={true}
            bgColor="bg-gradient-to-r from-teal-500 to-teal-600"
            icon={<ShoppingBag size={24} />}
          />
          <MetricCard
            title="Total Purchase Return"
            amount="$18,458,747"
            percentage="+22%"
            isPositive={true}
            bgColor="bg-gradient-to-r from-blue-500 to-blue-600"
            icon={<Shield size={24} />}
          />
        </section>

        {/* Stat Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Profit"
            amount="$8,458,798"
            percentage="+35%"
            isPositive={true}
            icon={<DollarSign size={20} className="text-teal-600" />}
            iconBg="bg-teal-100"
          />
          <StatCard
            title="Invoice Due"
            amount="$48,988,78"
            percentage="+35%"
            isPositive={true}
            icon={<Clock size={20} className="text-blue-600" />}
            iconBg="bg-blue-100"
          />
          <StatCard
            title="Total Expenses"
            amount="$8,980,097"
            percentage="+41%"
            isPositive={true}
            icon={<Receipt size={20} className="text-orange-600" />}
            iconBg="bg-orange-100"
          />
          <StatCard
            title="Total Payment Returns"
            amount="$78,458,798"
            percentage="-20%"
            isPositive={false}
            icon={<Hash size={20} className="text-purple-600" />}
            iconBg="bg-purple-100"
          />
        </section>
      </section>
    </section>
  );
};

export default Dashboard;