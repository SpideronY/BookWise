import { Plus, Search, MoreVertical, Edit, Trash } from "lucide-react";

const Products = () => {
  // Dummy data for products
  const products = [
    { id: 1, sku: 'FR-LIV-001', title: 'Le Père Goriot', author: 'Honoré de Balzac', category: 'Livre-FR', price: 5000, stock: 15 },
    { id: 2, sku: 'EN-LIV-002', title: 'Things Fall Apart', author: 'Chinua Achebe', category: 'Livre-EN', price: 4500, stock: 25 },
    { id: 3, sku: 'FR-FOUR-003', title: 'Cahier 200p', author: '', category: 'Fourniture', price: 1000, stock: 120 },
    { id: 4, sku: 'FR-FOUR-004', title: 'Stylo à bille Bleu', author: '', category: 'Fourniture', price: 500, stock: 250 },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Products</h1>
        <button className="btn btn-primary">
          <Plus /> Add Product
        </button>
      </div>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <input type="text" placeholder="Search products..." className="input input-bordered w-full" />
              <button className="btn btn-ghost btn-circle">
                <Search />
              </button>
            </div>
            {/* Filter Dropdown can be added here */}
          </div>

          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>SKU</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map(p => (
                  <tr key={p.id}>
                    <td>{p.sku}</td>
                    <td>{p.title}</td>
                    <td>{p.author}</td>
                    <td>{p.category}</td>
                    <td>{p.price} FCFA</td>
                    <td>{p.stock}</td>
                    <td>
                      <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-xs m-1"><MoreVertical size={16}/></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                          <li><a><Edit size={16}/> Edit</a></li>
                          <li><a><Trash size={16}/> Delete</a></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
