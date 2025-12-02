import { useEffect, useState } from 'react';
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
  const { user, login, logout } = useAuth();
  const { products, addProduct, updateProduct, deleteProduct, categories } = useProducts();
  const [form, setForm] = useState(emptyProduct);
  const [editingId, setEditingId] = useState(null);
  const [credentials, setCredentials] = useState({ email: 'admin@almadegranja.cl', password: 'Admin123' });
  const [error, setError] = useState('');

  useEffect(() => {
    if (!editingId) {
      setForm(emptyProduct);
    }
  }, [editingId]);

  const handleLogin = (e) => {
    e.preventDefault();
    const result = login(credentials);
    if (!result.success) setError(result.message || 'Error al iniciar sesión');
  };

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
  };

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-4 py-10 space-y-4">
        <h1 className="section-title">Panel administrador</h1>
        <form onSubmit={handleLogin} className="card-base p-6 space-y-4">
          <input
            type="email"
            value={credentials.email}
            onChange={(e) => setCredentials((prev) => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
            placeholder="Correo"
            required
          />
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials((prev) => ({ ...prev, password: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
            placeholder="Contraseña"
            required
          />
          <button type="submit" className="btn-primary w-full">
            Ingresar
          </button>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="section-title">Panel administrador</h1>
          <p className="section-subtitle">Gestiona productos destacados y catálogo.</p>
        </div>
        <button type="button" onClick={logout} className="btn-secondary">
          Cerrar sesión
        </button>
      </div>

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
        <h3 className="text-xl font-heading text-brand-text dark:text-brand-light">Productos</h3>
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
    </div>
  );
};

export default Admin;
