import React from 'react';
import { 
  LayoutDashboard, 

  Package,
  Plus,
  Clock,

  Tag,
  Layers,
  Award,
  Ruler,

  Warehouse,
  RefreshCw,
  ArrowRightLeft,
  ShoppingCart,
  FileText,
  RotateCcw,

  ShoppingBag,
  File,
  Undo,

  Users,
  User,
  BarChart,
  Clock4,
  Package2,
  FileBarChart,
  Users2,
  UserCheck,
  PackageOpen,
  Receipt,

  ChevronRight,

} from 'lucide-react';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  hasSubmenu?: boolean;
  isActive?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const Sidebar: React.FC = () => {
  const navSections: NavSection[] = [
    {
      title: "Dashboard",
      items: [
        { icon: <LayoutDashboard size={16} />, label: "Dashboard",  },
 
      
      ]
    },
    {
      title: "Product Management",
      items: [
        { icon: <Package size={16} />, label: "Products",  },
        { icon: <Plus size={16} />, label: "Create Product" },
        { icon: <Clock size={16} />, label: "Expired Products" },

        { icon: <Tag size={16} />, label: "Category" },
        { icon: <Layers size={16} />, label: "Sub Category" },
        { icon: <Award size={16} />, label: "Brands" },
        { icon: <Ruler size={16} />, label: "Units" },
  
      ]
    },
    {
      title: "Stock",
      items: [
        { icon: <Warehouse size={16} />, label: "Manage Stock" },
        { icon: <RefreshCw size={16} />, label: "Stock Adjustment" },
        { icon: <ArrowRightLeft size={16} />, label: "Stock Transfer" }
      ]
    },
    {
      title: "Sales",
      items: [
        { icon: <ShoppingCart size={16} />, label: "Sales",  },
        { icon: <FileText size={16} />, label: "Invoices" },
        { icon: <RotateCcw size={16} />, label: "Sales Return" },

      ]
    },

    {
      title: "Purchases",
      items: [
        { icon: <ShoppingBag size={16} />, label: "Purchases" },
        { icon: <File size={16} />, label: "Purchase Order" },
        { icon: <Undo size={16} />, label: "Purchase Return" }
      ]
    },

    {
      title: "Peoples",
      items: [
        { icon: <Users size={16} />, label: "Customers" },
        { icon: <User size={16} />, label: "Billers" }
      ]
    },
    {
      title: "Reports",
      items: [
        { icon: <BarChart size={16} />, label: "Sales Report",  },
        { icon: <Clock4 size={16} />, label: "Purchase report" },
        { icon: <Package2 size={16} />, label: "Inventory Report",  },
        { icon: <FileBarChart size={16} />, label: "Invoice Report" },
        { icon: <Users2 size={16} />, label: "Supplier Report",  },
        { icon: <UserCheck size={16} />, label: "Customer Report",  },
        { icon: <PackageOpen size={16} />, label: "Product Report",  },
        { icon: <Receipt size={16} />, label: "Expense Report" },

      ]
    },
 
  ];

  return (
    <div className="w-64 bg-white border-r fixed border-gray-200 z-50 h-screen overflow-y-auto scrollbar-hide">
      <div className="p-4">
        {navSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">{section.title}</h3>
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <button
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150`}
                  >
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-3">
                        {item.icon}
                      </span>
                      {item.label}
                    </div>
          
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;