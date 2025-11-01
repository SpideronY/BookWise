import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Sales Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-gray-500">Today's Sales</p>
                <p className="text-2xl font-bold">1,250 FCFA</p>
              </div>
              <div className="bg-blue-500 text-white p-3 rounded-full">
                <DollarSign size={24} />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">+5% from yesterday</p>
          </div>
        </div>

        {/* Products Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-gray-500">Total Products</p>
                <p className="text-2xl font-bold">580</p>
              </div>
              <div className="bg-green-500 text-white p-3 rounded-full">
                <Package size={24} />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">+10 new items</p>
          </div>
        </div>

        {/* Stock Alert Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-gray-500">Stock Alerts</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <div className="bg-yellow-500 text-white p-3 rounded-full">
                <ShoppingCart size={24} />
              </div>
            </div>
             <p className="text-xs text-gray-400 mt-2">Items with low stock</p>
          </div>
        </div>

        {/* Suppliers Card */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-gray-500">Suppliers</p>
                <p className="text-2xl font-bold">25</p>
              </div>
              <div className="bg-purple-500 text-white p-3 rounded-full">
                <Users size={24} />
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-2">Active suppliers</p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Sales Overview</h2>
            {/* Chart Placeholder */}
            <div className="h-64 bg-base-200 rounded-md flex items-center justify-center">
                <p>Chart will be here</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Top Selling Products</h2>
            {/* List Placeholder */}
            <ul className="menu">
                <li><a>Product 1</a></li>
                <li><a>Product 2</a></li>
                <li><a>Product 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
