import { useState } from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addItem, openCart } = useCart();
  const [qty, setQty] = useState(1);
  const disabled = product.stock === 0;

  const handleAdd = () => {
    addItem(product, qty);
    openCart();
  };

  return (
    <article className="card-base flex flex-col overflow-hidden h-full">
      <div className="relative">
        <img src={product.image} alt={product.name} className="h-48 w-full object-cover" />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-brand-primary text-white text-xs px-3 py-1 rounded-full shadow-soft">
            Destacado
          </span>
        )}
      </div>
      <div className="flex-1 p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-brand-text dark:text-brand-light">{product.name}</h3>
          <span className="text-xs bg-brand-muted text-brand-text px-2 py-1 rounded-full">{product.category}</span>
        </div>
        <p className="text-sm text-brand-text/80 dark:text-brand-light/80 line-clamp-2">{product.description}</p>
        <div className="text-sm text-brand-text/70 dark:text-brand-light/70">{product.weight}</div>
        <div className="flex items-center justify-between mt-auto">
          <div className="text-xl font-semibold text-brand-primary">${product.price.toLocaleString('es-CL')}</div>
          <div className="text-xs text-brand-text/70 dark:text-brand-light/70">
            {product.stock > 0 ? `${product.stock} disp.` : 'Sin stock'}
          </div>
        </div>
        <div className="flex items-center justify-between mt-3 gap-3">
          <div className="flex items-center border border-brand-muted/60 rounded-full overflow-hidden">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="px-3 py-2 hover:bg-brand-muted/40"
            >
              -
            </button>
            <span className="px-4 py-2 text-sm">{qty}</span>
            <button
              type="button"
              onClick={() => setQty((q) => Math.min(product.stock || 1, q + 1))}
              className="px-3 py-2 hover:bg-brand-muted/40"
            >
              +
            </button>
          </div>
          <button
            type="button"
            disabled={disabled}
            onClick={handleAdd}
            className={`flex-1 btn-primary text-center ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
