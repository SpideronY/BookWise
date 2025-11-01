import { NavLink, Outlet } from "react-router-dom";
import { SlidersHorizontal, LayoutDashboard, ShoppingCart, Package } from "lucide-react";

const MainLayout = () => {
  return (
    <div className="flex h-screen bg-base-200">
      <div className="w-64 bg-base-100 p-4 flex flex-col">
        {/* Sidebar */}
        <h1 className="text-2xl font-bold">BookWise</h1>
        <ul className="menu mt-4 flex-grow">
          <li>
            <NavLink to="/" end>
              <LayoutDashboard size={20} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/sales">
              <ShoppingCart size={20} />
              Sales
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <Package size={20} />
              Products
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/settings">
                <SlidersHorizontal size={20} />
                Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="navbar bg-base-100">
          {/* Header */}
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">BookWise</a>
          </div>
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
          </div>
        </div>
        <main className="p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
