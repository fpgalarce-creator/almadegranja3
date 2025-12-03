import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useProducts } from '../context/ProductsContext';

const emptyProduct = {
  id: '',
  name: '',
  category: 'Huevos',
  description: '',
  price: 0,
  stock: 0,
  weight: '',
  image: '',
  featured: false,
};

const Admin = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { products, addProduct, updateProduct, deleteProduct, categories } = useProducts();
  const [form, setForm] = useState(emptyProduct);
  const [editingId, setEditingId] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    if (!editingId) {
      setForm(emptyProduct);
    }
  }, [editingId]);

  const totalProducts = products.length;
  const featuredCount = useMemo(() => products.filter((item) => item.featured).length, [products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.id) return;

    const payload = { ...form, price: Number(form.price), stock: Number(form.stock) };
    if (editingId) {
      updateProduct(editingId, payload);
    } else {
      addProduct(payload);
    }
    setForm(emptyProduct);
    setEditingId(null);
  };

  const handleEdit = (product) => {
    setEditingId(product.id);
    setForm(product);
    setActiveTab('products');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="section-title">Panel administrador</h1>
          <p className="section-subtitle">Gestiona productos destacados y catálogo.</p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="text-brand-text dark:text-brand-light font-display">Hola, {user?.role === 'admin' ? 'Admin' : user?.email}</span>
          <button type="button" onClick={handleLogout} className="btn-secondary">
            Cerrar sesión
          </button>
        </div>
      </div>

      <div className="flex gap-3 border-b border-brand-muted/50 dark:border-brand-dark text-sm font-semibold">
        {[
          { key: 'dashboard', label: 'Dashboard' },
          { key: 'products', label: 'Productos' },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2 rounded-t-xl transition-colors ${
              activeTab === tab.key
                ? 'bg-brand-primary text-white shadow-soft'
                : 'text-brand-text dark:text-brand-light hover:text-brand-primary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'dashboard' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="card-base p-5 space-y-2">
              <p className="text-sm text-brand-text/70 dark:text-brand-light/70">Productos cargados</p>
              <p className="text-3xl font-display text-brand-text dark:text-brand-light">{totalProducts}</p>
              <p className="text-sm text-brand-text/60 dark:text-brand-light/60">Incluye todas las categorías disponibles.</p>
            </div>
            <div className="card-base p-5 space-y-2">
              <p className="text-sm text-brand-text/70 dark:text-brand-light/70">Destacados en inicio</p>
              <p className="text-3xl font-display text-brand-text dark:text-brand-light">{featuredCount}</p>
              <p className="text-sm text-brand-text/60 dark:text-brand-light/60">Productos marcados como destacados.</p>
            </div>
            <div className="card-base p-5 space-y-2">
              <p className="text-sm text-brand-text/70 dark:text-brand-light/70">Última actualización</p>
              <p className="text-xl font-display text-brand-text dark:text-brand-light">{new Date().toLocaleDateString('es-CL')}</p>
              <p className="text-sm text-brand-text/60 dark:text-brand-light/60">Visibilidad inmediata en la tienda.</p>
            </div>
          </div>

          <div className="card-base p-6 space-y-3">
            <h3 className="text-xl font-display text-brand-text dark:text-brand-light">Bienvenido al panel</h3>
            <p className="text-brand-text/80 dark:text-brand-light/80">
              Desde aquí puedes revisar el estado general de tus productos, ver cuántos se muestran como destacados y actualizar
              la información que se ve en la tienda. Cualquier cambio se refleja al instante para tus clientes.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'products' && (
        <>
          <form onSubmit={handleSubmit} className="card-base p-6 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                placeholder="Slug único (ej: queso-cabra)"
                value={form.id}
                onChange={(e) => setForm((prev) => ({ ...prev, id: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
                required
              />
              <input
                placeholder="Nombre"
                value={form.name}
                onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
                required
              />
              <select
                value={form.category}
                onChange={(e) => setForm((prev) => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
              >
                {categories.filter((c) => c !== 'Todos').map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <input
                placeholder="Precio"
                type="number"
                value={form.price}
                onChange={(e) => setForm((prev) => ({ ...prev, price: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
              />
              <input
                placeholder="Stock"
                type="number"
                value={form.stock}
                onChange={(e) => setForm((prev) => ({ ...prev, stock: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
              />
              <input
                placeholder="Peso / presentación"
                value={form.weight}
                onChange={(e) => setForm((prev) => ({ ...prev, weight: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
              />
              <input
                placeholder="URL de imagen"
                value={form.image}
                onChange={(e) => setForm((prev) => ({ ...prev, image: e.target.value }))}
                className="w-full md:col-span-2 px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
              />
              <textarea
                placeholder="Descripción"
                value={form.description}
                onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
                rows="3"
                className="w-full md:col-span-2 px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
              />
              <label className="flex items-center gap-2 text-sm text-brand-text dark:text-brand-light md:col-span-2">
                <input
                  type="checkbox"
                  checked={form.featured}
                  onChange={(e) => setForm((prev) => ({ ...prev, featured: e.target.checked }))}
                />
                Destacado en inicio
              </label>
            </div>
            <button type="submit" className="btn-primary">
              {editingId ? 'Guardar cambios' : 'Crear producto'}
            </button>
          </form>

          <div className="card-base p-6 space-y-3 overflow-x-auto">
            <h3 className="text-xl font-display text-brand-text dark:text-brand-light">Productos</h3>
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-brand-text/70 dark:text-brand-light/70">
                  <th className="py-2">Nombre</th>
                  <th className="py-2">Categoría</th>
                  <th className="py-2">Precio</th>
                  <th className="py-2">Stock</th>
                  <th className="py-2">Destacado</th>
                  <th className="py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t border-brand-muted/40 dark:border-brand-dark">
                    <td className="py-2">{product.name}</td>
                    <td className="py-2">{product.category}</td>
                    <td className="py-2">${product.price.toLocaleString('es-CL')}</td>
                    <td className="py-2">{product.stock}</td>
                    <td className="py-2">{product.featured ? 'Sí' : 'No'}</td>
                    <td className="py-2 space-x-2">
                      <button
                        type="button"
                        className="text-brand-primary"
                        onClick={() => handleEdit(product)}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="text-red-600"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
