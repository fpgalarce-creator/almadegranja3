import { createContext, useContext, useEffect, useState } from 'react';
import productsData from '../data/defaultProducts.json';

const ProductsContext = createContext();
const STORAGE_KEY = 'almadegranja_products';

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : productsData;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => setProducts((prev) => [...prev, product]);

  const updateProduct = (id, newData) =>
    setProducts((prev) => prev.map((product) => (product.id === id ? { ...product, ...newData } : product)));

  const deleteProduct = (id) => setProducts((prev) => prev.filter((product) => product.id !== id));

  const toggleFeatured = (id) =>
    setProducts((prev) => prev.map((product) => (product.id === id ? { ...product, featured: !product.featured } : product)));

  const categories = ['Todos', 'Huevos', 'Quesos', 'Frutos secos', 'Otros', 'Novedades'];

  return (
    <ProductsContext.Provider value={{ products, addProduct, updateProduct, deleteProduct, toggleFeatured, categories }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
