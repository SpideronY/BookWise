import { Plus, Search, Trash2, X } from "lucide-react";

const Sales = () => {
  // Dummy data for products and cart
  const products = [
    { id: 1, name: "Le Père Goriot", price: 5000 },
    { id: 2, name: "Une vie de Boy", price: 3500 },
    { id: 3, name: "Cahier d'un retour au pays natal", price: 4000 },
    { id: 4, name: "Stylo à bille", price: 500 },
  ];

  const cart = [
    { id: 1, name: "Le Père Goriot", price: 5000, qty: 1 },
    { id: 2, name: "Stylo à bille", price: 500, qty: 2 },
  ];

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="flex h-[calc(100vh-6.5rem)] gap-4">
      {/* Products Section */}
      <div className="flex-[2] bg-base-100 rounded-lg shadow-lg p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <input type="text" placeholder="Search products..." className="input input-bordered w-full" />
          <button className="btn btn-ghost btn-circle">
            <Search />
          </button>
          <button className="btn btn-primary">
            <Plus /> Add Product
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto">
          {products.map(p => (
            <div key={p.id} className="card bg-base-200 shadow-md cursor-pointer">
              <div className="card-body p-4">
                <h2 className="card-title text-sm">{p.name}</h2>
                <p className="text-right font-bold">{p.price} FCFA</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="flex-1 bg-base-100 rounded-lg shadow-lg p-4 flex flex-col">
        <h2 className="text-xl font-bold mb-4">Current Sale</h2>
        <div className="overflow-x-auto flex-grow">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>Product</th>
                <th>Qty</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.price * item.qty}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">
                        <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="divider"></div>
        <div className="flex justify-between items-center font-bold text-lg">
          <span>Total</span>
          <span>{total} FCFA</span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
            <button className="btn btn-error">
                <X /> Cancel
            </button>
            <button className="btn btn-success">
                Pay
            </button>
        </div>
      </div>
    </div>
  );
};

export default Sales;
