import { useCart } from '../context/CartContext';
import { formatWhatsAppMessage } from '../utils/whatsappFormatter';

const CartDrawer = () => {
  const { items, totals, isCartOpen, closeCart, updateQuantity, removeItem, customer, setCustomer, clearCart } = useCart();
  const phone = '+56958086762';

  const handleCheckout = () => {
    if (!items.length) return;
    const message = formatWhatsAppMessage(items, customer);
    window.open(`https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div
      className={`fixed inset-y-0 right-0 w-full sm:w-[420px] bg-white dark:bg-brand-dark shadow-2xl transform transition-transform duration-300 z-40 overflow-y-auto ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between px-5 py-4 border-b border-brand-muted/50 dark:border-brand-dark">
        <div>
          <p className="text-lg font-display text-brand-text dark:text-brand-light">Tu carrito</p>
          <p className="text-sm text-brand-text/70 dark:text-brand-light/70">{items.length} productos seleccionados</p>
        </div>
        <button
          type="button"
          onClick={closeCart}
          className="text-brand-text dark:text-brand-light text-xl hover:text-brand-primary"
          aria-label="Cerrar"
        >
          ×
        </button>
      </div>

      <div className="p-5 space-y-4">
        {!items.length && <p className="text-sm text-brand-text/70 dark:text-brand-light/70">Tu carrito está vacío.</p>}
        {items.map((item) => (
          <div key={item.id} className="border border-brand-muted/50 dark:border-brand-dark rounded-2xl p-3 flex gap-3">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-xl" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-brand-text dark:text-brand-light">{item.name}</h4>
                <button
                  type="button"
                  className="text-xs text-brand-text/60 hover:text-brand-primary"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </button>
              </div>
              <p className="text-xs text-brand-text/70 dark:text-brand-light/70">{item.category}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                    className="w-8 h-8 rounded-full border border-brand-muted/50"
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, Math.min(item.quantity + 1, item.stock))}
                    className="w-8 h-8 rounded-full border border-brand-muted/50"
                  >
                    +
                  </button>
                </div>
                <div className="text-sm font-semibold text-brand-primary">
                  ${(item.price * item.quantity).toLocaleString('es-CL')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 pb-6 space-y-4 border-t border-brand-muted/50 dark:border-brand-dark">
        <div className="flex items-center justify-between text-brand-text dark:text-brand-light">
          <span className="font-medium">Subtotal</span>
          <span className="text-xl font-semibold text-brand-primary">${totals.subtotal.toLocaleString('es-CL')}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="Nombre"
            value={customer.firstName}
            onChange={(e) => setCustomer((prev) => ({ ...prev, firstName: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
          />
          <input
            type="text"
            placeholder="Apellido"
            value={customer.lastName}
            onChange={(e) => setCustomer((prev) => ({ ...prev, lastName: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
          />
          <input
            type="text"
            placeholder="Dirección"
            value={customer.address}
            onChange={(e) => setCustomer((prev) => ({ ...prev, address: e.target.value }))}
            className="w-full col-span-1 md:col-span-2 px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
          />
          <textarea
            placeholder="Comentarios"
            value={customer.notes}
            onChange={(e) => setCustomer((prev) => ({ ...prev, notes: e.target.value }))}
            rows="3"
            className="w-full col-span-1 md:col-span-2 px-4 py-3 rounded-xl border border-brand-muted/50 dark:border-brand-dark bg-white dark:bg-brand-dark text-brand-text dark:text-brand-light"
          />
        </div>

        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={handleCheckout}
            disabled={!items.length}
            className={`btn-primary w-full text-center ${!items.length ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            Enviar pedido por WhatsApp
          </button>
          <button
            type="button"
            onClick={clearCart}
            disabled={!items.length}
            className={`px-4 py-3 rounded-full border border-brand-muted/60 dark:border-brand-muted/30 text-brand-text dark:text-brand-light hover:border-brand-primary ${
              !items.length ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Vaciar carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
