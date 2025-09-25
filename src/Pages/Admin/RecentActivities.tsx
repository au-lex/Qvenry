import React from 'react';
import { ChevronDown, AlertTriangle, TrendingUp, ShoppingCart } from 'lucide-react';

// Types
interface BaseProduct {
  id: number;
  name: string;
  image: string;
  bgColor: string;
}

interface TopSellingProduct extends BaseProduct {
  price: number;
  sales: string;
  change: number;
  iconBg: string;
}

interface LowStockProduct extends BaseProduct {
  productId: string;
  stock: number;
}

interface RecentSale extends BaseProduct {
  category: string;
  price: number;
  date: string;
  status: 'Processing' | 'Cancelled' | 'Onhold' | 'Completed';
}

type StatusType = 'processing' | 'cancelled' | 'onhold' | 'completed';

// Mock data
const topSellingProducts: TopSellingProduct[] = [
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

const lowStockProducts: LowStockProduct[] = [
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

const recentSales: RecentSale[] = [
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

// Component interfaces
interface ActivityCardProps {
  title: string;
  icon: React.ReactNode;
  iconBg?: string;
  headerAction?: React.ReactNode;
  children: React.ReactNode;
}

interface ListItemProps {
  children: React.ReactNode;
}

interface ProductAvatarProps {
  image: string;
  bgColor: string;
}

// Reusable Card Component
const ActivityCard: React.FC<ActivityCardProps> = ({ 
  title, 
  icon, 
  iconBg = "bg-blue-100", 
  headerAction, 
  children 
}) => {
  return (
    <section className="bg-white rounded-xl border border-gray-200">
      <section className="p-5 border-b border-gray-100">
        <section className="flex items-center justify-between">
          <section className="flex items-center gap-3">
            <section className={`w-8 h-8 ${iconBg} rounded-lg flex items-center justify-center`}>
              {icon}
            </section>
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          </section>
          {headerAction}
        </section>
      </section>
      
      <section className="p-1">
        <section className="space-y-4">
          {children}
        </section>
      </section>
    </section>
  );
};

// Reusable List Item Component
const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return (
    <section className="flex items-center gap-4 p-3 border-b border-gray-200 hover:bg-gray-50 rounded-lg transition-colors">
      {children}
    </section>
  );
};

// Product Avatar Component
const ProductAvatar: React.FC<ProductAvatarProps> = ({ image, bgColor }) => {
  return (
    <section className={`w-12 h-12 ${bgColor} rounded-xl flex items-center justify-center text-xl`}>
      {image}
    </section>
  );
};

const RecentActivity: React.FC = () => {
  const getStatusColor = (status: StatusType): string => {
    switch (status.toLowerCase() as StatusType) {
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

  const TopSellingCard: React.FC = () => (
    <ActivityCard
      title="Top Selling Products"
      icon={<TrendingUp className="w-4 h-4 text-blue-600" />}
      iconBg="bg-blue-100"
      headerAction={
        <button className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
          <span>Today</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      }
    >
      {topSellingProducts.map((product: TopSellingProduct) => (
        <ListItem key={product.id}>
          <ProductAvatar image={product.image} bgColor={product.bgColor} />
          
          <section className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
            <section className="flex items-center gap-3 mt-1">
              <span className="text-sm font-medium text-gray-900">${product.price}</span>
              <span className="text-sm text-gray-500">{product.sales}</span>
            </section>
          </section>
          
          <section className={`px-2 py-1 rounded-md text-xs font-medium ${
            product.change > 0 
              ? 'bg-green-100 text-green-700' 
              : 'bg-red-100 text-red-700'
          }`}>
            {product.change > 0 ? '↗' : '↘'} {Math.abs(product.change)}%
          </section>
        </ListItem>
      ))}
    </ActivityCard>
  );

  const LowStockCard: React.FC = () => (
    <ActivityCard
      title="Low Stock Products"
      icon={<AlertTriangle className="w-4 h-4 text-orange-600" />}
      iconBg="bg-orange-100"
      headerAction={
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      }
    >
      {lowStockProducts.map((product: LowStockProduct) => (
        <ListItem key={product.id}>
          <ProductAvatar image={product.image} bgColor={product.bgColor} />
          
          <section className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-1">ID : {product.productId}</p>
          </section>
          
          <section className="text-right">
            <p className="text-xs text-gray-500 mb-1">Instock</p>
            <p className="text-lg font-semibold text-orange-500">{product.stock}</p>
          </section>
        </ListItem>
      ))}
    </ActivityCard>
  );

  const RecentSalesCard: React.FC = () => (
    <ActivityCard
      title="Recent Sales"
      icon={<ShoppingCart className="w-4 h-4 text-green-600" />}
      iconBg="bg-green-100"
      headerAction={
        <button className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
          <span>Weekly</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      }
    >
      {recentSales.map((sale: RecentSale) => (
        <ListItem key={sale.id}>
          <ProductAvatar image={sale.image} bgColor={sale.bgColor} />
          
          <section className="flex-1 min-w-0">
            <h3 className="font-medium text-gray-900 truncate">{sale.name}</h3>
            <section className="flex items-center gap-3 mt-1">
              <span className="text-sm text-gray-500">{sale.category}</span>
              <span className="text-sm font-medium text-gray-900">${sale.price}</span>
            </section>
          </section>
          
          <section className="text-right">
            <p className="text-sm text-gray-500 mb-2">{sale.date}</p>
            <span className={`px-2 py-1 rounded-md text-xs font-medium ${getStatusColor(sale.status.toLowerCase() as StatusType)}`}>
              {sale.status}
            </span>
          </section>
        </ListItem>
      ))}
    </ActivityCard>
  );

  return (
    <section className="bg-gray-50 mt-16">
      <section className="max-w-7xl mx-auto">
        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <TopSellingCard />
          <LowStockCard />
          <RecentSalesCard />
        </section>
      </section>
    </section>
  );
};

export default RecentActivity;