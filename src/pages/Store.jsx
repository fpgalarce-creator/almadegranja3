import { useMemo, useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import ProductList from '../components/ProductList';
import SortBar from '../components/SortBar';
import { useProducts } from '../context/ProductsContext';

const Store = () => {
  const { products, categories } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [sort, setSort] = useState('price-asc');

  const filtered = useMemo(() => {
    let list = [...products];
    if (selectedCategory !== 'Todos') {
      list = list.filter((p) => p.category === selectedCategory || (selectedCategory === 'Novedades' && p.featured));
    }

    switch (sort) {
      case 'price-desc':
        list.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        list.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        list.sort((a, b) => a.price - b.price);
    }
    return list;
  }, [products, selectedCategory, sort]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-6">
      <div className="space-y-2">
        <h1 className="section-title">Selecciona tus productos favoritos por categoría</h1>
        <p className="section-subtitle">Filtra, ordena y arma tu pedido en segundos.</p>
      </div>

      <CategoryFilter categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
      <SortBar value={sort} onChange={setSort} />
      <ProductList products={filtered} />
    </div>
  );
};

export default Store;
